const createItem = (el, i) => {

    let item = `
    <div class='createTodoItemBlock' key=${i}>
    <li>${el.title} ${el.date}</li>
    <img src='./img/check-icon.png' onclick='completeTodo(event)'/>
    <img src='./img/delete-icon.png' onclick='deleteTodo(event)'/>
    </div>
    `

    return item
}

const renderTodoItem = () => {
    listBlock.innerHTML= "";
    let items = [];

    todosArray.length
    ? todosArray.map((el, i)=> {
        items.unshift(createItem(el, i))
        listBlock.innerHTML = items.join('')
    })
    : listBlock.prepend("No tasks");
}

renderTodoItem ();

