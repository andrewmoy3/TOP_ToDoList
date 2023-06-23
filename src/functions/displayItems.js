import changeDom from "./changeDom";

export function displayItems(list){
    const body = document.getElementById('cards');
    body.innerHTML = '';
    for(const item of list.getItems()){
        let card = document.createElement('div');
        card.classList = 'card';
        card.style.position = 'relative';


        let title = document.createElement('div');
        title.classList = 'card-title';
        title.textContent = item.title;
        card.appendChild(title)

        const circle = document.createElement('div');
        circle.style.position = 'absolute';
        circle.style.bottom = '10px';
        circle.style.right = '10px';
        circle.style.width = '30px';
        circle.style.height = '30px';
        circle.style.borderRadius = '50%';
        circle.style.border = '1px solid #000';
        circle.style.backgroundColor = '#FFF';
        circle.style.cursor = 'pointer';
        
        // Attach click event listener to circle
        circle.addEventListener('click', () => {
          circle.classList.toggle('checked');
          if (circle.classList.contains("checked")) {
            circle.style.backgroundColor = '#00FF00'; // Apply checked color
            card.style.textDecoration = 'line-through';
            circle.textContent = '✔';
            item.finished = true;
          } else {
            circle.style.backgroundColor = '#FFF'; // Apply unchecked color
            card.style.textDecoration = 'none';
            circle.textContent = '';
            item.finished = false;
          }
        });
        
        // Append circle to container
        card.appendChild(circle);

        body.appendChild(card)
    }
}

export function displayProjects(list){
    const items = list.getItems()
    for (const project of items){
        changeDom('projects', 'button', project, "projectName",)
    }
}