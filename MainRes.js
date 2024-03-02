window.addEventListener('scroll', function () {
    var Top = window.scrollY;
    console.log("Vertical Scroll (Y): " + Top);
});

function Resume(){
    const resumePath = './2112026_Resume.pdf';
    window.open(resumePath, '_blank');
}


/* ------------------------------------------------------------------------------------------------------------------------------------------------- */

/*Loader*/

document.addEventListener("DOMContentLoaded", function() {
    var loadingBox = document.querySelector('.load');

    loadingBox.style.display = 'flex';

    setTimeout(function() {
        loadingBox.style.display = 'none';
    }, 1000);

    window.addEventListener('beforeunload', function() {
        loadingBox.style.display = 'flex';
    });
});

/* ------------------------------------------------------------------------------------------------------------------------------------------------- */

/*Location*/

function PageMain() {
    location.href = "#Main";
}

function PageSkills() {
    location.href = "#Skills";
}

function PageStudies() {
    location.href = "#Studies";
}

function PageContact() {
    location.href = "#Contact";
}

function PageAbout() {
    location.href = "#About";
}

function PageProject(){
    location.href="#Project";
}

function Resume(){
    location.href="file:///C:/Users/lenovo/Downloads/2112026_Resume.pdf";
}

/* ------------------------------------------------------------------------------------------------------------------------------------------------- */


/*Navbar*/

window.addEventListener('scroll', function () {
    var nav = document.getElementById('nav');
    var scrollTop = window.scrollY;

    if (scrollTop > 600) {
        nav.classList.add('flex-row');
    } else {
        nav.classList.remove('flex-row');
    }
});

/* ------------------------------------------------------------------------------------------------------------------------------------------------- */

/*Hovering*/

const main2 = document.getElementById("main2");
const developerMessage = document.getElementById("developerMessage");
const myself = document.getElementById("myself");

main2.addEventListener("mouseover", () => {
    developerMessage.style.display = "block";
    myself.style.display = "none";
});

main2.addEventListener("mouseout", () => {
    developerMessage.style.display = "none";
    myself.style.display = "block";
});

/* ------------------------------------------------------------------------------------------------------------------------------------------------- */


// //Gallery

let currentSlideIndex = 1;

function updateSlide() {
    for (let i = 1; i <= 6; i++) {
        const box = document.getElementById(`box${i}`);
        if (i === currentSlideIndex || i === currentSlideIndex + 1) {
            box.style.display = 'block';
        } else {
            box.style.display = 'none';
        }
    }
}

function nextSlide() {
    currentSlideIndex += 2;
    if (currentSlideIndex >= 6) {
        currentSlideIndex = 1;
    }
    updateSlide();
}

function prevSlide() {
    currentSlideIndex -= 2;
    if (currentSlideIndex < 1) {
        currentSlideIndex = 6;
    }
    updateSlide();
}




//Project Hover
const box1 = document.getElementById("box1");
const procon1 = document.getElementById("procon1");
const title1 = document.getElementById("title1");

box1.addEventListener("mouseover", () => {
    procon1.style.display = "block";
    title1.style.display = "none";
});

box1.addEventListener("mouseout", () => {
    procon1.style.display = "none";
    title1.style.display = "block";
});

const box2 = document.getElementById("box2");
const procon2 = document.getElementById("procon2");
const title2 = document.getElementById("title2");

box2.addEventListener("mouseover", () => {
    procon2.style.display = "block";
    title2.style.display = "none";
});

box2.addEventListener("mouseout", () => {
    procon2.style.display = "none";
    title2.style.display = "block";
});

const box3 = document.getElementById("box3");
const procon3 = document.getElementById("procon3");
const title3 = document.getElementById("title3");

box3.addEventListener("mouseover", () => {
    procon3.style.display = "block";
    title3.style.display = "none";
});

box3.addEventListener("mouseout", () => {
    procon3.style.display = "none";
    title3.style.display = "block";
});


const box4 = document.getElementById("box4");
const procon4 = document.getElementById("procon4");
const title4 = document.getElementById("title4");

box4.addEventListener("mouseover", () => {
    procon4.style.display = "block";
    title4.style.display = "none";
});

box4.addEventListener("mouseout", () => {
    procon4.style.display = "none";
    title4.style.display = "block";
});

const box5 = document.getElementById("box5");
const procon5 = document.getElementById("procon5");
const title5 = document.getElementById("title5");

box5.addEventListener("mouseover", () => {
    procon5.style.display = "block";
    title5.style.display = "none";
});

box5.addEventListener("mouseout", () => {
    procon5.style.display = "none";
    title5.style.display = "block";
});


const box6 = document.getElementById("box6");
const procon6 = document.getElementById("procon6");
const title6 = document.getElementById("title6");

box6.addEventListener("mouseover", () => {
    procon6.style.display = "block";
    title6.style.display = "none";
});

box6.addEventListener("mouseout", () => {
    procon6.style.display = "none";
    title6.style.display = "block";
});

