//INCLUDES NAVBAR (DESKTOP/MOBILE/TABLET) AND SCROLL PROGRESS BAR

// Transition fade in screen
document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.getElementById('transition-overlay');

  function showOverlay() {
    overlay.classList.remove('opacity-0');
    overlay.classList.add('opacity-100');
    overlay.classList.remove('pointer-events-none');
  }

  function hideOverlay() {
    overlay.classList.remove('opacity-100');
    overlay.classList.add('opacity-0');
    overlay.classList.add('pointer-events-none');
  }

  document.querySelectorAll('a').forEach(link => {
    if (link.hasAttribute('no-overlay')) {
      return; 
    }

    link.addEventListener('click', function (event) {
      event.preventDefault(); 

      showOverlay(); 

      setTimeout(() => {
        history.pushState(null, null, link.href); 
        window.location.href = link.href; 
      }, 800); 
    });
  });

  window.addEventListener('popstate', function () {
    showOverlay(); 

    setTimeout(() => {
      hideOverlay(); 
      window.location.reload(); 
    }, 800); 
  });

  window.addEventListener('load', function () {
    setTimeout(hideOverlay, 800); 
  });

  if (window.location.href === window.location.origin) {
    hideOverlay(); 
  }
});

/*FADE IN WHEN ELEMENT LOADS*/
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in-on-scroll");
  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.remove("opacity-0", "translate-y-10");
              entry.target.classList.add("opacity-100", "translate-y-0");
              observer.unobserve(entry.target);
          }
      });
  });

  elements.forEach((el) => observer.observe(el));
});
/* NAV BAR*/

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


