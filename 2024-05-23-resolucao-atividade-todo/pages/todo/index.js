const taskKey = '@tasks'

// Função para adicionar tarefa
function addTask(event) {
  event.preventDefault() // Evita o recarregamento da página
  const taskId = new Date().getTime()
  const taskList = document.querySelector('#taskList')

  const form = document.querySelector('#taskForm')
  const formData = new FormData(form)

  const taskTitle = formData.get('title')
  const taskDescription = formData.get('description')

  const li = document.createElement('li')
  
  const dialog = document.getElementById('favDialog');

 

  li.id = taskId
  li.innerHTML = `
      <h2>${taskTitle}</h2>
      <p>${taskDescription}</p>
      <p><button class="edita" title="Ediar tarefa" >✏️</button></p>

  `
  taskList.appendChild(li)

  // Salvar tarefas no localStorage
  const tasks = JSON.parse(localStorage.getItem(taskKey)) || []
  tasks.push({ title: taskTitle, description: taskDescription, buton: '✏️' })
  localStorage.setItem(taskKey, JSON.stringify(tasks))

  form.reset()
}

// Carregar tarefas do localStorage ao recarregar a página
window.addEventListener('DOMContentLoaded', () => {
  const tasks = JSON.parse(localStorage.getItem(taskKey)) || []
  const taskList = document.querySelector('#taskList')
  taskList.innerHTML = tasks
    .map((task) => `<li><p><button class="edita" title="Ediar tarefa">✏️</button></p><h2>${task.title}</h2><p>${task.description}</p> </li>`)
    .join('')
})

edita.addEventListener('click', function() {
  dialog.showmodal()
})
