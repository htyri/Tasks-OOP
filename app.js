const form = document.querySelector('form')
form.addEventListener('submit', addTask)

const ul = document.querySelector('ul')
ul.addEventListener('click', deleteTask)

const deleteTasks = document.querySelector('#clear-all-tasks')
deleteTasks.addEventListener('click', deleteAllTasks)

function deleteAllTasks(event){
    //while(ul.firstElementChild){
    //    ul.removeChild(ul.firstElementChild)
    // }
    ul.innerHTML = ''
    event.preventDefault()
}

function deleteTask(event){
    if(event.target.textContent === 'X'){
        if(confirm('Are you sure to delete this task?')){
            event.target.parentElement.remove()
        }
    }
}
function addTask(event) {
    // user input
    // console.log(event.type)
    const taskText = document.querySelector('#task').value
    // console.log(taskText)
    // add DOM element - begin
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
    // add DOM element - end

    // add task to localStorage
    Let  tasks // arau for user imputs
    if(logalStorage.getitem('tasks') === null){
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.push(taskText)
    localStorage.setItem('tasks', JSON.stringify(tasks))
    document.querySelector('#task').value = ''
    event.preventDefault()
}
