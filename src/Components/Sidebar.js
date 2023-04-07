import React from 'react';

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
                        <a href={lesson.path}> {lesson.title}</a>
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
