// Factory function creating items for to do list
export function ToDo(title, description, dueDate, priority, list){
    return {
        title: title || null,
        description: description || null,
        dueDate: dueDate ||null,
        priority: priority || null,
        list: list|| null,
    }
}

// Factory function creating lists containing items
export function List(...args){
    let title = null;
    let items = args;
    const addItem = (item) => {
        items.push(item);
        console.log(items)
    };
    const getItems = () => items;

    return {
        addItem,
        getItems,
    };
};
