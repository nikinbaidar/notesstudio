import React from 'react';
import { NavLink } from "react-router-dom";
import { loadCards } from '../dataLoader';
import software from "../data/images/server-logo-dark.png"

class BlogMaster extends React.Component {

    constructor(props){
        super(props);
        const blogs = loadCards("blogs");
        // Use reduce to create a blog map
        var blogMap = blogs.reduce(function(result, blog) {
            result[blog.title] = blog.path;
            return result;
        }, {});
        console.log(blogMap["PackageManagment"]);
    }


    
    render() {
        return (
            <div className="master blog">
            <h1 className="main_heading">Latest Posts</h1>
            <hr/>
            <div className="grid">
            <NavLink to={'/blog/package_management'}>
            <div className="blogs">
                <img src={software} alt="Tux Logo"/>
                <h1>Package Management on Linux Systems</h1>
                <div className="test">
                        <p>A package manager is a tool that deals with the process of installing, updating, upgrading, and removing computer programs in a consistent manner. Different flavours of Linux use different package management systems. This article introduces package management and several package mangers, as well as the benefits and drawbacks of each.</p>
                </div>
                </div>
            </NavLink>
                <div className="blogs">
                <img src={software} alt="Tux Logo"/>
                <h1>Getting Started with Raspberry PI</h1>
                <div className="test">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                </div>

                <div className="blogs">
                <img src={software} alt="Tux Logo"/>
                <h1>Brian Metabolism through fMRI</h1>
                <div className="test">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                </div>
            </div>

            <h1 className="main_heading">Productivity</h1>
            <hr/>
            <div className="grid">
                <div className="blogs">
                <img src={software} alt="Tux Logo"/>
                <h1>Package Management on Linux Systems</h1>
                <div className="test">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                </div>

                <div className="blogs">
                <img src={software} alt="Tux Logo"/>
                <h1>Getting Started with Raspberry PI</h1>
                <div className="test">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                </div>

                <div className="blogs">
                <img src={software} alt="Tux Logo"/>
                <h1>Productivity & Design</h1>
                <div className="test">
                        <p>In today's fast-paced world, the secret to unparalleled productivity has been hiding in plain sight: design. As we unlocking the hidden link between design and productiviy.</p>
                </div>
                </div>


            </div>
            </div>

        )
    }
}

export default BlogMaster;
<a href="https://www.flaticon.com/free-icons/software-development" title="software development icons">Software development icons created by Freepik - Flaticon</a>
