let main = document.createElement("main")
main.classList.add ('container')

document.body.prepend(main)

//creating h1
let projectName = document.createElement("h1")
projectName.className = "projectName"
projectName.innerHTML = "Let's do it"

main.append(projectName)

//creating mainBlock
let mainBlock = document.createElement("div")
mainBlock.className = "mainBlock"
main.append(mainBlock)

//creating inputBlock
let inputBlock = document.createElement("div")
inputBlock.className = "inputBlock"
mainBlock.append(inputBlock)


//creating input inside inputBlock
let input = document.createElement("input");
input.className = "input";
input.setAttribute('placeholder', 'Gonna do')
inputBlock.append(input);


//creating date inside inputBlock
let inputDate = document.createElement('input');
inputDate.className = "inputDate";
inputDate.setAttribute('type', 'date');
inputBlock.append(inputDate);

//creating button inside inputBlock
let button = document.createElement('button');
button.id = "button";
button.innerHTML = 'Add';
inputBlock.append(button)

button.addEventListener("click", addTodo)

//list
let listBlock = document.createElement("ul")
mainBlock.append(listBlock)

let todosArray = localStorage.getItem('todos') == null ? [] : [...JSON.parse(localStorage.getItem('todos'))];






