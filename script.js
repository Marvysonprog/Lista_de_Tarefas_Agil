function addTask(period) {
    const input = document.getElementById(`new-${period}-task`);
    const taskList = document.getElementById(`${period}-tasks`);
    const taskText = input.value.trim();

    if (taskText) {
        const newTask = document.createElement('li');
        newTask.textContent = taskText;

        newTask.addEventListener('click', () => {
            const confirmDeletion = confirm('Você realmente deseja excluir esta tarefa?');
            if (confirmDeletion) {
                taskList.removeChild(newTask);
                taskList.removeChild(button);
            }
        });

        newTask.addEventListener('dblclick', () => {
            newTask.classList.toggle('completed');
        });
        
        taskList.appendChild(newTask);
        const button = document.createElement('button');
        button.classList.add("lixeira");
        button.textContent = "Remover";
        newTask.appendChild(button);
        button.addEventListener('click', () => {
                    taskList.removeChild(newTask);
                    taskList.removeChild(button);
            })

        input.value = '';
        
    }
    
}