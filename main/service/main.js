import { products } from "./products.js";

document.getElementById('products').innerHTML =
products.map( product => `
    <article class="product-card">
        <div class="product-image" style="--bg-image: url(../img/products/${product.imageURL})">
            <p class="product-description">
                ${product.description}
            </p>
        </div>
        <div class="products-container">
            <h2 class="product-title">${product.name}</h2>
            <div class="buttons-container">
                <button id="add-to-cart" onclick="handleAddToCart(${product.id})">Adicionar o carrinho</button>
                <button id="buy" class="buy" value="R$ ${(product.value - product.setOff).toFixed(2)}" onclick="handleBuy(${product.id})"></button>
            </div>
        </div> 
    </article>
`).join('');

if(localStorage.getItem('users') == null || localStorage.getItem('address') == null || localStorage.getItem('cart') == null){
  localStorage.setItem('users', JSON.stringify([]));
  localStorage.setItem('address', JSON.stringify([]));
  localStorage.setItem('cart', JSON.stringify([]));
}

// Carousel

// Select all slides
const slides = document.querySelectorAll(".slide");

// loop through slides and set each slides translateX property to index * 100% 
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

// current slide counter
let curSlide = 0;

// select next slide button
const nextSlide = document.querySelector(".btn-next");

let maxSlide = slides.length - 1;

// add event listener and navigation functionality
nextSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

//   move slide by -100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

const prevSlide = document.querySelector(".btn-prev");

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

