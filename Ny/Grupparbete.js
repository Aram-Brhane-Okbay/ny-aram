function validateForm() {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        document.getElementById("error-message").innerHTML="Alla fält måste fyllas i."
        return false;
    }

    if(!validateEmail(email)){
        document.getElementById("error-message").innerHTML="E-postadressen är ogiltig."
        return false;
    }

    return true;
}

function validateEmail(email) {
    var re=/\S+@\S+\.\S+/;
    return re.test(email);
}