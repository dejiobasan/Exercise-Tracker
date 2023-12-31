import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./navbar";
import ExercisesList from "./exercises-list";
import EditExercise from "./edit-exercise";
import CreateExercise from "./create-exercise";
import CreateUser from "./create-user"

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Routes>
          <Route path="/" element={ <ExercisesList />} />
          <Route path="/edit/:id" element={ <EditExercise />} />
          <Route path="/create" element={ <CreateExercise />} />
          <Route path="/user" element={ <CreateUser/> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
