const form = document.querySelector('form')
form.addEventListener('submit', addTask)

const ul = document.querySelector('ul')
ul.addEventListener('click', deleteTask)

function deleteTask(event){
    if(event.target.textContent === 'X'){
        if(confirm('Are you sure to delete this task?')){
            event.target.parentElement.remove()
        }
    }
}
function addTask(event) {
    // console.log(event.type)
    const taskText = document.querySelector('#task').value
    // console.log(taskText)
    let li = document.createElement('li')
    li.className = 'collection-item'
    let liText = document.createTextNode(taskText)
    li.appendChild(liText)

    let a = document.createElement('a')
    a.className= 'teal-text lighten-2 secondary-content'
    let aText = document.createTextNode('X')
    a.appendChild(aText)
    a.setAttribute('href', '#')

    li.appendChild(a)


    ul.appendChild(li)

    document.querySelector('#task').value = ''
    event.preventDefault()
}
