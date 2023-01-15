import { products } from "../../main/service/products.js";

const applyCoupon = document.getElementById('apply');
const couponErrorMsg = document.getElementById('coupon-error-msg');
const checkout = document.getElementById('checkout');
const keepBuying = document.getElementById('keep-buying');
var productData = document.getElementById('products');
var summary = document.getElementById('summary');
var empty = document.getElementById('empty');

const handleCouponField = () => {
   
    var element = document.getElementById("coupon");
    if(element.classList.contains('hide')){
        element.classList.remove("hide");
        element.classList.add("coupon");
        document.getElementById("link").classList.add('close')
    }else{
        element.classList.add("hide");
        element.classList.remove("coupon");
        document.getElementById("link").classList.remove('close');
    }
}

applyCoupon.addEventListener('click', () =>{
    couponErrorMsg.classList.remove('hide');
});

checkout.addEventListener('click', () =>{
    document.location.href = '/login/index.html';
});

keepBuying.addEventListener('click', () =>{
    document.location.href = '/main/index.html';
});


// HandleCart

var selectedProducts = []; 
var savedCart = JSON.parse(localStorage.getItem('cart'));

if(savedCart.length > 0){
    empty.style.display = "none";
}else{
    productData.style.display = "none";
    summary.style.display = "none";
    empty.style.display = "flex";
}

savedCart.forEach( productId => {
    selectedProducts.push(products.find(element => element.id == productId)); 
});

if(selectedProducts){
    document.querySelector('.product-card__container').innerHTML =
    selectedProducts.map( product => `
    <li class="product-card" onclick="handleTotalValue()">
        <img src="../main/img/products/${product.imageURL}" alt="" class="product-img">
        <div id="product-data">
            <h2>${product.name}</h2>
            <p>${product.value}</p>
            <label for="amount">Quantidade:</label>
            <input type="number" id="amount" placeholder="0">
        </div>
        <img src="./img/delete_black_24dp.svg" alt="" class="trash" onclick="handleRemoveItem(${product.id})">            
    </li>
    `).join('');
}

var subtotal = 0;
var discount = 0;
var total = 0;

const handleSubtotal = () => {
    selectedProducts.map(element => subtotal += element.value);
    return (subtotal).toFixed(2);
};

const handleDiscount = () => {
    selectedProducts.map(element => discount += element.setOff);
    return (discount).toFixed(2);
};

const handleTotal = () => {
    return (total = subtotal - discount).toFixed(2);
}

document.querySelector('#subtotal').innerHTML = `${handleSubtotal()}`;
document.querySelector('#discount').innerHTML = `${handleDiscount()}`;
document.querySelector('#total').innerHTML = `${handleTotal()}`;


