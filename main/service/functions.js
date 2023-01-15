if(localStorage.getItem('cart') == null){
    localStorage.setItem('cart', JSON.stringify([]));
}

const goHome = () => {
    document.location.href = '/main/index.html';
}

const handleCart = () => {
    document.location.href = '/cart/index.html';
}

const handleAddToCart = (id) => {
    var savedCart = JSON.parse(localStorage.getItem('cart'));
    savedCart.push(id);
    localStorage.setItem('cart', JSON.stringify(savedCart));
}

const handleBuy = (id) => {
    var savedCart = JSON.parse(localStorage.getItem('cart'));
    savedCart.push(id);
    localStorage.setItem('cart', JSON.stringify(savedCart));
    console.log(savedCart)
    setTimeout(() => {
        document.location.href = '/cart/index.html';
    }, 500)
}