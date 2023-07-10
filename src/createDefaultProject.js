//function factory to create a blank project
function createDefaultProject() {
    console.log('testing createProject module')
    let projectArray = [];
    let projectTitle = 'Test Title'
    projectArray.push(projectTitle)
    console.log(projectArray)
    return { projectArray, projectTitle}
}

export default createDefaultProject;