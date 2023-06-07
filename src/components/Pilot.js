import React from 'react';
import { NavLink } from "react-router-dom";
import { boardPilot } from '../dataLoader';
import * as utils from './utils'

class Pilot extends React.Component {

    constructor(props) { 
        super(props);
        const pageHeadings = boardPilot(props.page);
        this.state = {
            pageHeadings : pageHeadings,
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.page !== this.props.page) {
            const newPageHeadings = boardPilot(this.props.page);
            this.setState({
                pageHeadings: newPageHeadings,
            });
        }
    }; 

    handleClick(event) {
        utils.movetoTop();
        utils.collapseHamburgerMenu();
    }

    render() {
        const chapters = this.state.pageHeadings.map((item) => {
            const elem = {
                id: crypto.randomUUID(),
                label: item.chapter,
                lessons: item.lessons.map((lesson) => {
                    const lessonId = crypto.randomUUID();
                    return (
                        <li key={lessonId}>
                        <NavLink to={lesson.path} onClick={this.handleClick}>
                        {(lesson.title).toLowerCase()}
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

export default Pilot;
