import React from "react";
import AnswersList from "./AnswersList/AnswersList";
import classes from './ActicveQuiz.css'

const ActiveQuiz = props => (

    <div className={classes.ActiveQuiz}>
        <p className={classes.Question}>
            <span>
                <strong>1. </strong>&nbsp;
                {props.question}
            </span>
            <small>{props.answerNumber} from {props.quizLength}</small>
        </p>
        <AnswersList
            state={props.state}
            answers={props.answers}
            onAnswerClick={props.onAnswerClick}
        />

    </div>

)

export default ActiveQuiz

