let addTodo = () => {
    let newTask = input.value
    let newDate = inputDate.value
    // console.log(newTask);
    // console.log(newDate);


    if (newTask) {
      todosArray.push({
          title:newTask,
          checked:false,
          date:newDate,
      })
    }
    localStorage.setItem('todos', JSON.stringify(todosArray))
    renderTodoItem()
    input.value = ''
    inputDate.value = ''
    console.log(todosArray);  
}



let deleteTodo = (e) => {
    let currentTodo = e.target.parentNode.getAttribute('key')
    // console.log(currentTodo);
    todosArray.splice(currentTodo,1)
    console.log(todosArray);
    localStorage.setItem('todos', JSON.stringify(todosArray))

    renderTodoItem()
}

let completeTodo = (e) => { 
    let newTodos = [...todosArray]
    let currentTodoIndex = parseInt(e.target.parentNode.getAttribute('key'))
    newTodos[currentTodoIndex].checked = !newTodos[currentTodoIndex].checked
    let isDone = e.currentTarget.parentNode.classList.contains('taskItem-done')

    localStorage.setItem('todos', JSON.stringify(newTodos))

    if (isDone) {
        e.currentTarget.parentNode.classList.remove("taskItem-done")
        e.currentTarget.parentNode.classList.add("taskItem")
    }else{
        e.currentTarget.parentNode.classList.add("taskItem-done")
        e.currentTarget.parentNode.classList.remove("taskItem")
    }
   
   
}