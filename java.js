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

document.querySelector(".cv-button").addEventListener("click", function(){
    const link = document.createElement("a");
    link.href = "CV Kila.pdf"; 
    link.download = "CV Kila.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

const texts = ["Web Developer", "Mobile Programmer", "Game Developer"];
let index = 0;

function changeText() {
    const textElement = document.querySelector(".changing-text");

    textElement.style.opacity = 0; 
    setTimeout(() => {
        textElement.textContent = texts[index];
        textElement.style.opacity = 1; 
        index = (index + 1) % texts.length; 
    }, 500);
}

setInterval(changeText, 2000);

