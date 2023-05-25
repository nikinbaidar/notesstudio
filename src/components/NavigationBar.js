import  React from 'react';
import { loadNavigationBar } from '../dataLoader';

class Navigation extends React.Component {

    expandHamburgerMenu = () => {
        const overlay = document.getElementById('overlay');
        const leftsidebar = document.getElementById('leftsidebar');   
        leftsidebar.classList.remove('inactive');
        leftsidebar.classList.add('active');
        overlay.classList.add('active');
    }

    handleClick(event) {
        /* Deactivate the current active element */
        document.getElementsByClassName('active')[0].className = "inactive";
        /* Activatee the element which was clicked */
        event.target.className = "active";
    }

    navBar = loadNavigationBar().map((item, index) => {
        const elem = {
            id: crypto.randomUUID(),
            label: item.name,
            class: item.isActive ? 'active' : 'inactive'
        };
        return <li className={elem.class} key={elem.id}>{elem.label}</li>;
    });

    render() {

        return(
            <nav>
                <ul className="nav_items"
                onClick={this.handleClick}>{this.navBar}</ul>
                <img src={require("../logo.png")} alt="site logo"/>
                <button className="menu-btn" onClick={this.expandHamburgerMenu}>
                    <span className="hamburger"></span>
                    <span className="hamburger"></span>
                    <span className="hamburger"></span>
                </button>
            </nav>
        );
    }
}


export default Navigation;
