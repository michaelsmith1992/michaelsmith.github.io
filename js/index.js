const hamB = document.querySelector("#hamburger")
const mobLinks = document.querySelector(".mob-header")
const header = document.querySelector(".header")
const close = document.querySelector("#close")




hamB.addEventListener("click", () => {
    mobLinks.style.display = "block"
    header.style.display = "none"
});

close.addEventListener("click", () => {
    mobLinks.style.display = "none"
    header.style.display = "block"
});
