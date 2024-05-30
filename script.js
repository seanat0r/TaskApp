let taskInput = document.querySelector(".inputTask");
let button = document.getElementById("button");
let deleteAll = document.getElementById("deleteAll");
let showTask = document.getElementById('showTask');
const inputDelete = [];

const taskInputValues = JSON.parse(localStorage.getItem('ToDoList')) || [];



//Adding a Task
const addingATask = () => {
    taskInputValues.push(taskInput.value);
    localStorage.setItem('ToDoList', JSON.stringify(taskInputValues));
    taskInput.value = "";
    console.log("Saved values: ", taskInputValues);
    renderToDoList();
};

addEventListener('DOMContentLoaded', function() {
    renderToDoList();
});


//Show the Task list
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
    output.innerHTML = "";
    let ol = document.createElement('ol');

    createToDoList(ol, output);
    
    createListItemValue(ol);
    
};

//Remove all Task
deleteAll.addEventListener("click", function(){
    if (taskInputValues.length > 0) {
        localStorage.removeItem('ToDoList');

        taskInputValues.length = 0;

        renderToDoList();
    }
});
document.getElementById('button').addEventListener('submit', function(event) {
    event.preventDefault();

    addingATask();
});

//When submit to delet a task, prevent submiting the normal behavior
document.getElementById('taskDeleteForm').addEventListener('submit', function(event) {
    event.preventDefault();

    handleSubmit();
});

const getToDoListArrayIndex = (taskNumber) => {

    taskInputValues.find((value, index) => {
        console.log('Im OUTSIDE from if')
        if (index == taskNumber) {
            console.log('Im in the if')
            deletToDoListArrayIndex(index);
        };
    });
};

const deletToDoListArrayIndex = (index) => {
    console.log('Im in the delet')
    taskInputValues.splice(index, 1);
};

const updateToDoListArray = () => {
    renderToDoList();
};

//Remove one Task
const handleSubmit = () => {
    let taskNumber = document.getElementById('taskNumber').value;
    console.log('Output from form: '+ taskNumber);
    taskNumber -= 1;
    console.log(taskNumber);

    getToDoListArrayIndex(taskNumber);
    
    updateToDoListArray();
};

//Reload Task List
showTask.addEventListener('click', function() {
    renderToDoList();
});

//numPad on/off
const numPadOnOff = () => {
    let numPad = document.getElementById('numPad');
    let taskNumberPAD = document.getElementById('taskNumber')

    const gotClickedNumPad = () => {
    
        taskNumberPAD.addEventListener('click', function() {
            numPad.style.display = 'grid';
        });
    };
    const disableNumPad = () => {
        document.addEventListener('click', (event) => {
            if (!taskNumberPAD.contains(event.target) && !numPad.contains(event.target)) {
            numPad.style.display = 'none';
            }
        })
    }
    gotClickedNumPad();
    disableNumPad();
}
numPadOnOff();

//NumPad Deletion
const getNumPadNumber = (callback) => {
    let numPadValue = '0';
   const buttonIds = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

    buttonIds.forEach(id => {
        let button = document.getElementById(id);
        if (button) {
            button.addEventListener('click', () => {
                numPadValue = id;
                callback(numPadValue);
            })
        }
    });
   
};

const gotClicked = () => {
    taskNumber = document.getElementById('taskNumber');
    taskNumber.addEventListener('click', () => {
        inputDelete.length = 0;
        taskNumber.value = ''
    });
    
}


const deletTaskFromNumPad = (taskNumber) => {
    inputDelete.push(taskNumber);
    const joinInputDelete = inputDelete.join('');

    console.log(joinInputDelete);

    document.getElementById('taskNumber').value = joinInputDelete;
};

const updateInputItemTaskNumber = () => {
    const joinInputDelete = inputDelete.join('')
    document.getElementById('taskNumber').value = joinInputDelete;
};

const deleteNumPadInputByOne = () => {
    const delteButtonNumPad = document.getElementById('delteButtonNumPad');
    delteButtonNumPad.addEventListener('click', () => {
        inputDelete.pop();
        console.log(inputDelete);
        updateInputItemTaskNumber();
        
    })

};

getNumPadNumber((number) => {
    deletTaskFromNumPad(number)
});

gotClicked();
deleteNumPadInputByOne();
