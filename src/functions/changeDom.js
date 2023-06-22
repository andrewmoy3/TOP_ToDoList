const changeDom = function(divId, type, value, className, id){{
    const parent = divId ? document.getElementById(divId) : null;
    const child = type ? document.createElement(type) : null;
    if(!parent || !child)console.log("Error altering DOM");
    value ? child.innerHTML = value : null;
    className ? child.classList = className : null;
    id ? child.id = id : null;
    parent.appendChild(child);
    return child;
}

}

export default changeDom