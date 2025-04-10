setTimeout(function() {
    window.location.href = "trash.html"; 
}, 6000);

const companyName = "CLEAR WIND"; 
const titleElement = document.getElementById("company-name");

function animateLetters() {
    let delay = 0;
    companyName.split("").forEach(letter => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.style.animationDelay = `${delay}s`;
        delay += 0.2;
        titleElement.appendChild(span);
    });
}

animateLetters();