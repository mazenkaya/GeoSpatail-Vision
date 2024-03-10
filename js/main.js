let gellaryImg = document.querySelectorAll("#gellary .img-box img");
let overlay = document.createElement("div");
let popupImg = document.createElement("div");
let imgBox = document.createElement("img");
let closeButton = document.createElement("div");

gellaryImg.forEach((img) => {
    img.addEventListener("click", (e) => {
        overlay.classList = "overlay-popup";
        overlay.classList.add("open");
        document.body.appendChild(overlay);

        popupImg.classList = "popup-img";
        popupImg.classList.add("open");
        document.body.appendChild(popupImg);

        closeButton.innerText = "X";
        closeButton.classList = "close-button";
        popupImg.appendChild(closeButton);

        imgBox.classList = "pop-imgbox";
        imgBox.style.width = "650px";
        imgBox.src = img.src;
        popupImg.appendChild(imgBox);

        closeButton.addEventListener("click", e => {
            popupImg.remove();
            overlay.remove();
        });
    });
});


let liServices = document.querySelectorAll(".ul-services li");
let servicesTitle = document.querySelector("#services .contents .text-box h3");
let servicesImg = document.querySelector("#services .contents");

liServices.forEach(li => {
    li.addEventListener("click", e => {
        servicesTitle.innerText = li.innerText;
        if (e.target.dataset.service === "mapping") {
            servicesImg.style.backgroundImage = "url(imgs/Mapping-01.png)";
            servicesImg.style.backgroundSize = "contain";
        } else if (e.target.dataset.service === "spatial-analysis") {
            servicesImg.style.backgroundImage = "url(imgs/Spatial-Analysis.png)";
            servicesImg.style.backgroundSize = "contain";
        } else if (e.target.dataset.service === "imagery-analysis") {
            servicesImg.style.backgroundImage = "url(imgs/Imagery-Analysis-02.png)";
            servicesImg.style.backgroundSize = "contain";
        } else if (e.target.dataset.service === "geostatistical-analysis") {
            servicesImg.style.backgroundImage = "url(imgs/Geostatistical-Analysis-01.jpg)";
            servicesImg.style.backgroundSize = "contain";
        } else {
            servicesImg.style.backgroundImage = "url(imgs/Network-Analysis-01.jpg)";
            servicesImg.style.backgroundSize = "cover";
        };
    });
});

let otherLinks = document.querySelector(".other-links");
let otherLi = document.querySelector(".other");

otherLi.onclick = (e) => {
    otherLinks.classList.toggle("open");
    e.stopPropagation();
};

otherLinks.onclick = e => {
    e.stopPropagation();
};

document.body.addEventListener("click", e => {
    if (e.target !== otherLinks && e.target !== otherLi) {
        if (otherLinks.classList.contains("open")) {
            otherLinks.classList.toggle("open");
        };
    };
});



let toggelBtn = document.querySelector(".toggel-button");
let toggelMenu = document.querySelector(".toggel-menu");

toggelBtn.onclick = (e) => {
    toggelMenu.classList.toggle("open");
    e.stopPropagation();
};

toggelMenu.onclick = e => {
    e.stopPropagation();
};

document.body.addEventListener("click", e => {
    if (e.target !== toggelMenu && e.target !== toggelBtn) {
        if (toggelMenu.classList.contains("open")) {
            toggelMenu.classList.toggle("open");
        };
    };
});