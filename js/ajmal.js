let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
    themeToggler.classList.remove('active');
};

// typed js 

var typed = new Typed('.typing-text', {
    strings : ['front end developer', 'front end developer', 'web designer',  'wordpress developer', 'web developer'],
    loop : true,
    typeSpeed : 100
});

// theme toggler

let themeToggler = document.querySelector('.theme-toggler');
let toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.onclick = () =>{
  themeToggler.classList.toggle('active');
}

document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn =>{
  
  btn.onclick = () =>{
    let color = btn.style.background;
    document.querySelector(':root').style.setProperty('--green', color);
  }

});


// lightGallery

lightGallery(document.querySelector('.portfolio .box-container'));