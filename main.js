function validateForm(){
    let name = document.subForm.name.value;
    let password = document.subForm.myPassword.value;

    if (name == null || name === "") {
        alert("Name cannot be empty");
        return false;
    } else if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return false;
    }
}