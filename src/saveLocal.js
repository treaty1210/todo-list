import displayProject from "./displayProject"

function saveLocal(title, description, dueDate, priority) {
    localStorage.setItem('title', document.getElementById('title').value)
    localStorage.setItem('description', document.getElementById('description').value)
    localStorage.setItem('dueDate', document.getElementById('dueDate').value)
    localStorage.setItem('priority', document.getElementById('priority').value)
    displayProject()
    return { title, description, dueDate, priority }
}

export default saveLocal