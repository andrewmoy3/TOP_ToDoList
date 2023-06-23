import changeDom from "./changeDom";

export function displayItems(ProjectList, listName){
    const body = document.getElementById('cards');
    body.innerHTML = '';
    const list = ProjectList[listName]
    for(const item of list.getItems()){
        let card = document.createElement('div');
        card.classList = 'card';
        card.style.position = 'relative';

        let title = document.createElement('div');
        title.classList = 'card-title';
        title.textContent = item.title;
        card.appendChild(title)
        let dueDate = document.createElement('div');
        dueDate.classList = 'dueDate';
        dueDate.textContent = item.dueDate;
        card.appendChild(dueDate)
        let dueTime = document.createElement('dueTime');
        dueTime.classList = 'dueTime';
        dueTime.textContent = item.dueTime;
        card.appendChild(dueTime)
        const prio = item.priority;
        console.log(prio)
        if(prio == 'high'){
          card.style.borderColor = 'red';
        }else if(prio == 'medium'){
          card.style.borderColor = 'yellow';
        }else if(prio == 'low'){
          card.style.borderColor = 'green';
        }

        const circle = document.createElement('div');
        circle.classList = 'circle';

        if (item.finished) {
          circle.style.backgroundColor = '#00FF00'; // Apply checked color
          card.style.textDecoration = 'line-through';
          circle.textContent = '✔';
        }
        // Append circle to container
        card.appendChild(circle);

        // Attach click event listener to circle
        circle.addEventListener('click', () => {
          item.finished = !item.finished;
          if (item.finished) {
            circle.style.backgroundColor = '#00FF00'; // Apply checked color
            card.style.textDecoration = 'line-through';
            circle.textContent = '✔';
          } else {
            circle.style.backgroundColor = '#FFF'; // Apply unchecked color
            card.style.textDecoration = 'none';
            circle.textContent = '';
          }
        });

        const closeItem = document.createElement('button');
        closeItem.classList = "closeItem";
        closeItem.textContent
        closeItem.innerHTML = '&times;'; 

        
        // Add a click event listener to the button
        closeItem.addEventListener('click', () => {
          for(const lst in ProjectList){
            ProjectList[lst].deleteItem(item);
          }
          displayItems(ProjectList, listName)
        });
        
        card.appendChild(closeItem);
        
        body.appendChild(card);
    }
}

export function displayProjects(list){
    const items = list.getItems()
    for (const project of items){
        changeDom('projects', 'button', project, "projectName",)
    }
}
