import  React from 'react';

import { loadNavigationBar } from '../dataLoader';

class Navigation extends React.Component {

    constructor() {
        super();
        this.state = {
            showMenu: false,
        }
    }

    handleMenuClick = () => {
        const overlay = document.querySelector('section > div.overlay');
        const leftsidebar = document.getElementById('leftsidebar');
        if (leftsidebar.classList.contains('active') !== true) {
            leftsidebar.classList.add('active');
            overlay.classList.add('active');
            leftsidebar.classList.remove('inactive');
        }
        else {
            leftsidebar.classList.add('inactive');
            leftsidebar.classList.remove('active');
            overlay.classList.remove('active');
        }

    }

    handleClick(event) {
        /* Deactive the current active element */
        document.getElementsByClassName('active')[0].className = "inactive";
        /* Active the element which was clicked */
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
            <button className="menu-btn" onClick={this.handleMenuClick}>
                <span className="hamburger"></span>
                <span className="hamburger"></span>
                <span className="hamburger"></span>
            </button>
            </nav>
        );
    }
}


export default Navigation;
