document.getElementById('form').addEventListener('submit',async function(event){
    event.preventDefault();
    let id=document.getElementById('id').value
    let toDo=document.getElementById('to-do').value;
    let userId=document.getElementById('user-id').value;

    let data={
    id:id,
    toDo:toDo,
    userId:userId
};
console.log({data});
let result = await fetch('https://dummyjson.com/todos/add', {
    method:'POST',
    headers:{
        'Content-Type': 'application/json'

    },
    body:JSON.stringify(data)
})
.then(response=>response.json())
.then(response=>response)
.catch(error=>error.message)
console.log({result})
let success =document.getElementById('success');
result.id? success.innerHTML='todo added successfully':success.innerHTML='todo not added '
})