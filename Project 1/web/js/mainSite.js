function submit(){
    var password = parseFloat(document.getElementById("pass1").value);
    var rPassword = parseFloat(document.getElementById("pass2").value);
    if(password === rPassword){
        window.alert("The passwords do not match");
        document.getElementById("pass1").focus();
    }
}

function calcAge(){
    var dob = parseFloat(document.getElementById("dob").value);
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth();
    var day = today.getDate();
}
