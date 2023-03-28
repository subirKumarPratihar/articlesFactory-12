console.log("Hello World!");

let publishCost = document.querySelectorAll(".publish-cost>div");
let partnerPrice = document.querySelectorAll(".partner-price>div");
let publish = document.querySelectorAll(".publish");
let filterIcon = document.querySelectorAll(".filter-icon")[0];
let filterUnit = document.querySelectorAll(".filter-unit")[0];
let dropArrow = document.querySelectorAll(".drop-arrow>i");
let sidebarBtn = document.querySelectorAll("#side-bar-btn")[0];
let findMore = document.querySelectorAll(".find-more")[0];

for (let i = 0; i < publishCost.length; i++) {
    publishCost[i].addEventListener("mouseover", function () {
        publish[i].style.visibility = "visible";
        this.style.borderColor = "dodgerblue";
        this.style.backgroundColor = "#c5dff9";
    })

    publishCost[i].addEventListener("mouseout", function () {
        publish[i].style.visibility = "";
        this.style.borderColor = "";
        this.style.backgroundColor = "";
    })
}

filterIcon.addEventListener("click", function () {
    let filterShow = document.querySelectorAll(".filter-unit")[0].style;

    if (filterShow.display == "none") {
        filterShow.display = "block";
        filterIcon.style.backgroundColor = "rgb(190, 216, 255)"
        filterIcon.children[0].classList.add("fa-x");
    } else {
        filterIcon.children[0].classList.remove("fa-x");
        filterShow.display = "none";
        filterIcon.style.backgroundColor = ""
    }
})

for (let i = 0; i < partnerPrice.length; i++) {
    partnerPrice[i].addEventListener("click", function () {
        let magazinShow = document.querySelectorAll(".partner-magazin")[0].style;

        if (magazinShow.display == "none") {
            magazinShow.display = "block";
            dropArrow[i].style.transform = "rotateX(.5turn)";
            this.style.borderColor = "dodgerblue";
            this.style.backgroundColor = "rgb(190, 216, 255)";
            dropArrow[i].style.color = "dodgerblue";

        } else {
            dropArrow[i].style.color = "";
            this.style.backgroundColor = "lightgray";
            magazinShow.display = "none";
            dropArrow[i].style.transform = "rotateX(1turn)";
            this.style.borderColor = "transparent";
        }

    })
}


sidebarBtn.addEventListener("click", function () {
    document.querySelectorAll("aside")[0].style.left = "00%"
})

document.querySelectorAll(".exit-sidebar")[0].addEventListener("click", function () {
    document.querySelectorAll("aside")[0].style.left = "-100%"
})

findMore.addEventListener("click", function () {
    let findMoreShow = document.querySelectorAll(".sub-navbar")[0].style;

    if (findMoreShow.display == "none") {
        findMoreShow.display = "block";
        findMore.children[0].style.transform = "rotateX(.5turn)";
        findMore.style.color = "dodgerblue";
        findMore.style.fontWeight = "bold";
    } else {
        findMoreShow.display = "none";
        findMore.children[0].style.transform = "rotateX(1turn)";
        findMore.style.color = "";
        findMore.style.fontWeight = "";
    }
})