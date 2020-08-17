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
      <Route path="/online-quiz"  component={Home}/>
      <Route path="/play/instructions"  component={QuizInstructions}/>
      <Route path="/play/quiz" component={Play}/>
      <Route path="/play/quizSummary"  component={QuizSummary}/>
      <Route path="/login"  component={Login}/>
      <Route path="/register"  component={Register}/>
    </Router>
  );
}

export default App;
