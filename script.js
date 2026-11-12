
// Mobile Navigation
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// Close mobile menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        if (navLinks) {
            navLinks.classList.remove("active");
        }
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (event) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Current Year in Footer
const footerText = document.querySelector(".footer p");

if (footerText) {
    footerText.textContent =
        `© ${new Date().getFullYear()} Kiran S. All rights reserved.`;
}
