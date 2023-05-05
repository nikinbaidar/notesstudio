import  React from 'react';

import { SEO } from './seo';

import { loadQuiz } from '../dataLoader'

import Images from './images';

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return array;
}

class Quiz extends React.Component {

    constructor(props) {
        super(props);
        const quizData = (loadQuiz(props.name));
        const totalQuestions = quizData.length;
        const questionsPerPage = 20;
        const selectedOptions = Array.from({totalQuestions}, (_, i) => 
            `${i+1}`).reduce((acc, key) => ({ ...acc, [key]: null }), {});
        this.quizData = quizData;
        this.totalPages = (totalQuestions / questionsPerPage);
        this.questionsPerPage = questionsPerPage;
        this.state = {
            currentPage: 1,
            start: 0,
            end: this.questionsPerPage,
            selOpts: selectedOptions,
            explainedQuestions: selectedOptions,
            totalQuestions: totalQuestions,
            totalAnswered: 0,
            submitted: false,
        }
    }

    componentDidUpdate() {
        window.MathJax.typeset();
    }; 

    handleRadioChange = (event, questionKey) => {
        const selectedValue = event.target.id;
        const { selOpts, totalAnswered } = this.state;
        const updateSelectedOptions = {
            ...selOpts,
            [questionKey]: selectedValue
        };
        const isAnswered = selOpts[questionKey] !== undefined;
        const updatedAnsweredCount = isAnswered ? totalAnswered : totalAnswered + 1;

        this.setState({
            selOpts: updateSelectedOptions,
            totalAnswered: updatedAnsweredCount
        });

        localStorage.setItem(`myRadioValue-${questionKey}`, selectedValue);
    };

    displayNext = () => {
        const { currentPage, end } = this.state;
        if (currentPage < this.totalPages) {
            this.setState({
                currentPage: currentPage + 1,
                start: end,
                end: end + this.questionsPerPage,
            }, () => {
                setTimeout(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, 100)
            });
        }
        else {
            alert("EON");
        }
    };

    displayPrevious = () => {
        const { currentPage, start } = this.state;
        if (currentPage > 1) {
            this.setState({
                currentPage: currentPage - 1,
                start: start - this.questionsPerPage,
                end: start,
            }, () => {
                setTimeout(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, 100);
            });
        }
        else {
            alert("EOP");
        }
    };

    handleSubmit = () => {
        this.setState({
            submitted: true,
            currentPage: 1,
            start: 0,
            end: this.questionsPerPage,
        }, () => {
            setTimeout(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, 100);
        });
    }

    showExplanation = (event, questionKey) => {
        const { explainedQuestions, currentPage } = this.state;
        const updateExplainedQuestions = {
            ...explainedQuestions,
            [questionKey]: true
        };
        this.setState({ explainedQuestions: updateExplainedQuestions });

        const button = document.getElementsByClassName('expand');
        const index = questionKey - (this.questionsPerPage * currentPage) - 1 ;
        button[index].classList.add("expanded");
    }

    renderQuestion = (question, questionNumber) => {

        const { currentPage, submitted, selOpts, explainedQuestions } = this.state;
        const questionKey = (questionNumber + 1) 
            + (currentPage * this.questionsPerPage);
        const hasFigure = (question.fig !== undefined);
        const explained = (explainedQuestions[questionKey] === true);

        return (
            <React.Fragment key={questionKey}>
                <li className="questions"> {question.name} </li>
                { hasFigure && <img className="figure" src={Images[question.fig]} alt={question.fig}/> }
                <form className="optionGroup">
                <ol className="choices">
                {question.options.map((choice, index) => {
                    const choiceId = `${currentPage}${questionNumber}${index}`;
                    const isChecked = selOpts[questionKey] === choiceId;
                    const isCorrect = choice === question.options[question.ansKey];
                    const Feedback = () => {
                        const tick = '\u2714';
                        const cross = '\u2716';
                        const { feedback, feedbackSymbol } = isCorrect
                            ? { feedback: 'correct', feedbackSymbol: tick }
                            : { feedback: 'incorrect', feedbackSymbol: cross };
                        return (
                            <span className={`feedback ${feedback}`}>
                                {feedbackSymbol}</span>
                        );
                    }; 
                    return (
                        <li key={choiceId} className={(isCorrect && submitted) 
                            ? "submitted correct" : null}>
                        <input 
                            type="radio" 
                            name={question.name} 
                            id={choiceId}
                            value={choice}
                            checked={isChecked}
                            onChange={(event) => this.handleRadioChange(event, questionKey)}
                            disabled={submitted}
                        />
                        <label htmlFor={choiceId}><span>{choice}</span>
                            {submitted && isChecked && <Feedback />}</label>
                        </li>
                    );
                })}
                </ol>
                </form>
                {submitted && <button className="buttons expand" type="submit"
                    onClick={(event) => this.showExplanation(event,
                        questionKey)}>Explanation</button> }
                { explained && <p className="explanation"> 
                    <strong>Explanation: </strong>{question.hint}</p> } 
            </React.Fragment>
        );
    };

    render() {
        const {start, end, totalAnswered, totalQuestions } = this.state;
        const questions = this.quizData.slice(start, end).map(this.renderQuestion);
        const buttons = (
            <div id="buttons">
            <button id="next" className="buttons" type="submit"
            onClick={this.displayNext}>
            Next
            </button>
            <button id="previous" className="buttons" type="submit" onClick={this.displayPrevious}>
            Previous
            </button>
            <button id="submit" className="buttons" type="submit" onClick={this.handleSubmit}>
            Submit
            </button>
            </div>
        );

        return (
            <>
            <SEO 
            title={this.props.title}
            name="Biomedical License"
            description={this.props.title}
            type="article" 
            />
            <h1>{this.props.heading}</h1>
            <ol start={start + 1}>{questions}</ol>
{/* <hr style={{ display: 'block', height: '1px', border: '0', borderTop: '1px solid #ccc', margin: '1em 0', padding: '0' }} /> */}
<hr/>
            {buttons}
            <h4>Answered: {totalAnswered} / {totalQuestions}</h4>
            </>
        );
    };
};

export default Quiz;
