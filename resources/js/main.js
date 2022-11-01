/* --------------SHOW MENU---------------- */
const toggleBtn = document.querySelector("#nav-toggle-btn"),
      navMenu = document.querySelector("#nav-menu"),
      navClose = document.querySelector("#nav-close");

toggleBtn.addEventListener("click", showMenu);

function showMenu () {
    // toggle showmenu class
    navMenu.classList.toggle("show-menu");

    //close menu
    navClose.addEventListener("click", () => navMenu.classList.remove('show-menu'));
}

/*----------close nav menu with every links--------------- */
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((eachLinks) => {
    eachLinks.addEventListener('click', () => {
        // remove show menu when we cliked nav links
        navMenu.classList.remove('show-menu');

        // remove active first
        removeActiveLink();
        // add active after removing active class
        addActiveLink(eachLinks);
    })
});

function removeActiveLink () {
    navLinks.forEach(link => {
        link.classList.remove("active");
    })
}

function addActiveLink (link) {
    link.classList.add("active");
}

/* --------------PUT BOX SHADOW TO HEADER WHEN SCROLL---------------- */
const header = document.querySelector(".header");

window.addEventListener('scroll', () => {
    if(this.scrollY > 80){
        header.classList.add('show-header-box-shadow');
    } else {
        header.classList.remove('show-header-box-shadow');    
    }
})

/* --------------FILTER PORTFILIO ITEMS---------------- */
const filterBtns = document.querySelectorAll(".filter-btn"),
      projectItems = document.querySelectorAll(".project-item"),
      filterBtnContainer = document.querySelector(".filter-btn-group");

    filterBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            filterBtnContainer.querySelector(".active").classList.remove("active");
            this.classList.add("active"); // this refer to selected to btn


            let filterValue = this.getAttribute("data-filter")

            projectItems.forEach(item => {
                if(filterValue === item.getAttribute("data-category")){
                    item.classList.remove("hide");
                    item.classList.add("show");
                } else {
                    item.classList.add("hide");
                    item.classList.remove("show");
                }

                if(filterValue === "all"){
                    item.classList.add("show");
                    item.classList.remove("hide");
                }
            })
        })
    })

// ----------------Display theme---------------
/*----------------------DISPLAY THEME CUSTOMIZE--------------------- */
const themeBtn = document.querySelector("#theme-button");
const themeModal = document.querySelector(".theme-customize");
const themeClose = document.querySelector("#theme-close");

themeBtn.addEventListener("click", displayThemeModal);
themeClose.addEventListener("click", removeThemeModal);
/*---when click themeModal's background remove theme modal---*/
themeModal.addEventListener("click", closeThemeModalWhenClickBackground);

function displayThemeModal() {
    themeModal.classList.toggle("display-theme")
};
function removeThemeModal () {
    themeModal.classList.remove("display-theme");
}        
function closeThemeModalWhenClickBackground (e) {
    if(e.target.classList.contains("theme-customize")){
        themeModal.classList.remove("display-theme");
    }
}

/*----------------------FONTS--------------------- */
const fontSizes = document.querySelectorAll(".choose-size span");

fontSizes.forEach((size) => {
    size.addEventListener("click", function() {
        let fontSize;

        if(size.classList.contains("font-size-1")){
            fontSize = "12px";
        } else if (size.classList.contains("font-size-2")) {
            fontSize = "14px";
        } else if (size.classList.contains("font-size-3")) {
            fontSize = "16px";
        } else if (size.classList.contains("font-size-4")) {
            fontSize = "18px";
        }
        //change font size of the root html element
        document.querySelector("html").style.fontSize = fontSize;

        //remove active from fontSizes
        removeActiveFontSizes();
        //addActiveFontSizes
        addActiveFontSizes(size);
    });
});
function removeActiveFontSizes () {
    for(let i= 0; i < fontSizes.length; i++){
        fontSizes[i].classList.remove("active");
    }
}
function addActiveFontSizes (size) {
    size.classList.add("active");
}
/*----------------------COLOR--------------------- */
const colorPalette = document.querySelectorAll(".choose-color span");
let root = document.querySelector(":root");

// change primary color
colorPalette.forEach((color) => {
    color.addEventListener("click", function () {
        let primaryHue;

        if(color.classList.contains("color-1")){
            primaryHue = 252;
        } else if(color.classList.contains("color-2")){
            primaryHue = 52;
        } else if(color.classList.contains("color-3")){
            primaryHue = 352;
        } else if(color.classList.contains("color-4")){
            primaryHue = 152;
        } else if(color.classList.contains("color-5")){
            primaryHue = 202;
        }

        // setproperty always needs two arguments
        root.style.setProperty("--primary-hue", primaryHue); 

        // remove active color
        removeColorActive();
        //add active color
        addColorActive(color);
    });
});

function removeColorActive () {
    colorPalette.forEach((clr) => {
        clr.classList.remove("active");
    });
}
function addColorActive (color) {
    color.classList.add("active")
}
/*----------------------CHANGE BACKGROUND COLOR--------------------- */
const bg1 = document.querySelector(".bg-1");
const bg2 = document.querySelector(".bg-2");
const bg3 = document.querySelector(".bg-3");
const body = document.querySelector("body");


let darkColorLightness;
let lightColorLightness;
let whiteColorLightness;

bg1.addEventListener("click", () => {
    darkColorLightness = "16%";
    lightColorLightness = "92%";
    whiteColorLightness = "99%";

    // add active link
    bg1.classList.add("active");

    //remove activelink
    bg2.classList.remove("active");
    bg3.classList.remove("active");

    changeBg();

    //remove customized changes from local storage
    // window.location.reload();
});
bg2.addEventListener("click", () => {
    darkColorLightness= "95%";
    whiteColorLightness = "20%";
    lightColorLightness = "15%";

    // add active class
    bg2.classList.add('active');
    // remove active class
    bg1.classList.remove("active");
    bg3.classList.remove("active");

    //change background
    changeBg();
});
bg3.addEventListener("click", () => {
    darkColorLightness= "95%";
    whiteColorLightness = "10%";
    lightColorLightness = "0%";

    // add active class
    bg3.classList.add('active');
    // remove active class
    bg1.classList.remove("active");
    bg2.classList.remove("active");

    //change background
    changeBg();
});
function changeBg () {
    body.classList.add("delay");
    root.style.setProperty("--light-color-lightness", lightColorLightness);
    root.style.setProperty("--dark-color-lightness", darkColorLightness);
    root.style.setProperty("--white-color-lightness", whiteColorLightness);
}



