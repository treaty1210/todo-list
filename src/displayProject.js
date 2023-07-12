function displayProject() {

    //creates cards to be placed within the projects div 
    let projects = document.querySelector('.projects')
    let projectCards = document.createElement('div')
    projectCards.classList.add('projectCards')
    projects.appendChild(projectCards)

    //get the data from localStorage
    let title = localStorage.getItem('title')
    let description = localStorage.getItem('description')
    let dueDate = localStorage.getItem('dueDate')
    let priority = localStorage.getItem('priority')

    //create an array to display items
    let currentProject = { title, description, dueDate, priority }
    console.log('this is the currentProject array:', currentProject)

    //loop through keys in currentProject to append to card to display items
    for (let key in currentProject) {
        let item = document.createElement('p')
        item.textContent = `${key}: ${currentProject[key]}`
        projectCards.appendChild(item)
    }
}

export default displayProject