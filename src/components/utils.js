export function movetoTop () {
    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); 
    }, 100)
}; 

export function collapseHamburgerMenu () {
    const leftsidebar = document.getElementById('leftsidebar');
    const overlay = document.querySelector('section > div.overlay');
    leftsidebar.classList.toggle('active');
    leftsidebar.classList.toggle('inactive');
    overlay.classList.toggle('active');
}

export function expandHamburgerMenu () {
    const overlay = document.getElementById('overlay');
    const leftsidebar = document.getElementById('leftsidebar');   
    leftsidebar.classList.remove('inactive');
    leftsidebar.classList.add('active');
    overlay.classList.add('active');
}
