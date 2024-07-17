function msg() {
    var username = document.getElementById('username').value;
    var age = document.getElementById('age').value;
    var message = '';

    if (username.length == 0 && (age.length > 0 && age > 0)) {
        alert("Incorrect Username");
        window.location.href = 'index.html';
    } else if (username.length > 0 && age.length == 0) {
        alert("Incorrect Age");
        window.location.href = 'index.html';
    } else if (username.length == 0 && age.length == 0) {
        alert("Incorrect Username and Age");
        window.location.href = 'index.html';
    } else if (username.length >= 0 && age <= 0) {
        alert("Age must be greater than 1 (Age > 1)");
        window.location.href = 'index.html';
    } else {
        if (age >= 18) {
            message = "Congratulations " + username + "!, You are Eligible For Vote";
        } else {
            message = "Sorry " + username + "!, You are Not Eligible for Vote";
        }
    }
    document.getElementById('message').innerText = message;
}
