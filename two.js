function showSection(section) {
    let sections = document.querySelectorAll(".section");
    sections.forEach(s => s.style.display = "none");
    document.getElementById(section).style.display = "block";
    history.pushState(null, "", section + ".html");
}

showSection("about");

window.onload = function () {
    let file = window.location.pathname.split("/").pop();
    let sec = file.replace(".html", "");
    if (["about", "contact", "test", "bmi", "textbox"].includes(sec)) {
        showSection(sec);
    } else {
        showSection("about");
    }
};

window.onpopstate = function () {
    let file = window.location.pathname.split("/").pop();
    let sec = file.replace(".html", "");
    showSection(sec);
};

function submitContact(event) {
    event.preventDefault();
    alert("Details Submitted");
}

function calculateBMI(event) {
    event.preventDefault();
    let h = document.getElementById("height").value;
    let w = document.getElementById("weight").value;
    let bmi = w / ((h / 100) * (h / 100));
    alert("Your BMI is: " + bmi.toFixed(2));
}

function jump(btn) {
    btn.style.transform = "translateY(-20px)";
    setTimeout(() => {
        btn.style.transform = "translateY(0)";
    }, 300);
}

let activeDropdown = null;
document.addEventListener("click", function (e) {
    if (activeDropdown && !activeDropdown.contains(e.target)) {
        activeDropdown.querySelector(".drop-content").style.display = "none";
        activeDropdown = null;
    }
});

function toggleCountry() {
    let box = document.getElementById("countryDropDown");
    let menu = box.querySelector(".drop-content");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
    activeDropdown = box;
}

function togglePlace() {
    let box = document.getElementById("placeDropDown");
    let menu = document.getElementById("placeMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
    activeDropdown = box;
}

document.getElementById("selectPortBtn").onclick = function (e) {
    e.stopPropagation();
    let menu = document.getElementById("portMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
};

document.getElementById("selectPlaceBtn").onclick = function (e) {
    e.stopPropagation();
    togglePlace();
};


let dragItem = null;
document.querySelectorAll(".drag-box").forEach(box => {
    box.onmousedown = function (e) {
        dragItem = box;
        let offsetX = e.clientX - box.getBoundingClientRect().left;
        let offsetY = e.clientY - box.getBoundingClientRect().top;

        document.onmousemove = function (e) {
            if (dragItem) {
                dragItem.style.left = (e.clientX - offsetX) + "px";
                dragItem.style.top = (e.clientY - offsetY) + "px";
            }
        };
    };
});

document.onmouseup = function () {
    dragItem = null;
    document.onmousemove = null;
};
