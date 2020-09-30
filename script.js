console.log("Hello World");
const containerPortfolio = document.getElementById("container_photos");

const weddingArray = [ "https://placekitten.com/200/287", "https://placekitten.com/200/147", "https://placekitten.com/200/157", "https://placekitten.com/200/107", "https://placekitten.com/200/245", "https://placekitten.com/200/285"

]

function addPics(imageURL) {
    const creatingImage = document.createElement("img");
    creatingImage.src = imageURL;
    creatingImage.classList.add("portfolio_pics");
    containerPortfolio.appendChild(creatingImage);
}

for (let i = 0; i < weddingArray.length; i++) {
    addPics(weddingArray[i]);
}
