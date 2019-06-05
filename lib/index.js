export const node = (name) => {
    const node = document.createElement(name);
    node.attr = (attr = {}) => {
        Object.entries(attr).forEach(pair => {
            node.setAttribute(pair[0], pair[1]);
        });
        return node;
    };
    node.i = (id) => {
        node.id = id;
        return node;
    };
    node.cls = (...classes) => {
        classes.forEach(c => node.classList.add(c));
        return node;
    };
    node.having = (...children) => {
        children.forEach(c => node.appendChild(c));
        return node;
    };
    node.text = (text) => {
        node.innerText = text;
        return node;
    };
    node.html = (html) => {
        node.innerHTML = html;
        return node;
    };
    node.data = (key, val) => {
        if (val === undefined) {
            return node.dataset[key];
        }
        node.dataset[key] = val;
        return node;
    }
    return node;
}
