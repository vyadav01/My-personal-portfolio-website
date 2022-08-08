

const hamburger = document.querySelector(".hamburger");
console.log(hamburger);
const navLists = document.querySelector(".nav-lists");
console.log(navLists);

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLists.classList.toggle("active");
})


document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLists.classList.remove("active");
}))