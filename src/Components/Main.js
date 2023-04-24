import  React from 'react';
import { SEO } from './seo';

import { loadCurriculum, loadQuiz } from '../dataLoader'

export class Quiz extends React.Component {

    constructor(props) {
        super(props);
        const totalQuestions = 10;
        const selectedOptions = Array.from({totalQuestions}, (_, i) => 
            `question${i+1}`).reduce((acc, key) => ({ ...acc, [key]: null }), {});
        this.correctValues = [];
        this.quizData = loadQuiz();
        this.numberOfQuestionsPerPage = 5;
        this.state = {
            currentPage: -1,
            start: 0,
            end: 0,
            selectedOptions: selectedOptions,
            totalQuestions: totalQuestions,
            totalAnswered: 0,

        }
    }

    componentDidMount() {
        this.quizData.forEach((item) => {
            const correctAnswer = item.options[item.correctAnswerIndex];
            this.correctValues.push(correctAnswer);
        });
        this.displayNext();
    }

    componentWillUnmount() {
        this.correctValues.length = 0;
    }; 

    handleRadioChange = (event, question) => {
        const selectedValue = event.target.id;
        const { selectedOptions, totalAnswered } = this.state;
        const updateSelectedOptions = {
            ...selectedOptions,
            [question]: selectedValue
        };
        const isAnswered = selectedOptions[question] !== undefined;
        const updatedAnsweredCount = isAnswered ? totalAnswered : totalAnswered + 1;

        this.setState({
            selectedOptions: updateSelectedOptions,
            totalAnswered: updatedAnsweredCount
        });

        localStorage.setItem(`myRadioValue-${question}`, selectedValue);
    };

    displayNext = () => {
        if(this.state.currentPage < 1) {
            this.setState({
                currentPage: this.state.currentPage + 1,
                start: this.state.end,
                end: this.state.start + this.state.end + this.numberOfQuestionsPerPage,
            })
        }
        else {
            alert("EON");
        }
    }

    displayPrevious= () => {
        if(this.state.currentPage > 0) {
            this.setState({
                currentPage: this.state.currentPage - 1,
                start: this.state.start - this.numberOfQuestionsPerPage,
                end: this.state.start,
            })
        }
        else {
            alert("EOP")
        }
    }

    handleSubmission = () => {
        const tick = `&#x2714;`; const cross = `&#x2716;`;
        const allForms = document.getElementsByClassName("optionGroup");

        for(let i = 0 ; i < allForms.length; i++) {
            const selected = allForms[i].querySelector(
                "input[type='radio']:checked"
            );
            if (selected) {
                const feedbackElement = document.createElement("span");
                if(selected.value === this.correctValues[i]) {
                    feedbackElement.className = "tick";
                    feedbackElement.innerHTML = tick;
                }
                else {
                    feedbackElement.className = "cross";
                    feedbackElement.innerHTML = cross;
                }
                selected.parentNode.appendChild(feedbackElement);
            } 
        }

        document.querySelectorAll('li.correct').forEach(answer => {
            answer.style.color = "blue";
            answer.style.fontWeight = "bold";
        });
    }

    render() {

        const questions = this.quizData.slice(this.state.start,
            this.state.end).map((item, qindex) => {
                const elem = {
                    id: crypto.randomUUID(),
                    question: item.question,
                    options: item.options.map((choice, aindex) => {
                        const choiceId = (this.state.currentPage).toString() + (qindex).toString() + aindex.toString();
                        const correctAnswer = item.options[item.correctAnswerIndex];
                        const isCorrect = (choice === correctAnswer);
                        const className =  isCorrect ? "correct" : "";
                        const qtag = "question" + (1 + (this.state.currentPage
                                * this.numberOfQuestionsPerPage) + qindex)
                        return (
                            <li key={choiceId} className={className}>
                            <input 
                                type="radio" 
                                name={item.question} 
                                id={choiceId}
                                value={choice}
                                checked={this.state.selectedOptions[qtag] === choiceId}
                                onChange={ 
                                    (event) => this.handleRadioChange(event, qtag) }
                            />
                            <label htmlFor={choiceId}>
                            <span>{choice}</span></label>
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
            <ol start={this.state.start + 1}>{questions}</ol>
            <div id="buttons">
                <button id="previous" type="submit" 
                onClick={this.displayPrevious}>Previous</button>
                <button id="next" type="submit" 
                onClick={this.displayNext}>Next</button>
                <button id="submit" type="submit" 
                onClick={this.handleSubmission}>Submit</button>
            </div>
            <h4>Answered: {this.state.totalAnswered} / {this.state.totalQuestions}</h4>
            </>
        )
    };
}







export class Semesters extends React.Component {

    constructor(props) {
        super(props)
        this.state = { x: '0' };
        this.handleSelection = this.handleSelection.bind(this);
    }

    componentDidMount() {
        console.log(this.state.x);
    }; 

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
