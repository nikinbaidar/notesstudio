import  React from 'react';

import { loadNavigationBar } from '../dataLoader';


class Navigation extends React.Component {

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

    showLeftSideBar = () => {
        const leftsidebar = document.getElementById('leftsidebar');
        leftsidebar.classList.toggle('active');
    }

    render() {
        return(
            <nav>
            <ul className="nav_items"
            onClick={this.handleClick}>{this.navBar}</ul>
            <img src={require("../logo.png")} alt="site logo"/>
            <div class="menu-btn" onClick={this.showLeftSideBar}>
                <span class="hamburger"></span>
                <span class="hamburger"></span>
                <span class="hamburger"></span>
            </div>
            </nav>
        );
    }
}


export default Navigation;
