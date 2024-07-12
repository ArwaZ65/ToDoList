document.addEventListener('DOMContentLoaded', () => {
    const todolist = document.getElementById('todo-list');
    const finishedlist = document.getElementById('finished-list');
    const newtaskinput = document.getElementById('task-input');
    const addtsakbutton = document.getElementById('add-task');

    addtsakbutton.addEventListener('click', () => {
        const tasktext = newtaskinput.value.trim();
        if (tasktext) {
            addTask(tasktext);
            newtaskinput = '';
        }

    });

    function addTask(taskText) {
        const taskItem = createTaskItem(taskText);
        todolist.appendChild(taskItem);
    }

    function createTaskItem(taskText) {
        const li = document.createElement('li');
        const textInput = document.createElement('input');
        textInput.type = 'text';
        textInput.value = taskText;
        textInput.disabled = true;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                finishedlist.appendChild(li);
            } else {
                todolist.appendChild(li);
            }
        });
        const actions = document.createElement('div');
        actions.className = 'actions';

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => {
            textInput.disabled = !textInput.disabled;
            editButton.textContent = textInput.disabled ? 'Edit' : 'Save';
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            li.remove();
        });

        actions.appendChild(editButton);
        actions.appendChild(deleteButton);

        li.appendChild(checkbox);
        li.appendChild(textInput);
        li.appendChild(actions);

        return li;
    }
});
// function addtask(){
//     const addtask=document.getElementById('task-input').value;
//     document.getElementById('itemlist').innerHTML += "<br>"+ addtask
//     const taskItem = createTaskItem(taskText);
//     todoList.appendChild(taskItem);

// }