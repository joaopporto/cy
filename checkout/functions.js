import { products } from "../../main/service/products.js";

const finish = document.querySelector('#finish');

var selectedProducts = [];
var savedCart = JSON.parse(localStorage.getItem('cart')); 

savedCart.forEach( productId => {
    selectedProducts.push(products.find(element => element.id == productId)); 
});

if(selectedProducts){
    document.querySelector('.card-body__payment').innerHTML =
    selectedProducts.map( product => `
        <li>
            <img src="../main/img/products/${product.imageURL}" alt="" class="product-img">
            <div>
                <h2>${product.name}</h2>
                <p>R$ ${(product.value - product.setOff).toFixed(2)}</p>
                <label for="freight"><input type="radio" id="freight" > Normal: ${product.freight}</label>
            </div>
        </li>
    `).join('');
}

var savedAddress = JSON.parse(localStorage.getItem('address')); 

if(savedAddress){
    document.querySelector('.card-body__address').innerHTML =
    savedAddress.map( address => `
        <h2>${address.district}</h2>
        <p>${address.street}</p>
    `).join('');
}

finish.addEventListener("click", () => {
    alert("Compra realizada com sucesso!");
    document.location.href = '/profile/index.html';
})

