var simpleEatsBlock = document.querySelector(".simpleEats");
var jsQuizBlock = document.querySelector(".jsQuiz");
var weatherDashBlock = document.querySelector(".weatherDash");
var pwGenBlock = document.querySelector(".pwGen");
var dayPlanBlock = document.querySelector(".dayPlan");
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
        "https://drive.google.com/file/d/1nCfAKbJ0upvmMj3GwXKJDPUgb7ajCV4d/view?usp=sharing", "_blank"); 
});

logo.addEventListener("click", function() {
    $(document).scrollTop(0);
});

