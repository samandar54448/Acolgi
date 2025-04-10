document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
  
    const handleScroll = () => {
      const triggerBottom = window.innerHeight * 0.8;
  
      cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
  
        if (cardTop < triggerBottom) {
          card.classList.add('visible');
        }
      });
    };
  
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
  });

  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".animate-on-scroll");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });
  
    cards.forEach((card) => {
      observer.observe(card);
    });
  });

  window.addEventListener("scroll", function () {
    const footer = document.getElementById("footer");
    const footerPosition = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
  
    if (footerPosition < windowHeight) {
      footer.style.opacity = 1;
      footer.style.transform = "translateY(0)";
    }
  });
  

  const form = document.getElementById("registrationForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();

   
    const button = document.querySelector(".register-btn");
    button.textContent = "Регистрация...";
    button.style.backgroundColor = "#81c784";

    setTimeout(() => {
        alert("Регистрация успешна!");
        button.textContent = "Зарегистрироваться";
        button.style.backgroundColor = "#2e7d32";
        form.reset();
    }, 2000);
});