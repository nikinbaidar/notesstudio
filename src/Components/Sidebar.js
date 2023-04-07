import React from 'react';
import { NavLink } from "react-router-dom";

import { loadSideBar } from '../dataLoader';

class Sidebar extends React.Component {

    render() {
        const chapters = loadSideBar().map((item) => {
            const elem = {
                id: crypto.randomUUID(),
                label: item.chapter,
                lessons: item.lessons.map((lesson) => {
                    const lessonId = crypto.randomUUID();
                    return (
                        <li key={lessonId}>
                        <NavLink to={lesson.path} style={({ isActive }) => ({
                        textDecoration: isActive ? 'underline' : 'none' })}>
                        {lesson.title}
                        </NavLink>
                        </li>
                    );
                })
            };
            return (
                <React.Fragment key={elem.id}>
                    <li className="topics">{elem.label}</li>
                    <ul className="subtopics">{elem.lessons}</ul>
                </React.Fragment>
            )
        });
        return(
            <div id="leftsidebar">
                <ul className="headings">{chapters}</ul>
            </div>
        );
    }
}

export default Sidebar;
