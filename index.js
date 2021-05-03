const openBtn = document.querySelector(".openBtn");
const closeBtn = document.querySelector(".closeBtn");
const modal = document.querySelector(".modal");

function handleOpenClick() {
    modal.classList.remove("hidden");
}

function handleCloseClick() {
    modal.classList.add("hidden");
}


openBtn.addEventListener("click", handleOpenClick);
closeBtn.addEventListener("click", handleCloseClick);