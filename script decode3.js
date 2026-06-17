let cartCount = 0;

/* Add to Cart Function */
function addToCart() {
    cartCount++;

    document.getElementById("cartCount").textContent = cartCount;

    alert("Phone added to cart!");
}

/* Search Functionality */
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function () {

    const searchValue = searchInput.value.toLowerCase();

    const products = document.querySelectorAll(".products .product-card");

    products.forEach(function (product) {

        const productName = product
            .querySelector("h3")
            .textContent
            .toLowerCase();

        if (productName.includes(searchValue)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }

    });

});


/* Banner Slider */
const slides = document.querySelectorAll(".hero-slider .slide");

let currentSlide = 0;

function showSlide(index) {

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

/* Initial Slide */
showSlide(currentSlide);

/* Auto Slide Every 5 Seconds */
setInterval(nextSlide, 5000);
const slides = document.querySelectorAll(".hero-slider .slide");

let currentSlide = 0;

function showSlide(index) {
    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

function nextSlide() {
    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

showSlide(currentSlide);

setInterval(nextSlide, 5000); // 5 seconds