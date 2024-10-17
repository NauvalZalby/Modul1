let tasks = [];

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskValue = taskInput.value.trim();
    
    if (taskValue === '') {
        alert('Isi dulu bang!');
        return;
    }

    tasks.push(taskValue);
    taskInput.value = ''; 
    displayTasks();
}

function displayTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = ''; 
    
    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        
        listItem.innerHTML = `
            <span>${task}</span>
            <div>
                <button class="edit-btn" onclick="editTask(${index})">Edit</button>
                <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
            </div>
        `;
        
        taskList.appendChild(listItem);
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

function editTask(index) {
    const newTask = prompt('Edit task:', tasks[index]);
    
    if (newTask !== null && newTask.trim() !== '') {
        tasks[index] = newTask.trim();
        displayTasks();
    } else {
        alert('Isi dulu woyy!');
    }
}