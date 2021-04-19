
// Contact Form
function validateForm() {
    var name = document.forms["contactform"]["name"].value;
    var email = document.forms["contactform"]["email"].value;
    var subject = document.forms["contactform"]["phone"].value;
    var comments = document.forms["contactform"]["website"].value;
    var comments = document.forms["contactform"]["message"].value;
    document.getElementById("error-msg").style.opacity = 0;
    document.getElementById('error-msg').innerHTML = "";
    if (name == "" || name == null) {
        document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning error_message'>*Please enter a Name*</div>";
        fadeIn();
        return false;
    }
    if (email == "" || email == null) {
        document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning error_message'>*Please enter a Email*</div>";
        fadeIn();
        return false;
    }
    if (phone == "" || phone == null) {
        document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning error_message'>*Please enter a Phone Number*</div>";
        fadeIn();
        return false;
    }  
    if (website == "" || website == null) {
        document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning error_message'>*Please enter a Website*</div>";
        fadeIn();
        return false;
    }
    if (message == "" || message == null) {
        document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning error_message'>*Please enter a Message*</div>";
        fadeIn();
        return false;
    }

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("simple-msg").innerHTML = this.responseText;
            document.forms["contactform"]["name"].value = "";
            document.forms["contactform"]["email"].value = "";
            document.forms["contactform"]["phone"].value = "";
            document.forms["contactform"]["website"].value = "";
            document.forms["contactform"]["message"].value = "";
        }
    };
    xhttp.open("POST", "php/contact.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("name=" + name + "&email=" + email + "&phone=" + phone + "&website=" + website + "&message=" + message);
    return false;
}
