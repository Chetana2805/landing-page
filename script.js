document.querySelector(".cta-btn").addEventListener("click", function() {
    alert("Welcome to Click n Craft!");
});

document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});