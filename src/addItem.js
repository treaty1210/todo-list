import { parseISO, startOfToday } from "date-fns"

function createItem() {
        let title = document.getElementById('title').value
        let description = document.getElementById('description').value
        let dueDate = document.getElementById('dueDate').value
        let priority = document.getElementById('priority').value
        console.log('title:', title, 'description:', description, 'dueDate:', dueDate, 'priority:', priority)

    //checks for empty fields (prio is a select with default low)
    if (title == '' || description == '' || dueDate == '') {
        alert('Please fill out the missing area')
        return;
    }
    //checks to make sure that dueDate is a future date
    if (parseISO(dueDate) < startOfToday()) { //parseISO is used to change date format from default format
        alert('Invalid Date. Date must be set in the future.')
        console.log('Due date:', parseISO(dueDate))
        console.log('Current date:', startOfToday())
        return;
    }
}
console.log("createItem loaded")
export default createItem;
