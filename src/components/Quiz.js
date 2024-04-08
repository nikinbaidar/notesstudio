import  React from 'react';
import { SEO } from './Seo';
import { loadQuiz, loadMsg, quizQuestionImages as images } from '../dataLoader';
import { movetoTop, shuffleArray } from './utils';

class Quiz extends React.Component {

    constructor(props) {
        super(props);
        const questionSets = loadQuiz(props.name);
        const setAQuestionCount = questionSets.setA.length;
        const setBQuestionCount = questionSets.setB.length;
        const totalQuestions = setAQuestionCount + setBQuestionCount;
        const totalScore = (1 * setAQuestionCount) + (2 * setBQuestionCount);
        const quesPerPage = 20;
        const answerMap = Array.from({totalQuestions}, (_, i) => 
            `${i+1}`).reduce((acc, key) => ({ ...acc, [key]: null }), {});
        const memos = loadMsg();
        const indexPassed = Math.floor(Math.random()*(memos.pass.length));
        const indexFailed = Math.floor(Math.random()*(memos.fail.length));
        this.totalPages = (totalQuestions / quesPerPage);
        this.quesPerPage = quesPerPage;
        this.sAQCount = setAQuestionCount;
        this.sBQCount = setBQuestionCount;
        this.totalQuestions = totalQuestions;
        this.totalScore = totalScore;
        this.passMark = (0.5 * totalScore);
        this.memos = memos;
        this.indexPassed = indexPassed;
        this.indexFailed = indexFailed;
        this.state = {
            quizData: [...shuffleArray(questionSets.setA),
                ...shuffleArray(questionSets.setB)],
            currentPage: 1,
            start: 0,
            end: this.quesPerPage,
            selOpts: answerMap,
            explainedQuestions: answerMap,
            totalAnswered: 0,
            unanswered: Array.from({length: totalQuestions}, (_, i) => i+1),
            submitted: false,
            score: 0,
            animate: true,
        }
    }

    componentDidMount() {
        if(typeof window?.MathJax !== "undefined"){
            window.MathJax.typesetClear();
            window.MathJax.typeset();
        }
    }; 

    componentDidUpdate(prevProps, prevState) {

        if (this.props.name !== prevProps.name) {
            const newQuestionSet = loadQuiz(this.props.name);
            const newQuizData = [...(newQuestionSet.setA),
                ...(newQuestionSet.setB)];
            const totalQuestions = 80;
            const newAnswerMap = Array.from({totalQuestions}, (_, i) => 
                `${i+1}`).reduce((acc, key) => ({ ...acc, [key]: null }), {});
            this.setState({
                quizData: newQuizData,
                currentPage: 1,
                start: 0,
                end: this.quesPerPage,
                selOpts: newAnswerMap,
                explainedQuestions: newAnswerMap,
                totalAnswered: 0,
                unanswered: Array.from({length: totalQuestions}, (_, i) => i+1),
                submitted: false,
                score: 0,
                animate: true,
            })
            movetoTop();
            const popup = document.getElementById('popup');
            popup.classList.remove("show");
        }

        if ( this.state.currentPage !== prevState.currentPage ) {
            window.MathJax.typesetClear();
            window.MathJax.typeset();
        }

    }

