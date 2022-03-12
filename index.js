const themeChange = document.querySelector("#themeChange");
const themeIcon = document.querySelector("#themeChange img")
const body = document.querySelector("body");
const footer = document.querySelector("footer");

themeChange.addEventListener('click', function(){
    console.log(body.style.backgroundColor);
    console.log(themeIcon);
    if(body.style.backgroundColor == "rgb(255, 255, 255)"){
        body.style.backgroundColor = "#071e33";
        body.style.color = "#fff";
        footer.style.color = "#fff";
        body.style.transition = "0.5s";
        themeIcon.setAttribute("src", "icons/sun.svg");        
    }
    else{
        body.style.backgroundColor = "#fff";
        body.style.color = "#343a40";
        footer.style.color = "#0b7285";
        themeIcon.setAttribute("src", "icons/moon.svg");
    }
});