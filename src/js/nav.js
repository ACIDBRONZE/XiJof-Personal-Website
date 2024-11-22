//INCLUDES NAVBAR (DESKTOP/MOBILE/TABLET) AND SCROLL PROGRESS BAR

// Transition fade in screen
document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.getElementById('transition-overlay');
 
  document.querySelectorAll('a').forEach(link => {

    if (link.hasAttribute('no-overlay')) {
      return;
    }

    link.addEventListener('click', function (event) {
      event.preventDefault();  

      overlay.classList.remove('opacity-0');
      overlay.classList.add('opacity-100');
      overlay.classList.remove('pointer-events-none');

      setTimeout(() => {
        window.location.href = link.href;
      }, 800);  
    });
  });
});

function openMenu() {
    const menu = document.getElementById('menu');
    const burgericon = document.getElementById('burger');
    const closeburger = document.getElementById('closeburger');

    menu.classList.toggle('hidden');
    burgericon.classList.toggle('hidden');
    closeburger.classList.toggle('hidden');
}

function dropdown() {
const dropdown = document.getElementById('dropdown');
const hobbiesmob = document.getElementById('mobilehobbies');
hobbiesmob.classList.toggle('text-orange-500');
dropdown.classList.toggle('hidden');
}

function deskdropdown() {
const desktophobbies = document.getElementById('desktopdrop');
desktophobbies.classList.toggle('hidden');
}

//SCROLL PROGRESS BAR
window.addEventListener('scroll', function() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrollPercentage = (scrollTop / docHeight) * 100;


    document.getElementById('scroll-progress').style.height = scrollPercentage + '%';
  });

//footer copyright
document.getElementById('currentYear').innerText = new Date().getFullYear();


