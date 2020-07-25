const menuIcon = document.querySelector('.menu-icon')
const backdrop = document.querySelector('.backdrop');
const heartPath = document.getElementById('heart-path');

function toggleMenuIcon() {
  menuIcon.classList.toggle('active')
}

menuIcon.addEventListener('click', ()=>{
    toggleMenuIcon();
    const sideBar = document.querySelector('.mobile-nav-links');
    sideBar.classList.toggle('show-sidebar');
    sideBar.classList.toggle('hide-sidebar');
    backdrop.classList.toggle('show-backdrop');
    backdrop.classList.toggle('hide-backdrop');
});

heartPath.addEventListener('click',()=>{
  if(heartPath.style.fill === "red"){
    heartPath.style.fill = "white";
    return;
  }
  heartPath.style.fill = "red";
})



