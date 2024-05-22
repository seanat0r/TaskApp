let taskInput = document.querySelector(".inputTask");
let button = document.getElementById("button");
let listExist = false;

const taskInputValues = [];

button.addEventListener("click", function() {
    taskInputValues.push(taskInput.value);
    localStorage.setItem('ToDoList', JSON.stringify(taskInputValues));
    taskInput.value = "";
    console.log("Saved values: ", taskInputValues);
    renderToDoList();
});

const createToDoList = (ol, output) => {
    console.log("I'm in createToDoList")
    output.appendChild(ol);
    return true;

};

const createListItemValue = (ol) => {
    console.log("I'm in createListItemValue")

    for (let i = 0; i < localStorage.length; i++) {
        let storageKey = localStorage.key(i)

        if (storageKey.startsWith('ToDoList_')) {
            let listItemValue = localStorage.getItem(storageKey);
            let li = document.createElement('li');
            li.textContent = listItemValue;

            createListItem(ol,li);
        }
    }
};

const createListItem = (li) => {
    ol.appendChild(li);
};

const renderToDoList = () => {
    let output = document.getElementById('output')
    const ol = document.createElement('ol');
    if (listExist !== true) {
        listExist = createToDoList(ol, output)
    }
    createListItemValue(ol)
    
};