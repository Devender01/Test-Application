function showDescription(id) {
    document.querySelectorAll('.desc').forEach(el => el.style.display = "none");
    document.getElementById(id).style.display = "block";
}

function showRule(id) {
    document.querySelectorAll('.desc').forEach(el => el.style.display = "none");
    document.getElementById(id).style.display = "block";
}

function nextStep() {
    window.location.href = "one.html";
}
