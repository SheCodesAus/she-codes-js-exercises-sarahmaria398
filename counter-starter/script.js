

function add(value) {
    // get dom element 
    let counter = document.getElementById("number")

    // add 1 to current value
    let newValue = parseInt(counter.innerHTML) + value

    // reassign value to DOM element
    counter.innerHTML = newValue

    // console.log("am i here", newValue)
}
console.log(add)

function subtract(value) {
    // get dom element 
    let counter = document.getElementById("number")

    // add 1 to current value
    let newValue = parseInt(counter.innerHTML) - value

    // reassign value to DOM element
    counter.innerHTML = newValue

    // console.log("am i here", newValue)
}
console.log(subtract)

function multiply(value) {
    let counter = document.getElementById("number")
    let newValue = parseInt(counter.innerHTML) - value
    counter.innerHTML = newValue
}
console.log(subtract)