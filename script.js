console.log("Hello World");
//-----------------------------------------------------------------------------GENERATE IMAGE PORTFOLIO-----------------------------------------------------------------------------
const containerPortfolio = document.getElementById("container_photos");

const weddingArray = [ "https://source.unsplash.com/KtB9WvY2y3w", "https://source.unsplash.com/Q3PzwHKpEdc", "https://source.unsplash.com/Mml3vlckZIM", "https://source.unsplash.com/30UOqDM5QW0", "https://source.unsplash.com/BcsLOJtnqVg", "https://source.unsplash.com/9qpU2FR0WMo", "https://source.unsplash.com/gWedi4SWsHQ", "https://source.unsplash.com/k8FSoWAOzb4", "https://source.unsplash.com/13rhRjzHseQ", "https://source.unsplash.com/O1aSZ-BX3ps", "https://source.unsplash.com/hADL532xIxQ", "https://source.unsplash.com/OEnKKXvdbDU"
]

const architectureArray = [ "https://source.unsplash.com/T5nXYXCf50I", "https://source.unsplash.com/QdAAasrZhdk", "https://source.unsplash.com/Sc5RKXLBjGg", "https://source.unsplash.com/-HIiNFXcbtQ", "https://source.unsplash.com/2ecH5Lw3zSk", "https://source.unsplash.com/VviFtDJakYk", "https://source.unsplash.com/JDN-_FIqB3k", "https://source.unsplash.com/-udZnjsCzsE", "https://source.unsplash.com/gQ06DrUzNIk", "https://source.unsplash.com/b5POxb2aL9o", "https://source.unsplash.com/oU2ruea3OzM", "https://source.unsplash.com/q4Q171-UR_A"];

const corporateArray = [ "https://source.unsplash.com/k_T9Zj3SE8k", "https://source.unsplash.com/505eectW54k", "https://source.unsplash.com/IgUR1iX0mqM", "https://source.unsplash.com/9l_326FISzk", "https://source.unsplash.com/qCi_MzVODoU", "https://source.unsplash.com/9Q_pLLP_jmA", "https://source.unsplash.com/IClZBVw5W5A", "https://source.unsplash.com/9sJMyPKlKhw", "https://source.unsplash.com/-v9Z6-uJxk4", "https://source.unsplash.com/ymuAM4S2fxI", "https://source.unsplash.com/b6dfPNHa81w", "https://source.unsplash.com/SL5d_8ywAAA"];

function addPics(imageURL) {
    const creatingLi = document.createElement("li");
    creatingLi.classList.add("portfolio_pics_frame");
    const creatingImage = document.createElement("img");
    creatingImage.src = imageURL;
    creatingImage.classList.add("portfolio_pics");
    containerPortfolio.appendChild(creatingLi);
    creatingLi.appendChild(creatingImage);
}

for (let i = 0; i < weddingArray.length; i++) {
    addPics(weddingArray[i]);
}

//----------------------------------------------------------------------------CHANGE PORTFOLIO BY CLICK ON CATEGORIES--------------------------------------------------------------------

const weddingButton = document.getElementById("button_wedding");
const architectureButton = document.getElementById("button_architecture");
const corporateButton = document.getElementById("button_corporate");
const portfolioImages = document.querySelectorAll(".portfolio_pics");

architectureButton.onclick = function() {
    for (let i = 0; i<portfolioImages.length; i++) {
        portfolioImages[i].src = architectureArray[i];
    }
}

corporateButton.onclick = function() {
    for (let i = 0; i<portfolioImages.length; i++) {
        portfolioImages[i].src = corporateArray[i];
    }
}

weddingButton.onclick = function() {
    for (let i = 0; i<portfolioImages.length; i++) {
        portfolioImages[i].src = weddingArray[i];
    }
}