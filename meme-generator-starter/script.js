
// window.onload = function () {
//     let memeImageElement = document.createElement("div");
//     memeImageElement.id = "meme-image-wrapper";

//     let imageElement = document.createElement("img");
//     imageElement.id = "meme-image";
//     memeImageElement.appendChild(imageElement)

//     let outputElement = document.getElementById("output");
//     outputElement.appendChild(memeImageElement)
// }

function getImage() {
    let imageURL = document.getElementById("image-url").value;

    let imageBox = document.createElement("img");
    imageBox.id = "meme-image";
    imageBox.src = imageURL;
    let wrapper = document.getElementById('meme-image-wrapper');
    wrapper.appendChild(imageBox);

    document.getElementById("meme-builder").style.display = "block";
}

function addTopText() {
    let topText = document.getElementById("top-text-input").value;
    document.getElementById("top-text").innerText = topText;
}

function addBottomText() {
    let bottomText = document.getElementById("bottom-text-input").value;
    document.getElementById("bottom-text").innerHTML = bottomText;
}