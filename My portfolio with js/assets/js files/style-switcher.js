// ========== Toggle Style Switcher Panel ==========
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
const styleSwitcher = document.querySelector(".style-switcher");

styleSwitcherToggle.addEventListener("click", () => {
    styleSwitcher.classList.toggle("open");
});

// ========== Hide Style Switcher When Scroll ==========
window.addEventListener("scroll", () => {
    if (styleSwitcher.classList.contains("open")) {
        styleSwitcher.classList.remove("open");
    }
});

// ========== Theme Color Switcher ==========
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });

    // Optional: Save color choice in localStorage
    localStorage.setItem("color", color);
}

// ========== Load saved theme on page load ==========
window.addEventListener("load", () => {
    const savedColor = localStorage.getItem("color");
    if (savedColor) {
        setActiveStyle(savedColor);
    } else {
        // Default color (optional)
        setActiveStyle("color-1");
    }
});



/* ============== Theme Light and Dark ============ */ 
const dayNight = document.querySelector(".day-night");

// Toggle theme and store preference
dayNight.addEventListener("click", () => {
    // Toggle icon
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");

    // Toggle dark mode
    document.body.classList.toggle("dark");

    // Save preference to localStorage
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// On load, apply saved theme
window.addEventListener("load", () => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark") {
        document.body.classList.add("dark");
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        document.body.classList.remove("dark");
        dayNight.querySelector("i").classList.add("fa-moon");
    }
});
