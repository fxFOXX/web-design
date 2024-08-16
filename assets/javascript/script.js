let slideIndex = 0;
const slides = document.querySelectorAll('.slideshow-slide');
const totalSlides = slides.length;

function showSlides() {
    if (totalSlides === 0) return; // No slides to show

    // Adjust slideIndex if it goes out of bounds
    if (slideIndex >= totalSlides) {
        slideIndex = totalSlides - 1;
    } else if (slideIndex < 0) {
        slideIndex = 0;
    }

    const offset = -slideIndex * 10; // 25% width for 4 images at once
    document.querySelector('.slideshow-wrapper').style.transform = `translateX(${offset}%)`;

    updateArrows();
}

function changeSlide(n) {
    slideIndex += n;
    showSlides();
}

function openModal(img) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');

    modal.style.display = 'block';
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
}

function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}

function updateArrows() {
    const prevArrow = document.querySelector('.prev');
    const nextArrow = document.querySelector('.next');

    // Disable previous arrow if at the first slide
    if (slideIndex === 0) {
        prevArrow.style.display = 'none';
    } else {
        prevArrow.style.display = 'block';
    }

    // Disable next arrow if at the last slide
    if (slideIndex === totalSlides - 1) {
        nextArrow.style.display = 'none';
    } else {
        nextArrow.style.display = 'block';
    }
}

// Initial setup
showSlides();


function toggleMenu() {
    var nav = document.getElementById("mobile-nav");
    nav.classList.toggle("show");
}


function animateValue(id, start, end, duration) {
    const element = document.getElementById(id);
    let startTimestamp = null;

    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.innerText = Math.floor(progress * (end - start) + start) + (id === 'projects' || id === 'customers' ? '+' : '');
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };

    window.requestAnimationFrame(step);
}

function startCounting() {
    animateValue("projects", 0, 300, 4000);
    animateValue("pleasure", 0, 8.9, 4000);
    animateValue("customers", 0, 3000, 4000);
    animateValue("team-members", 0, 23, 4000);
}

document.addEventListener("DOMContentLoaded", function () {
    const footer = document.getElementById('stats-footer');

    const observer = new IntersectionObserver((entries, observer) => {
        if (entries[0].isIntersecting) {
            startCounting();
            observer.disconnect(); // Stop observing after the first trigger
        }
    }, { threshold: 0.5 });

    observer.observe(footer);
});



// Smooth scroll to top
document.querySelector('.scroll-to-top').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});



document.querySelectorAll('.desktop-nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


window.addEventListener('scroll', function () {
    let scrollPosition = window.scrollY;

    let ball1 = document.querySelector('.ball1');
    let ball2 = document.querySelector('.ball2');

    ball1.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    ball2.style.transform = `translateY(${scrollPosition * -0.3}px)`;
});
