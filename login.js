function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Please enter both email and password.");
        return;
    }

   
    //  ID = Dev123- +everythingbefore @
   
    const usernamePart = email.split("@")[0];  
    const uniqueID = "Dev123" + usernamePart;

    
    // Extract First + Last name
    
    const parts = usernamePart.split(".");
    const firstName = parts[0] || "User";
    const lastName = parts.length > 1 ? parts.slice(1).join(" ") : parts[0];

    
    //   Identify call
   
    aptrinsic("identify",
        {
            id: uniqueID,     
            email: email,
            firstName: firstName,
            lastName: lastName,
     Plan: "gold",
            price: 95.5
        },
        {
            id: "salesforce",
            name: "Salesforce Solutions",
            Program: "Premium"
        }
    );

    alert("Successful Login!\nUnique ID: " + uniqueID);
    window.location.href = "one.html";
}
