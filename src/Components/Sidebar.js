import React from 'react';

import { loadSideBar } from '../dataLoader';

let previousChapter;

class Sidebar extends React.Component {
    handleClick = (event, item) => {
        this.props.onItemSelected(item);
        if (previousChapter){
            previousChapter.style.textDecoration = "none";
        }
        const chapter = event.target.parentNode.previousSibling;
        chapter.style.textDecoration = "underline";
        previousChapter = chapter;
    } 

    chapters = loadSideBar().map((item) => {
        const elem = {
            id: crypto.randomUUID(),
            label: item.chapter,
            lessons: item.lessons.map((lesson) => {
                const lessonId = crypto.randomUUID();
                
                return (
                    <li key={lessonId} onClick={
                        (event) => this.handleClick(event, lesson.title)
                    }><a href={lesson.path}>{lesson.title}</a></li>
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

    render() {
        return(
            <div id="leftsidebar">
            <ul className="headings">{this.chapters}</ul>
            </div>
        );
    }
}

export default Sidebar;
