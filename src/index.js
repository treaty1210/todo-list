import createToDo from "./createToDo";
import createDefaultProject from "./createDefaultProject";
import initialDOM from "./initialDOM";

//create the initial blank project
createDefaultProject()

//displays initial DOM elements
initialDOM()

//test createToDo
const toDo1 = new createToDo('Work on ToDo List', 'Create a ToDo list that is functional.', 'TBD', 'High')
console.log('properties for toDo1', toDo1)