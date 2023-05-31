import { covers } from '../dataLoader';

export function movetoTop () {
    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); 
    }, 100)
}; 


export function shuffleArray(array) {
    /* Fisher's Algorithm */
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


export function collapseHamburgerMenu () {
    const overlay = document.getElementById('overlay');
    const leftsidebar = document.getElementById('leftsidebar');
    leftsidebar.classList.add('inactive');
    leftsidebar.classList.remove('active');
    overlay.classList.remove('active');
}

export function expandHamburgerMenu () {
    const overlay = document.getElementById('overlay');
    const leftsidebar = document.getElementById('leftsidebar');   
    leftsidebar.classList.remove('inactive');
    leftsidebar.classList.add('active');
    overlay.classList.add('active');
}

export function toggleHamburgerMenu(show) {
    const overlay = document.getElementById('overlay');
    const leftsidebar = document.getElementById('leftsidebar');   

    if (show === true) {
        leftsidebar.classList.remove('inactive');
        leftsidebar.classList.add('active');
        overlay.classList.add('active');
    } 
    else {
        leftsidebar.classList.add('inactive');
        leftsidebar.classList.remove('active');
        overlay.classList.remove('active');
    }
}

export function toggleAnchorColor(id, color) {
    const element = document.getElementById(id);
    (color === true) 
        ? element.classList.add('active') 
        : element.classList.remove('active');
}

export function getDate() {
    const currentDate = new Date().toLocaleDateString('en-US'); 
    const formattedDate = currentDate.split('/').join('/'); 
    return(formattedDate);
}

export function showCover(cover, bgc) {
    /* Use method overloading here */
    const divStyle = {
        backgroundColor: `#${bgc}`,
    };
    return (
        <div className="img-cover" style={divStyle}>
        <img src={covers[cover]} alt=""/> 
        </div>
    );
}
