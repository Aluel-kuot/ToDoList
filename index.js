let toDoList = document.getElementById('todo');

const getToDos = () => {
  return fetch('https://dummyjson.com/todos?limit=20')
    .then(response => response.json())
    .then(response => response)
    .catch(error => error.message);
};

const getToDo = async () => {
  const todos = await getToDos();
  console.log(todos);
  todos.todos.map(item => {
    let div = document.createElement('div');
    div.className = 'todo'; 
    let id=document.createElement('p')
    let todo = document.createElement('p');
    let completed = document.createElement('p');
    let userId = document.createElement('p');

    id.innerHTML=item.id;
    todo.innerHTML = item.todo; 
    completed.innerHTML = item.completed;
    userId.innerHTML = item.id; 

    div.appendChild(id)
    div.appendChild(todo);
    div.appendChild(completed);
    div.appendChild(userId);
    toDoList.appendChild(div);
  });
};

getToDo();
