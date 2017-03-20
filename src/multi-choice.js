import React from 'react';
import ReactDOM from 'react-dom';
import './multi-choice.less';

export default class MultiChoiceEnthraler {
    constructor(environment) {
        this.container = environment.container;
        this.environment = environment;
    }

    render(authorData) {
        ReactDOM.render(
            <MultiChoiceQuestion data={authorData} requestHeightChange={this.environment.requestHeightChange} />,
            this.container
        );
    }

}

class MultiChoiceQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenAnswer: null
        }
    }

    render() {
        var data = this.props.data,
            chosenAnswer = this.state.chosenAnswer,
            showFeedback = chosenAnswer !== null;

        if (data.randomize) {
            // TODO: shuffle the array.
        }

        console.log(this.state.chosenAnswer);

        return <div className="multi-choice-question">
            <p className="question">{data.question}</p>
            {data.clarification &&
                <p className="clarification">{data.clarification}</p>
            }
            <ul className="answers">
                {data.answers.map((answer, i) => <Answer
                    number={i + 1}
                    answer={answer}
                    onChoose={() => this.setState({
                        chosenAnswer: answer
                    })}
                    isChosenAnswer={answer===chosenAnswer}
                    showFeedback={showFeedback}
                />)}
            </ul>
            {data.generalFollowUp && showFeedback &&
                <p className="general-follow-up">{data.generalFollowUp}</p>
            }
        </div>
    }

    componentDidUpdate() {
        this.props.requestHeightChange();
    }

    componentDidMount() {
        this.props.requestHeightChange();
    }
}

class Answer extends React.Component {
    render() {
        var label = this.props.number,
            answer = this.props.answer,
            isChosenAnswer = this.props.isChosenAnswer,
            classes = [];
        if (isChosenAnswer) {
            classes.push('selected');
        }
        if (this.props.showFeedback) {
            classes.push(answer.correct ? 'correct' : 'incorrect');
        }
        if (this.props.showFeedback) {
            label = answer.correct ? "✔" : "✘";
        }
        return <li className={classes.join(" ")}>
            <span className="label">{label}</span>
            <p className="answer" onClick={this.props.onChoose}>
                {answer.answer}
            </p>
            {this.props.showFeedback && answer.specificFollowUp && isChosenAnswer &&
                <p className="specific-follow-up">{answer.specificFollowUp}</p>
            }
        </li>
    }
}
