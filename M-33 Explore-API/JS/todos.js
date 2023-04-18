function loadTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => displayTodos(data))
}

function displayTodos(todos){
    // get the container 
    const todosContainer = document.getElementById('todos-container');
    for(const todo of todos){
        // create the child element
        const todoDiv = document.createElement('div');
        // Set innerHTML or innerText
        todoDiv.innerHTML = `
            <h3>title: ${todo.title}</h3>
            <p>User: ${todo.userId}</p>
            <p>Is completed: ${todo.completed === true ? 'completed' : 'not completed'}</p>
        `;
        // appendChild
        todosContainer.appendChild(todoDiv);
    }
    console.log(todos);
}

loadTodos()