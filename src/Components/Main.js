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
            <SEO title="Semesters" name="Biomedical Engineering" type="article"
            description="biomedical engineering, nepal engineering council" />
            <div className="dropdown">{this.selectSem}</div>
            <div className="grid-container">{this.subjectsGrid}</div>
            </>
        );
    }
}

export class Quiz extends React.Component {

    constructor(props) {
        super(props);
        this.correctValues = [];
        this.quizData = loadQuiz();
    }

    componentDidMount() {
        this.quizData.forEach((item) => {
            const correctAnswer = item.options[item.correctAnswerIndex];
            this.correctValues.push(correctAnswer);
        });
    }

    componentWillUnmount() {
        this.correctValues.length = 0;
    }; 

    submitAllForms = () => {
        const tick = `&#x2714;`; const cross = `&#x2716;`;
        const allForms = document.getElementsByClassName("optionGroup");

        for(let i = 0 ; i < allForms.length; i++) {
            const selected = allForms[i].querySelector(
                "input[type='radio']:checked"
            );
            if (selected) {
                if(selected.value === this.correctValues[i]) {
                    selected.parentNode.innerHTML +=
                        '<span class="tick">' + tick + '</span>';
                }
                else {
                    selected.parentNode.innerHTML +=
                        '<span class="cross">' + cross + '</span>';
                }
            } 
        }

        document.querySelectorAll('li.correct').forEach(answer => {
            answer.style.color = "blue";
            answer.style.fontWeight = "bold";
        });

    }

    render() {

        const questions = this.quizData.map((item) => {

            const elem = {
                id: crypto.randomUUID(),
                question: item.question,
                options: item.options.map((choice) => {
                    const choiceId = crypto.randomUUID();
                    const correctAnswer = item.options[item.correctAnswerIndex];
                    const isCorrect = (choice === correctAnswer);
                    const className =  isCorrect ? "correct" : "";
                    return (
                        <li key={choiceId} className={className}>
                        <input 
                            type="radio" 
                            name={item.question} 
                            id={choiceId}
                            value={choice}
                        />
                        <label htmlFor={choiceId}><span>{choice}</span></label>
                        </li>
                    )
                })
            };

            return (
                <React.Fragment key={elem.id}>
                <li className="questions">{elem.question}</li>
                <form className="optionGroup">
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
            <button id="quiz2079" type="submit" onClick={this.submitAllForms}>
            Submit
            </button>
            </>
        )
    };
}
