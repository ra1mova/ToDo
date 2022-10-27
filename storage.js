let user={
    name: 'Roza',
    age: 20
}

localStorage.setItem('obj', JSON.stringify(user))
let result = JSON.parse(localStorage.getItem('obj'))

console.log(result);