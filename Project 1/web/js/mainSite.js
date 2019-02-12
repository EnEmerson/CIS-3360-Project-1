var $ = function(id){
    return document.getElementById(id);
}

function submitForm(){
    var fName = $("fName").value;
    var lName = $("lName").value;
    var dob = $("dob").value;
    var email = $("email").value;
    var password = $("pass1").value;
    var rPassword = $("pass2").value;

    if(password != rPassword){
        alert("Make sure passwords match!");
        $("pass1").focus();
        return;
    }

    var age = calcAge(dob);

    $("retText").innerHTML = fName + " " + lName + ", your age is " + age + " and your email is " + email;
}

function calcAge(dob){
    var today = new Date();
    var birthDate = new Date(dob);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if(m < 0 || (m === 0 && today.getDate() < birthDate.getDate())){
        age--;
    }
    return age;
}
