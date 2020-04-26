import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar.component.jsx';
import ExercisesList from './components/exercises-list.component.jsx';
import EditExercise from './components/edit-exercise.component.jsx';
import CreateExercise from './components/create-exercise.component.jsx';
import CreateUser from './components/create-user.component.jsx';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route exact path="/" component={ExercisesList}/>
        <Route path="/edit:id" component={EditExercise}/>
        <Route path="/create" component={CreateExercise}/>
        <Route path="/user" component={CreateUser}/>
      </div>
    </Router>

  );
}

export default App;
