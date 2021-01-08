const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navbarLinks = document.getElementsByClassName("navbar-links-mobile")[0]

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active")
})



