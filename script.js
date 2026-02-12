
function toggleTheme(){
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("theme","dark");
    }else{
        localStorage.setItem("theme","light");
    }
}

window.onload = function(){
    const savedTheme = localStorage.getItem("theme");

    if(savedTheme === "dark"){
        document.body.classList.add("dark-mode");
    }else{
        document.body.classList.add("light-mode")   
    }
}
const icon = document.querySelector(".theme-toggle i");

if(document.body.classList.contains("dark-mode")){
    icon.classList.replace("fa-moon","fa-sun");
}else{
    icon.classList.replace("fa-sun","fa-moon");
}




