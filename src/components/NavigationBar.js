import  React from 'react';
import { NavLink } from "react-router-dom";
import { loadNavigationBar } from '../dataLoader';
import * as utils from './utils';

class Navigation extends React.Component {

    navBar = loadNavigationBar().map((item) => {
        const elem = {
            key: crypto.randomUUID(),
            label: item.name,
            path: item.path,
            id: item.name,
        };

        return (
            <li key={elem.key}>
                <NavLink to={elem.path} id={elem.id} className="navigatiors"
            onClick={this.handleClick}>
                {elem.label}
                </NavLink>
            </li>
        );
    });

    handleClick(event) {
        utils.movetoTop();
    }

    render() {

        return(
            <nav>
            <ul className="nav_items"> {this.navBar} </ul>
            <img src={require("../logo.png")} alt="site logo"/>
            <button className="menu-btn" onClick={utils.expandHamburgerMenu}>
                <span className="hamburger"></span>
                <span className="hamburger"></span>
                <span className="hamburger"></span>
            </button>
            </nav>
        );
    };
}

export default Navigation;
