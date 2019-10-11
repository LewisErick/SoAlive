let doctorButton = document.getElementById("doctor");

doctorButton.addEventListener("click", function() {
    let doctorView =  document.getElementsByClassName("doctors-main")[0];
    doctorView.style.display = "block";

    let questionsView =  document.getElementsByClassName("questions-main")[0];
    questionsView.style.display = "none";

    let productsView =  document.getElementsByClassName("products-main")[0];
    productsView.style.display = "none";
});

let questionsButton = document.getElementById("question");

questionsButton.addEventListener("click", function() {
    let doctorView =  document.getElementsByClassName("doctors-main")[0];
    doctorView.style.display = "none";

    let questionsView =  document.getElementsByClassName("questions-main")[0];
    questionsView.style.display = "block";

    let productsView =  document.getElementsByClassName("products-main")[0];
    productsView.style.display = "none";
});

let pillsButton = document.getElementById("pills");

pillsButton.addEventListener("click", function() {
    let doctorView =  document.getElementsByClassName("doctors-main")[0];
    doctorView.style.display = "none";

    let questionsView =  document.getElementsByClassName("questions-main")[0];
    questionsView.style.display = "none";

    let productsView =  document.getElementsByClassName("products-main")[0];
    productsView.style.display = "block";
});