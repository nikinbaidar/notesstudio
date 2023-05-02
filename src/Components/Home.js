import  React from 'react';
import { SEO } from './seo';

import { loadCurriculum } from '../dataLoader'

class Semesters extends React.Component {

    constructor() {
        super()
        this.handleSelection = this.handleSelection.bind(this);
    }

    semesterSubjects = loadCurriculum().map(({semester, subjects}) => {
        return subjects.map(({name}) => name);
    });

    handleClick = (event) => {
        alert("You've just clicked " + event.target.textContent);
    }

    handleSelection = (event) => {
        let gridItems = document.querySelectorAll('.options p'); 
        let currentSemester = event.target.value;
        console.log(this.state.x);
        for (let i=0; i<gridItems.length; i++)
            gridItems[i].innerHTML = "Subject: " 
                + this.semesterSubjects[currentSemester][i];
    }

    semesters = loadCurriculum().map((item, index) => {
        const elem = {
            id: crypto.randomUUID(),
            label: item.semester
        };
        return <option key={elem.id} value={index}>{elem.label}</option>;
    });

    subjectsGrid = this.semesterSubjects[0].map((item, index) => {
        const props = {
            id: crypto.randomUUID(),
            label: item,
        };

        return (
            <div className="options" key={props.id} 
            onClick={this.handleClick}> 
            <p>Subject: {props.label}</p>
            </div>
        );
    })

    selectSem = (
        <>
        <p>Semester:</p>
        <select onChange={this.handleSelection} id="semesters">
        {this.semesters}
        </select>
        </>
    )

    render() {
        return(
            <>
            <SEO title="Semesters" name="Biomedical Engineering" type="article"
            description="biomedical engineering, nepal engineering council" />
            <div className="dropdown">{this.selectSem}</div>
            <div className="grid-container">{this.subjectsGrid}</div>
            </>
        );
    }
}

export default Semesters;
