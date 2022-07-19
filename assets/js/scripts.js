let btn = document.querySelector("#btn");
let body = document.getElementsByTagName("body")[0];
let msg = document.querySelector(".msg");
let footer = document.getElementsByTagName("footer")[0];
const DarkMode = "dark-mode";
const LightMode = "light-mode";

btn.addEventListener("click", () => {

    if(body.classList.contains(DarkMode)){
        msg.innerHTML = "Light Mode ON";
        btn.innerHTML = "Dark Mode";
    }else{
        msg.innerHTML = "Dark Mode ON";
        btn.innerHTML = "Light Mode";
    }

    btn.classList.toggle(LightMode);
    body.classList.toggle(DarkMode);
    footer.classList.toggle(LightMode);
});
