let slider = document.getElementById("slider");
let slides = document.querySelectorAll(".slide");
let currentSlide = 0;
let interval = setInterval(nextSlide, 3000);

function nextSlide() {
  goToSlide(currentSlide + 1);
    }
    
    function previousSlide() {
    goToSlide(currentSlide - 1);
    }
    
    function goToSlide(n) {
    slides[currentSlide].className = "slide";
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].className = "slide active-slide";
    }
    
    let next = document.querySelector(".next");
    let prev = document.querySelector(".prev");
    
    next.addEventListener("click", function() {
    nextSlide();
    });
    
    prev.addEventListener("click", function() {
    previousSlide();
    });

