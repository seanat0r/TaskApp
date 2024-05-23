let taskInput = document.querySelector(".inputTask");
let button = document.getElementById("button");
let listExist = false;

const taskInputValues = JSON.parse(localStorage.getItem('ToDoList')) || [];

button.addEventListener("click", function() {
    taskInputValues.push(taskInput.value);
    localStorage.setItem('ToDoList', JSON.stringify(taskInputValues));
    taskInput.value = "";
    console.log("Saved values: ", taskInputValues);
    renderToDoList();
});

const createToDoList = (ol, output) => {
    output.appendChild(ol);
    return true;

};

const createListItemValue = (ol) => {
    taskInputValues.forEach(task => {
        let li = document.createElement('li');
        li.textContent = task;
        createListItem(ol, li);
    });
};

const createListItem = (ol, li) => {
    ol.appendChild(li);
};

const renderToDoList = () => {
    let output = document.getElementById('output')
    let ol = document.createElement('ol');
    if (listExist !== true) {
        listExist = createToDoList(ol, output)
    }
    createListItemValue(ol)
    
};