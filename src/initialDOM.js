import createDefaultProject from "./createDefaultProject";

// DOM manipulation to display UI
function initialDOM() {
    //creates the header area with a title
    const content = document.querySelector('.content')
    const header = document.createElement('h1')
    header.textContent = 'To-Do List'
    content.appendChild(header)

    //create the initial project
    const projectDiv = document.createElement('div');
    projectDiv.textContent = createDefaultProject().projectTitle;
    content.appendChild(projectDiv);
}

export default initialDOM;