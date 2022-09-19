
//   setTimeout(function(){
//     window.location.href = './home.html/';
//  }, 5000);

const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');


menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});

setTimeout(function(){ window.location='/index'; },5000);


// const toggle = document.getElementById('themeChange');
// const body = document.querySelector('body');

// toggle.addEventListener('click', function(){
//     this.classList.toggle('moonButton');
// })

// document.getElementById('demSix').style.color = "yellow";

// var content = document.getElementsByTagName('body')[0];
// var darkMode = document.getElementById('themeChange');
// darkMode.addEventListener('click', function(){
//     darkMode.classList.toggle('active');
//     content.classList.toggle('night');
// })

function myFunction() {
    var element = document.getElementById("myDIV");
    element.classList.toggle("mystyle");
  };
