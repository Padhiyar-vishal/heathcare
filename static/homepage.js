var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("addimg");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1
    }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

function signupin() {

    let signup = document.getElementById("signupid");
    let container = document.getElementById("containerid")
    let loginuser = document.getElementById("loginuser")


    if (signup.style.display != 'block') {
        signup.style.display = 'block';
        loginuser.style.display = 'none';
        container.style.opacity = '0.2'

    } else {
        signup.style.display = 'none';
        container.style.opacity = '1'


    }
}

function login() {
    let signup = document.getElementById("signupid");
    let loginuser = document.getElementById("loginuser")
    let container = document.getElementById("containerid")

    if (loginuser.style.display != 'block') {
        loginuser.style.display = 'block';
        signup.style.display = 'none';
        container.style.opacity = '0.2'

    } else {
        loginuser.style.display = 'none';
        container.style.opacity = '1'


    }

}