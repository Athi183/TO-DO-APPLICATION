
        const taskInput = document.getElementById('task-input');
        const addTaskBtn = document.getElementById('add-task-btn');
        const todoList = document.getElementById('todo-list');

        addTaskBtn.addEventListener('click', () => {
            const taskText = taskInput.value.trim();
            if (taskText) {
                const li = document.createElement('li');
                li.innerHTML = `${taskText} <button onclick="removeTask(this)">Remove</button>`;
                todoList.appendChild(li);
                taskInput.value = ''; // Clear input
            }
        });

        function removeTask(button) {
            const li = button.parentElement;
            todoList.removeChild(li);
        }