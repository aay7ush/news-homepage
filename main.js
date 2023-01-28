const navMenu = document.querySelector(".nav__menu")
const navMenuClose = document.querySelector(".nav__menu-close")

navMenu.addEventListener("click", () => {
  navMenu.parentElement.classList.add("active")
})

navMenuClose.addEventListener("click", () => {
  navMenuClose.parentElement.classList.remove("active")
})
