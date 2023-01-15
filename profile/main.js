import { products } from "../../main/service/products.js";

var selectedProducts = []
var savedCart = JSON.parse(localStorage.getItem('cart')); 

savedCart.forEach( productId => {
    selectedProducts.push(products.find(element => element.id == productId)); 
});

if(selectedProducts){
    document.querySelector('#table-content').innerHTML =
    selectedProducts.map( product => `
    <tr>
        <td>${product.id}</td>
        <td>17 out. 2022</td>
        <td>Pago</td>
        <td>Finalizado</td>
        <td>R$ ${product.value - product.setOff}</td>
    </tr>
    `).join('');
}