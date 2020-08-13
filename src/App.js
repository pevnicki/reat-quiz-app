import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import Layout from "./hos/Layout/Lyaout";
import Quiz from "./containers/Quiz/Quiz";
import QuzList from "./containers/QuizList/QuizList";
import Auth from "./containers/Auth/Auth";
import QuizCreator from "./containers/QuizCreator/QuizCreator";



class App extends Component {


    render() {
        return (
            <Layout>
                <Switch>
                    <Route path='/auth' component={Auth}/>
                    <Route path='/quiz-creator' component={QuizCreator}/>
                    <Route path='/quiz/:id' component={Quiz}/>
                    <Route path='/' component={QuzList}/>
                </Switch>
            </Layout>
        );
    }
}

export default App;
