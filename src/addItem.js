function createItem() {
        let title = document.getElementById('title').value
        let description = document.getElementById('description').value
        let dueDate = document.getElementById('dueDate').value
        let priority = document.getElementById('priority').value
        console.log('title:', title, 'description:', description, 'dueDate:', dueDate, 'priority:', priority)
}
console.log("createItem loaded")
export default createItem;
