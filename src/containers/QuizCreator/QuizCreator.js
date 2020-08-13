import React, {Component} from 'react';
import classes from './QuizCreator.css'
import Button from "../../components/UI/Button/Button";


class QuizCreator extends Component {

    state = {
        quiz: [],
        formControls:{
            question:'',
            option1:'',
            option2:'',
            option3:'',
            option4:''
        }

    }

    submitHandler = event => {

        event.preventDefault();
    }

    addQuestionHandler = () => {

    }
    createQuizHandler = () => {

    }

    render() {
        return (
            <div className={classes.QuizCreator}>

                <div>
                    <h1>Quiz creator</h1>
                    <form onSubmit={this.submitHandler}>

                        <input type="text"/>
                        <hr/>
                        <input type="text"/>
                        <input type="text"/>
                        <input type="text"/>
                        <input type="text"/>
                        <select></select>
                        <Button
                            type='primary'
                            onClick={this.addQuestionHandler}
                        >Add Question</Button>
                        <Button
                            type='success'
                            onClick={this.createQuizHandler}
                        >Create test</Button>
                    </form>
                </div>

            </div>
        );
    }
}

export default QuizCreator
