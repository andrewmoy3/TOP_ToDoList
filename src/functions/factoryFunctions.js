// Factory function creating items for to do list
export function ToDo(title, description, dueDate, dueTime, priority, finished){
    return {
        title: title || null,
        description: description || null,
        dueDate: dueDate || null,
        dueTime: dueTime || null,
        priority: priority || null,
        finished: false;
    }
}

// Factory function creating lists containing items
export function List(name, standard){
    let title = name;
    let std = standard;
    let items = [];
    const addItem = (item) => {
        items.push(item);
    };
    const getItems = () => items;
    const getName = () => title;
    const getStd = () => std;

    return {
        addItem,
        getItems,
        getName,
        getStd,
    };
};
