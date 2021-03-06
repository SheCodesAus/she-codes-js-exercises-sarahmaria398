// console.log("Script Loaded")

window.onload = function () {
    let speechBubbleElement = document.createElement("div");
    speechBubbleElement.classList.add("speech-bubble");

    let messageBox = document.createElement("p");
    messageBox.innerText = "...";
    messageBox.id = "message-box";
    speechBubbleElement.appendChild(messageBox);

    let nameBox = document.createElement("p");
    nameBox.innerText = "...";
    nameBox.id = "name-box";
    speechBubbleElement.appendChild(nameBox);

    let outputElement = document.getElementById("output");
    outputElement.appendChild(speechBubbleElement);
};

function showMessage() {
    let message = document.getElementById('message-text').value
    let name = document.getElementById('name').value

    let messageBox = document.getElementById("message-box");
    let nameBox = document.getElementById("name-box");
    messageBox.innerText = message;
    nameBox.innerText = name;

    console.log(message + name)
}