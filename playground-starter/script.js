function showName() {
    let inputField = document.getElementById('name-text')
    console.log("the input field is: ", inputField.value)
    alert("Hello " + inputField.value)
}


// for (let count = 0; count < 12; count++) {
//     console.log(count)
// }

let pets = ["Chilli", "Rex", "Roary", "Fleur"];
// console.log(pets);
// pets.push("Ivy");
// console.log(pets);
// console.log(pets[0]);
// console.log(pets[3]);

// for (let index = 0; index < pets.length; index++) {
//     console.log(pets[index]);
// }

pets.forEach((animal) => {
    console.log(animal);
});

