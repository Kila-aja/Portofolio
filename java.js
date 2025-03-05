/* script.js */
document.addEventListener("DOMContentLoaded", function() {
    const backToTopButton = document.getElementById("backToTop");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

const texts = ["Web Developer", "Mobile Programmer", "Game Developer"];
let index = 0;

function changeText() {
    const textElement = document.querySelector(".changing-text");

    textElement.style.opacity = 0; // Hilangkan teks sejenak
    setTimeout(() => {
        textElement.textContent = texts[index]; // Ganti teks
        textElement.style.opacity = 1; // Munculkan kembali dengan transisi
        index = (index + 1) % texts.length; // Loop kembali ke awal jika sudah habis
    }, 500); // Delay sebelum mengganti teks
}

// Jalankan setiap 3 detik
setInterval(changeText, 2000);

