let taskInput = document.querySelector(".inputTask");
let button = document.getElementById("button");

const taskInputValues = [];

button.addEventListener("click", function() {
    taskInputValues.push(taskInput.value);
    localStorage.setItem('ToDoList', JSON.stringify(taskInputValues));
    taskInput.value = "";
    console.log("Saved values: ", taskInputValues);
});

/* if (localStorage.getItem('ToDoList') !== null) {
    for (let i=0; i < localStorage.length; i++) {
        let storageKey = localStorage.key(i)
        li.textContent = localStorage.getItem(storageKey);
        ol.appendChild(li)
    }
}

const outputDiv = document.getElementById('output');
outputDiv.appendChild(ol); */

const createToDoList = (ol, li, output) => {
    output.appendChild(ol);
};

const createListItemValue = (ol, li) => {
    
};

const createListItem = () => {

};

const renderToDoList = () => {
    let output = document.getElementById('output')
    const ol = document.createElement('ol');
    const li = document.createElement('li');
    if (localStorage.getItem('ToDoList') !== null) {
        createToDoList(ol, li, output)
    }
    createListItemValue(ol, li)
    createListItem(ol, li)
    
};