const menuIcon = document.querySelector(".menu-icon"); 
const menu = document.getElementById("menu"); 

menuIcon.addEventListener("click", () => {
  menu.classList.toggle("show"); 
});
