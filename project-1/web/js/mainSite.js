var $ = function(id){
    return document.getElementById(id);
}

function processForm(){
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
    var today = new Date(); //sets today's date
    var birthDate = new Date(dob); //sets the birthday given from the parameters
    var age = today.getFullYear() - birthDate.getFullYear(); //subtracts today from the birthday for age
    var m = today.getMonth() - birthDate.getMonth(); //subtracts the month for a more precise age

        //based on the month, checks the specific date you were born and adjusts age accordingly
        if(m < 0 || (m === 0 && today.getDate() < birthDate.getDate())){
            age--;
        }

    //returns age in years
    return age;
}
