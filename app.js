const navbarToggle = document.querySelector(".navbar-toggle")
const navbarContainer = document.querySelector(".navbar-container")

navbarToggle.addEventListener("click", () => {
  const icon = navbarToggle.querySelector("i")
  icon.classList.toggle("fa-xmark")

  navbarContainer.classList.toggle("open")
})
