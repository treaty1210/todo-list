import createToDo from "./createToDo";
import createDefaultProject from "./createDefaultProject";
import initialDOM from "./initialDOM";
import createItem from "./addItem";

//create the initial blank project
createDefaultProject()

//displays initial DOM elements
initialDOM()

//test createToDo
// const toDo1 = new createToDo('Work on ToDo List', 'Create a ToDo list that is functional.', 'TBD', 'High')
// console.log('properties for toDo1', toDo1)

//Button to add filled out task to display
document.querySelector("#createItem").addEventListener("click", (e) => {
    e.preventDefault();
    createItem();
    let newItem = new createToDo(title, description, dueDate, priority)
    console.log(newItem)
})