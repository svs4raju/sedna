//header  responsive nav

const menu = document.querySelector(".header__responsive-btn");
const headerNav = document.querySelector(".header__nav");
menu.addEventListener("click", function() {
  headerNav.classList.toggle("responsive-nav");
  document.querySelector("#loginbtn").classList.toggle("btn_head-normal");
  document.querySelector("#loginbtn").classList.toggle("btn_head-primary");
  document.querySelector("html").classList.toggle("scrolloff");
  if (menu.innerHTML === "Menu") {
    menu.innerHTML = "Close";
  } else{
      menu.innerHTML = "Menu";
  }    
});


