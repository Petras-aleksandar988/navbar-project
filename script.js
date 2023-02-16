const button = document.querySelector(".toggle-button");
const navlinks = document.querySelector(".nav-links")
button.addEventListener("click", () => {
    navlinks.classList.toggle("active")
})

// add to repository