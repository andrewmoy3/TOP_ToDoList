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
            })
        }
    }

    //making new tasks
    const openPopupBtn = document.getElementById("makeItem");
    const popupForm = document.getElementById("popupForm");
    const popupContent = document.getElementById("popup-content");

    openPopupBtn.addEventListener("click", () => {
        popupForm.style.display = "block";
    });

    document.addEventListener("click", (event) => {
        const targetElement = event.target;
        if (!popupContent.contains(targetElement) && targetElement !== openPopupBtn) {
            popupForm.style.display = "none";
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
        if(projectName.value){
            ProjectList.addItem(projectName.value)
        };
        makeProject.style.display = 'block';
        projectForm.style.display = 'none';
        const project = changeDom('projects', 'button', projectName.value, "projectName list",)
        projectName.value = '';
        project.addEventListener("click", () => {
            const buttons = document.querySelectorAll("button");
            for(const button of buttons){
                button.classList.remove("selected");
            }
            project.classList.add("selected");
            itemTitle.textContent = project.textContent;
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