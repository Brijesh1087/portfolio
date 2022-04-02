const bars = document.getElementById('bars');
const navbar_list = document.getElementById('navbar-list');

bars.addEventListener('click',()=>{
	navbar_list.classList.toggle('navbar-hidden-list');
	bars.classList.toggle('fa-close');
	bars.classList.toggle('bars-white');


});

const navbar = document.querySelector('.header');
const sticky = navbar.offsetTop;

const sticky_navbar=()=> {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
sticky_navbar()