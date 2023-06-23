import { List, ToDo } from './factoryFunctions';
import { displayItems, displayProjects } from './displayItems';
import changeDom from './changeDom';


const buttonHandler = function(ProjectList) {

    //selecting lists and projects
    const buttons = document.querySelectorAll('button');
    const itemTitle = document.getElementById("itemTitle");
    for(const button of buttons){
        if(button.classList.contains('list')){
            button.addEventListener("click", () => {
                const buttons = document.querySelectorAll('button');
                for(const button of buttons){
                    button.classList.remove("selected");
                }
                button.classList.add("selected");
                itemTitle.textContent = button.textContent;
                displayItems(ProjectList,itemTitle.textContent.toLowerCase())
            })
        }
    }

    //making new tasks
    const openPopupBtn = document.getElementById("makeItem");
    const itemForm = document.getElementById("itemForm");
    const popupForm = document.getElementById("popupForm");
    const popupContent = document.getElementById("popup-content");
    const submitTask = document.getElementById("submitTask");
    const createTaskInput = popupForm.querySelector('#createTask');
    const taskDescriptionInput = popupForm.querySelector('#taskDescription');
    const dueDateInput = popupForm.querySelector('#dueDate');
    const dueTimeInput = popupForm.querySelector('#dueTime');
    const listButtons = popupForm.querySelector('#listButtons');

    openPopupBtn.addEventListener("click", () => {
        popupForm.style.display = "block";
        listButtons.innerHTML = '';
        for (const key in ProjectList) {
            if (ProjectList.hasOwnProperty(key) && ProjectList[key].getStd() !== true) {
              const label = document.createElement('label');
              const checkbox = document.createElement('input');
              checkbox.type = 'checkbox';
              checkbox.name = key;
          
              label.appendChild(checkbox);
              label.appendChild(document.createTextNode(ProjectList[key].getName()));
          
              listButtons.appendChild(label)
            }
          }
    });
    document.addEventListener("click", (event) => {
        const targetElement = event.target;
        if (!popupContent.contains(targetElement) && targetElement !== openPopupBtn) {
            popupForm.style.display = "none";
        }
    });
    submitTask.addEventListener("click", () => {
        const name = createTaskInput.value;
        const descrip = taskDescriptionInput.value;
        const date = dueDateInput.value;
        const time = dueTimeInput.value;
        const prio = document.querySelector('input[name="priority"]:checked') ? document.querySelector('input[name="priority"]:checked').value : null;
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');

        const task = ToDo(name,descrip,date,time,prio,);

        checkboxes.forEach((checkbox) => {
          if (checkbox.checked) {
            ProjectList[checkbox.name].addItem(task)
          }
        });
        ProjectList.all.addItem(task)
        popupForm.style.display = "none";
    });
    popupForm.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            submitTask.click();
        }
    });

    
    //making new projects
    const makeProject = document.getElementById("makeProject");
    const projectForm = document.getElementById("projectForm");
    const closeProjectForm = document.getElementById("closeProjectForm");
    const submitProject = document.getElementById("submitProject");
    const projectName = document.getElementById("projectName");
    makeProject.addEventListener("click", () => {
        projectForm.style.display = 'block';
        makeProject.style.display = 'none';
    });
    closeProjectForm.addEventListener("click", () => {
        projectForm.style.display = 'none';
        makeProject.style.display = 'block';
    });
    submitProject.addEventListener("click", () => {
        if(ProjectList[projectName.value]){
            return;
        };
        ProjectList[projectName.value] = List(projectName.value);
        makeProject.style.display = 'block';
        projectForm.style.display = 'none';
        const project = changeDom('projects', 'button', projectName.value, "projectName",)
        projectName.value = '';
        project.addEventListener("click", () => {
            const buttons = document.querySelectorAll("button");
            for(const button of buttons){
                button.classList.remove("selected");
            }
            project.classList.add("selected");
            itemTitle.textContent = project.textContent;
            displayItems(ProjectList,project.textContent)
        })
    });
    projectName.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            submitProject.click();
        }
    });
}

export default buttonHandler