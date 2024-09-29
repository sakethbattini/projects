function userName1() {
    let uName = document.getElementById("un").value;
    if (uName == "") {
        document.getElementById("ns").innerHTML = "* Enter user name "
        return false
    }
    else if (uName != "") {
       document.getElementById("ns").innerHTML = "* "
    }
    else if (uName.length < 6) {
        document.getElementById("ns").innerHTML = "* user name should be above 6 characters "
        return false
    }
}
function userPswd() {
    let uPswd = document.getElementById("up").value;
    if (uPswd == "") {
        document.getElementById("ps").innerHTML = "* password should not be empty "
        return false
    }
    else if (uPswd.length < 6) {
        document.getElementById("ps").innerHTML = "* password should be above 6 characters "
        return false
    }
}
function confirmPassword() {
    let uPswd = document.getElementById("up").value;
    let ucp = document.getElementById("ucp").value
    if (uPswd != ucp) {
        document.getElementById("cps").innerHTML = "* password shouldn't match "
        return false

    }
}
function number() {
    let un = document.getElementById("unum").value
    if (un == "") {
        document.getElementById("nums").innerHTML = "enter number"
        return false
    }
    else if (un.length != 10) {
        document.getElementById("nums").innerHTML = "number should be 10 digits"
        return false
    }
}

function email() {
    let um = document.getElementById("ue").value
    let indexOfat = um.indexOf("@")
    let indexOfdot = um.indexOf(".")
    if (um == "") {
        document.getElementById("ems").innerHTML = "enter email"

        return false
    }
    else if (indexOfat + 6 != indexOfdot) {
        document.getElementById("ems").innerHTML = "enter correct Email"
        return false
    }
}
function gender() {
    if (document.getElementById("ugm").checked == false && document.getElementById("ugf").checked == false && document.getElementById("ugo").checked == false) {
        document.getElementById("gs").innerHTML = "select gender"
        return false
    }
}
function country12() {
    if (document.getElementById("country").selectedIndex == 0) {
        document.getElementById("cs").innerHTML = "select country"
        return false
    }
}


function reSet() {
    let flag = confirm("are you sure")
    return flag
}
