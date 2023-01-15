const personalForm = document.querySelector(".personal-form");
const addressForm = document.querySelector(".address-form");
const nextButton = document.getElementById("next-form");
const submitButton = document.getElementById("submit-form");
const errorMsg = document.getElementById("error-msg");

nextButton.addEventListener("click", (event) => {
    event.preventDefault();

    const user = {
        name: personalForm.name.value,
        surname: personalForm.surname.value,
        cpf: personalForm.cpf.value,
        email: personalForm.email.value,
        password: personalForm.password.value
    }

    if(user.name && user.surname && user.cpf && user.email && user.password){

        const repeatedUser = (element) => element.email == user.email || element.cpf == user.cpf

        var savedUsers = JSON.parse(localStorage.getItem('users'));
        
        if (savedUsers.some(repeatedUser)){
            errorMsg.innerHTML =  "Este usuário ja existe";
            errorMsg.style.opacity = 1;
        }else{
            savedUsers.push(user);
            localStorage.setItem('users', JSON.stringify(savedUsers));
            personalForm.setAttribute("hide", "");
            addressForm.removeAttribute("hide");
        }
        
    }else{
        errorMsg.innerHTML = "Todos os campos são obrigatórios"
        errorMsg.style.opacity = 1;
    }

});

submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    personalForm.setAttribute("hide", "");
    addressForm.removeAttribute("hide");

    const address = {
        zipcode: addressForm.zipcode.value,
        street: addressForm.street.value,
        district: addressForm.district.value,
        city: addressForm.city.value,
        state: addressForm.state.value
    }

    if(address.zipcode && address.street && address.district && address.city && address.state){

        var savedAddress = JSON.parse(localStorage.getItem('address'));
        savedAddress.push(address);
            
        localStorage.setItem('address', JSON.stringify(savedAddress));
        alert("Conta criada com sucesso sucesso!");
        document.location.href = '/login/index.html';
        
    }else{
        errorMsg.innerHTML = "Todos os campos são obrigatórios"
        errorMsg.style.opacity = 1;
    }
});




 