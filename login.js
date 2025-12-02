function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Please enter both email and password.");
        return;
    }

    const uniqueID = email.substring(1, 5);

    alert("Successful Login!\nUnique ID: " + uniqueID);
    window.location.href = "one.html";
}
