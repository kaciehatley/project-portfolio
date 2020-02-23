var simpleEatsBlock = document.querySelector(".simpleEats");
var jsQuizBlock = document.querySelector(".jsQuiz");
var weatherDashBlock = document.querySelector(".weatherDash");
var pwGenBlock = document.querySelector(".pwGen");
var dayPlanBlock = document.querySelector(".dayPlan");
var allBooked = document.querySelector(".allBooked");
var gitHub = document.querySelector("#gitHub");
var linkedIn = document.querySelector("#linkedIn");
var resume = document.querySelector("#resume");
var logo = document.querySelector("#logo");

simpleEatsBlock.addEventListener("click", function() {
    window.open( 
        "https://kaciehatley.github.io/simple-eats/index2.html", "_blank"); 
});

jsQuizBlock.addEventListener("click", function() {
    window.open( 
        "https://kaciehatley.github.io/code-quiz/", "_blank"); 
});

weatherDashBlock.addEventListener("click", function() {
    window.open( 
        "https://kaciehatley.github.io/weather-dashboard/", "_blank"); 
});

pwGenBlock.addEventListener("click", function() {
    window.open( 
        "https://kaciehatley.github.io/password_generator/", "_blank"); 
});

dayPlanBlock.addEventListener("click", function() {
    window.open( 
        "https://kaciehatley.github.io/day-planner/", "_blank"); 
});

allBooked.addEventListener("click", function() {
    window.open( 
        "https://cryptic-chamber-77839.herokuapp.com/", "_blank"); 
});

gitHub.addEventListener("click", function() {
    window.open( 
        "https://github.com/kaciehatley", "_blank"); 
});

linkedIn.addEventListener("click", function() {
    window.open( 
        "https://www.linkedin.com/in/kacie-hatley-a1392518a", "_blank"); 
});

resume.addEventListener("click", function() {
    window.open( 
        "assets/pdf/Kacie-Hatley-Updated-Resume.pdf", "_blank"); 
});

logo.addEventListener("click", function() {
    $(document).scrollTop(0);
});

window.onload($(document).scrollTop(0));