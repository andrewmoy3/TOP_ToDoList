import changeDom from "./changeDom";

export function displayItems(list){
    const body = document.getElementById('cards');

    for(const item of list){
        let card = document.createElement('div');
        card.classList = 'card';

        let title = document.createElement('div');
        title.classList = 'card-title';
        title.textContent = item.title;
        card.appendChild(title)

        body.appendChild(card)
    }
}

export function displayProjects(list){
    const items = list.getItems()
    for (const project of items){
        changeDom('projects', 'button', project, "projectName",)
    }
}