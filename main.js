const btnMobileNav = document.querySelector('.header__btn-mobile-nav');
const header = document.querySelector('.header');
btnMobileNav.addEventListener('click',function(){
  header.classList.toggle('nav-open')
  console.log('click');
})