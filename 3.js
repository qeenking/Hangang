const nextBtn = document.getElementById("next");
const beforeBtn = document.getElementById("before");
const firstSlide = document.querySelector(".slide1");
const lastSlide = document.querySelector(".slide3");
const playBtn = document.querySelector(".play");
const playBtn2 = document.querySelector(".play3");

const SHOWING_VALUE = "showing";

function handleNext() {
    const currentSlide = document.querySelector(".showing");
    const nextSlide = currentSlide.nextElementSibling;
    if (nextSlide) {
        currentSlide.classList.remove(SHOWING_VALUE);
        nextSlide.classList.add(SHOWING_VALUE);
    } else {
        currentSlide.classList.remove(SHOWING_VALUE);
        firstSlide.classList.add(SHOWING_VALUE);
    }
}

function handleBefore() {
    const currentSlide = document.querySelector(".showing");
    const beforeSlide = currentSlide.previousElementSibling;
    if (beforeSlide) {
        currentSlide.classList.remove(SHOWING_VALUE);
        beforeSlide.classList.add(SHOWING_VALUE);
    } else {
        currentSlide.classList.remove(SHOWING_VALUE);
        lastSlide.classList.add(SHOWING_VALUE);
    }
}

function handlePlay() {
    playBtn2.classList.remove("listen2");
    playBtn2.classList.add("ilsten");
}

function handlePlay2() {
    playBtn2.classList.add("listen2");
    playBtn2.classList.remove("ilsten");
}

nextBtn.addEventListener("click", handleNext);
beforeBtn.addEventListener("click", handleBefore);
playBtn.addEventListener("click", handlePlay);
playBtn2.addEventListener("click", handlePlay2);