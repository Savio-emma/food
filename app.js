const parents = document.querySelectorAll('.observe');

const options = {
    threshold: 0
}

parents.forEach(parent =>{
    const observer = new IntersectionObserver (function(entries,observer){
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                parent.classList.add("toggle");
            } else {
                parent.classList.remove("toggle");
            }
        })
    }, options)
    observer.observe(parent)
})


//this part is the open and close menu for pads and mobiles only!
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const mainMenu = document.querySelector(".header-buttons");
const buttons = document.querySelector(".buttons");


openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show(){
  mainMenu.style.display = 'flex';
  mainMenu.style.left = '30%';
  buttons.style.opacity = '1';
}

function close(){
  mainMenu.style.left = '120%';
  buttons.style.opacity = '0';
}


//LIGHT AND DARK THEME TOGGLE FUNCTION
// Retrieve checkbox state from local storage when the page is loaded
document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('checkbox');
    const checkboxState = localStorage.getItem('checkboxState');
  
    if (checkboxState === 'checked') {
      checkbox.checked = true;
      document.body.classList.add('light-theme');
      icon.src = "moon-solid.svg";
    }
  
    // Update local storage and toggle dark mode when checkbox state changes
    checkbox.addEventListener('change', function() {
      if (checkbox.checked) {
        localStorage.setItem('checkboxState', 'checked');
        document.body.classList.add('light-theme');
        icon.src = "moon-solid.svg";
        video.src = "light.mp4";
      } else {
        localStorage.removeItem('checkboxState');
        document.body.classList.remove('light-theme');
        icon.src = "sun_image.png";
      }
    });
  
  });
  
  
  
  // THIS AFFECTS ONLY THE SCROLL TO THE TOP PROPERTY ACROSS THE WEBPAGES
  var scrollTop = document.querySelector(".scroll-to-top");
  
  window.addEventListener("scroll", ()=>{
    if(window.scrollY > 500){
      scrollTop.classList.add("static");
    } else {
      scrollTop.classList.remove("static")
    }
  })
  