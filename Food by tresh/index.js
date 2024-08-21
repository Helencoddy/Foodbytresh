'use strict';

//Adding the cookie notification
const header = document.querySelector('.header');
const nav = document.querySelector('.main-nav');
const message = document.createElement('div');
message.classList.add('.cookie-message');
message.innerHTML = 'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie"> Got it! </button>';
header.before(message);

document.querySelector('.btn--close-cookie').addEventListener('click', function(){
    message.remove();
});


//IMPLEMENTNG SMOOTH SCROLL

document.querySelector('.main-nav-list').addEventListener('click', function(e){
    e.preventDefault();
    if(e.target.classList.contains('main-nav-link')){

        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior: 'smooth'});
    }
    
});

//IMPLEMENTING STICKY NAVIGATION Using Intersection Observer API
const heading = document.querySelector('.section-hero');

const stickyNav = function(entries, Observer){
    const [entry] = entries;
    if(!entry.isIntersecting){
        header.classList.add('sticky')
    } else{
        header.classList.remove('sticky')
    }
    
};

const headObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
});

headObserver.observe(heading)

//IMPLEMENTING THE SECTION HIDE OPTION
const allSection = document.querySelectorAll('.section')

const secCallBack = function(entries, observer){
    const [entry] = entries;
    if(!entry.isIntersecting)return;
    entry.target.classList.remove('section--hidden')
};

const secObserver = new IntersectionObserver(secCallBack, {
    root: null,
    threshold: 0.15
});

allSection.forEach(function(section){
    secObserver.observe(section);
    section.classList.add('section--hidden')
})
