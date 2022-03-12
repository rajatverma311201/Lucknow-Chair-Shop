const themeChange = document.querySelector("#themeChange");
const themeIcon = document.querySelector("#themeChange img")
const body = document.querySelector("body");
const footer = document.querySelector("footer");

// to set the theme as white on page load
body.style.backgroundColor="rgb(255, 255, 255)";

// Function to toggle theme colors and change icon
function toggleTheme(){
    if(body.style.backgroundColor == "rgb(255, 255, 255)"){
        body.style.backgroundColor = "#071e33";
        body.style.color = "#fff";
        footer.style.color = "#fff";
        body.style.transition = "0.5s";

        // change icon from moon to sun
        themeIcon.setAttribute("src", "icons/sun.svg");        
    }
    else{
        body.style.backgroundColor = "#fff";
        body.style.color = "#343a40";
        footer.style.color = "#0b7285";

        //change icon from sun to moon
        themeIcon.setAttribute("src", "icons/moon.svg");
    }
}

// event handler for toggling theme
themeChange.addEventListener('click', toggleTheme);