    renderQues = (question, questionNumber) => {

        const {
            currentPage,
            submitted,
            selOpts,
            explainedQuestions
        } = this.state;
        const questionKey = (questionNumber + 1) 
            + ( (currentPage - 1) * this.quesPerPage );
        const hasFigure = (question.fig !== undefined);
        const explained = (explainedQuestions[questionKey] === true);
        const correctAnswer = question.options[question.ansKey];
        const x = ["a.", "b.", "c.", "d."];

        return (
            <React.Fragment key={questionKey}>
                <li className="questions">{
                    question.name || <span dangerouslySetInnerHTML={{
                        __html: question.namehtml }} />
                }</li>
                { hasFigure && <img className="figure"
                    src={images[question.fig]} alt={question.fig}/> 
                }
                <form className="optionGroup">
                <ol className="choices">
                {question.options.map((choice, index) => {
                    const choiceId = `${currentPage}${questionNumber}${index}`;
                    const isChecked = selOpts[questionKey] === choiceId;
                    const isCorrect = choice === correctAnswer;
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
                        <div id="answers">
                            <input 
                                type="radio" 
                                name={question.name} 
                                id={choiceId}
                                value={choice}
                                checked={isChecked}
                                onChange={(event) => this.handleRadioChange(event,
                                    questionKey, correctAnswer, question.points)}
                                disabled={submitted}
                            />
                            <label htmlFor={choiceId}>
                            <span style={{marginRight: '5px' }}>
                            {x[index]}
                            </span>
                            <span>{choice}
                            {submitted && isChecked && <Feedback />}</span>
                            </label>
                        </div>
                        </li>
                    );
                })}
                </ol>
                </form>
                {
                    submitted &&
                        <button className="buttons expand" type="submit"
                        onClick={
                            (event) => this.showExplanation(event, questionKey)
                        }>
                        Explanation
                        </button> 
                }
                {
                    (explained && 
                        <p className="explanation">
                        <strong>Explanation: </strong>
                        {question.hint || <span dangerouslySetInnerHTML={{ __html: question.hinthtml }} />
                        }
                        </p> 
                    )
                } 
            </React.Fragment>
        );
    };

    handleRadioChange = (event, questionKey, correctAnswer, points) => {
        const { selOpts, totalAnswered, score, unanswered } = this.state;
        const selectedValue = event.target.id;
        const selectedValueContent = event.target.value;
        const isCorrect = (selectedValueContent === correctAnswer);
        const hasAnswer = selOpts.questionKey !== undefined;
        const updateSelectedOptions = {
            ...selOpts,
            [questionKey]: selectedValue
        };
        const updatedAnsweredCount = hasAnswer 
            ? totalAnswered 
            : totalAnswered + 1;
        const updatedScore = isCorrect ? score + points : score;
        const updatedUnanswered = unanswered.filter(
            qNum => qNum !== questionKey
        );

        this.setState({
            selOpts: updateSelectedOptions,
            totalAnswered: updatedAnsweredCount,
            score: updatedScore,
            unanswered: updatedUnanswered,
        });
        localStorage.setItem(`myRadioValue-${questionKey}`, selectedValue);

    };

    showUnanswered = () => {
        const popup = document.getElementById('popup');
        popup.classList.toggle("show");
    };

    onAnimationEnd = () => {
        this.setState({ animate: false})
    }


    displayNext = () => {
        const { currentPage, end } = this.state;
        if (currentPage < this.totalPages) {
            this.setState({
                currentPage: currentPage + 1,
                start: end,
                end: end + this.quesPerPage,
            }, () => { movetoTop() });
        }
        else {
            alert("That's all folks! You've reached the end of the road.");
        }
    };

    displayPrevious = () => {
        const { currentPage, start } = this.state;
        if (currentPage > 1) {
            this.setState({
                currentPage: currentPage - 1,
                start: start - this.quesPerPage,
                end: start,
            }, () => { movetoTop() });
        }
        else {
            alert(`You're at the start of the road, my friend. There's no going back from here!`);
        }
    };

    handleSubmit = () => {
        const { submitted } = this.state;
        if (!submitted) {
            this.setState({
                submitted: true,
                currentPage: 1,
                start: 0,
                end: this.quesPerPage,
            }, () => { movetoTop() });
        }
        else
        {
            alert("Awkward! Reload and try again?")
        }
    }

    showExplanation = (event, questionKey) => {
        const { explainedQuestions, currentPage } = this.state;
        const updateExplainedQuestions = {
            ...explainedQuestions,
            [questionKey]: true
        };
        this.setState({ explainedQuestions: updateExplainedQuestions });

        const button = document.getElementsByClassName('expand');
        const index = (questionKey-1) - ( (currentPage-1) * this.quesPerPage );
        button[index].classList.add("expanded");
    }

    render() {
        const {
            quizData,
            start,
            end,
            currentPage,
            submitted,
            score,
            unanswered,
            animate,
        } = this.state;
        const questions = quizData.slice(start, end).map(this.renderQues);
        const set = (currentPage <= this.sAQCount/this.quesPerPage) ? 'A':'B';
        const marksDistribution = (set === 'A')
            ? `1 x ${this.sAQCount} = ${this.sAQCount}` 
            : `2 x ${this.sBQCount} = ${2 * this.sBQCount}` 
        return (
            <>
                <SEO 
                    title={this.props.title}
                    name="Biomedical License"
                    description={this.props.title}
                    type="article" 
                />
                <h1>{this.props.heading}</h1>
                {
                    submitted && 
                    <div id="result">
                        <span id="score">Your score: {`${(score/this.totalScore*100).toFixed(2)}%`}</span>
                        <span className={score >= this.passMark ? 'pass' : 'fail'}>
                            {score >= this.passMark ? this.memos.pass[this.indexPassed] 
                                : this.memos.fail[this.indexFailed]}</span>
                    </div>
                }
                <h3 id="set">
                    <span>Group {set}</span>
                    <span>({marksDistribution})</span>
                </h3>
                <ol start={start + 1} id="questions">{questions}</ol>
                <hr style={{marginTop: "5rem"}}/>
                <div id="buttons">
                    <button id="next" className="buttons" type="submit"
                    onClick={this.displayNext}>Next</button>
                    <button id="previous" className="buttons" type="submit" 
                    onClick={this.displayPrevious}>Previous</button>
                </div>
                <hr/>
                <h4>Answered: {this.totalQuestions - unanswered.length} / {this.totalQuestions}</h4>
                <div>
                    <button id="viewUnanswered" type="submit"
                        onClick={this.showUnanswered}>{`See what's unanswered`}
                    </button>
                    <div id="popup">
                        <ul className={`comma-list ${animate ? 'animate' :
                                null}`} onAnimationEnd={this.onAnimationEnd}>
                        {
                            unanswered.map(item => {
                                const key = crypto.randomUUID();
                                return (<li key={key}>{item}</li>);
                            })
                        }
                        </ul>
                    </div>
                </div>
                <button id="submit" className="buttons" type="submit"
                onClick={this.handleSubmit}>Submit</button>
            </>
        );
    };
};


export default Quiz;
