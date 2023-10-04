let createANewAction = document.querySelector(".userInput")
let targetInput = document.querySelector("#targetInput")

targetInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        alert(targetInput.value)
    }
})