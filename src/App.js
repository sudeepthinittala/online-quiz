import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import QuizInstructions from './components/quiz/QuizInstructions';
import Home from './components/Home';
import Play from './components/quiz/Play';
import QuizSummary from './components/quiz/QuizSummary';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <Route path="/online-quiz/home"  component={Home}/>
      <Route path="/online-quiz/play/instructions"  component={QuizInstructions}/>
      <Route path="/online-quiz/play/quiz" component={Play}/>
      <Route path="/online-quiz/play/quizSummary"  component={QuizSummary}/>
      <Route path="/online-quiz/login"  component={Login}/>
      <Route path="/online-quiz/register"  component={Register}/>
    </Router>
  );
}

export default App;
