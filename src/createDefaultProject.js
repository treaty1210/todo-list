//function factory to create a blank project
function createDefaultProject() {
    console.log('testing createProject module')
    let projectArray = [];
    let projectTitle = 'Default Title'
    projectArray.push(projectTitle)
    console.log(projectArray)
    return { projectArray, projectTitle}
}

export default createDefaultProject;