import React from 'react';
import {BrowserRouter ,Route,Switch } from 'react-router-dom';
import QuizInstructions from './components/quiz/QuizInstructions';
import Home from './components/Home';
import Play from './components/quiz/Play';
import QuizSummary from './components/quiz/QuizSummary';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/online-quiz"  component={Home}/>
      <Route exact path="/play/instructions"  component={QuizInstructions}/>
      <Route exact path="/play/quiz" component={Play}/>
      <Route exact path="/play/quizSummary"  component={QuizSummary}/>
      <Route exact path="/login"  component={Login}/>
      <Route exact path="/register"  component={Register}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
