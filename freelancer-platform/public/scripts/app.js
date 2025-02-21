// Ensure Navigation Works
document.addEventListener("DOMContentLoaded", () => {
    console.log("App Loaded Successfully!");

    // Example: Add Active Class to Navigation
    const currentPath = window.location.pathname;
    document.querySelectorAll("nav ul li a").forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");
        }
    });
});
