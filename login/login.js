const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const createAccountButton = document.getElementById("create-account-form");

loginButton.addEventListener("click", (event) => {
    event.preventDefault();

    const userEmail = loginForm.email.value;
    const userPassword = loginForm.password.value;

    var savedUsers = JSON.parse(localStorage.getItem('users'));
    var savedCart = JSON.parse(localStorage.getItem('cart'));

    const user = (element) => element.email == userEmail && element.password == userPassword;

    // if(localStorage.getItem('users') == null){
    //     localStorage.setItem('users', JSON.stringify([]));
    // }

    if (savedUsers.some(user)){
        alert("Login feito com sucesso!");

        if(savedCart.length > 0){
            document.location.href = '/checkout/index.html';
        }else{
            document.location.href = '/profile/index.html';
        }
        
    }else{
        loginErrorMsg.style.opacity = 1;
    }
});

createAccountButton.addEventListener("click", (event) => {
    event.preventDefault();
    document.location.href = '/createAccount/index.html';
});

