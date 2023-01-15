

var savedCart = JSON.parse(localStorage.getItem('cart'));

const goHome = () => {
    document.location.href = '/main/index.html';
}

const handleRemoveItem = (id) => { 
    var index = savedCart.findIndex(element => element == id);
    savedCart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(savedCart));
    location.reload();
}

