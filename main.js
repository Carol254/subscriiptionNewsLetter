function validatePassword(){
    let msg;

    if(document.subForm.myPassword.value.length >= 8 ){
        msg = "excellent";
    }else if(document.subForm.myPassword.value.length > 5){
        msg = "fair";
    }else if(document.subForm.myPassword.value.length == 0){
        msg="no strength";
    }
    else{
        msg="poor";
    }
    document.getElementById('passswordStr').innerText = msg;
}
function validateForm(){
    let name = document.subForm.name.value;
    let password = document.subForm.myPassword.value;
    let num = document.subForm.num.value;
    let x = document.subForm.email.value;
    let atPosition = x.indexOf("@");
    let dotPosition = x.lastIndexOf(".");


    if (name == null || name === "") {
        alert("Name cannot be empty");
        return false;
    } else if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return false;
    }

    if(atPosition < 1 || dotPosition < atPosition + 2  || dotPosition+2 >x.length ){
        alert("Please enter a valid e-mail address \n atPosition:" + atPosition + "\n dotPosition:"
        +dotPosition
        );
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