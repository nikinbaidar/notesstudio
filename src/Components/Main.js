import  React from 'react';
import { SEO } from './seo';

import { loadCurriculum, loadQuiz } from '../dataLoader'

export class Semesters extends React.Component {
    semesterSubjects = loadCurriculum().map(({semester, subjects}) => {
        return subjects.map(({name}) => name);
    });

    handleClick = (event) => {
        alert("You've just clicked " + event.target.textContent);
    }

    handleSelection = (event) => {
        let gridItems = document.querySelectorAll('.options p'); 
        let currentSemester = event.target.value;
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
            <SEO title="Semesters" description="Biomedical Engineering"
                name="Biomedical Engineering" type="article"/>
            <div className="dropdown">{this.selectSem}</div>
            <div className="grid-container">{this.subjectsGrid}</div>
            </>
        );
    }
}

export class Quiz extends React.Component {

    submitAllForms() {
        const allForms = document.getElementsByClassName("myForms");
        const selectedValues = [];
        console.log(allForms.length, typeof(allForms));
        console.log(allForms);
        for(let i = 0 ; i < allForms.length; i++) {
            const selected = allForms[i].querySelector("input[type='radio']:checked");
				if (selected) {
					selectedValues.push(selected.value);
				} else {
					selectedValues.push(null);
				}
            allForms[i].submit()
        }
        console.log(selectedValues);

    }

    handleSubmit() {
        console.log("This has been submitted!");
    }

    render() {

        const questions = loadQuiz().map((item) => {
            const elem = {
                id: crypto.randomUUID(),
                question: item.question,
                options: item.options.map((choice) => {
                    const choiceId = crypto.randomUUID();
                    return (
                        <li key={choiceId}>
                        <input 
                            type="radio" 
                            name={item.question} 
                            id={choice}
                            value={choice}
                        />
                        <label htmlFor={choice}>{choice}</label>
                        </li>
                    )
                })
            };

            return (
                <React.Fragment key={elem.id}>
                    <li className="questions">{elem.question}</li>
                    <form className="myForms">
                    <ol className="choices">{elem.options}</ol>
                    </form>
                </React.Fragment>
            );
        })
        return (
            <>
            <SEO title="NEC Exam 2079" name="Biomedical License"
            description="Nepal Engineering Council Exam for Biomedical
            Engineering 2079" type="article" />
            <h1>Welcome to the Quiz!</h1>
            <ol>{questions}</ol>
            <button type="submit" onClick={this.submitAllForms}>Submit</button>
            </>
        )
    };
}
