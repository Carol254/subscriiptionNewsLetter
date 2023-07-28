function validateForm(){
    let name = document.subForm.name.value;
    let password = document.subForm.myPassword.value;
    let num = document.subForm.num.value;

    if (name == null || name === "") {
        alert("Name cannot be empty");
        return false;
    } else if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return false;
    }

    if(isNaN(num)){
        document.getElementById("numloc").innerHTML = "Enter Numeric Value Only";

        setTimeout(()=>{
            document.getElementById("numloc").innerHTML = "";
        },2000);
        return false;
    }else {
        document.subForm.submit();
        return true;
    }
}