import React, { useState } from "react";
import axios from "axios";
import Exercises from "./available-exercises";

function ExercisesList() {
    const [exercises, setExercises] = useState([]);


    axios.get('http://localhost:5000/Exercises/')
    .then(function (response) {
        setExercises(response.data);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        
    });

    function deleteExercise(id) {
        axios.delete(`http://localhost:5000/Exercises/${id}`)
        .then(function (response) {
            console.log(response.data);
        })

        setExercises(exercises.filter(el => el._id !== id))
    }

    function exercisesList() {
        return exercises.map(currentexercise => {
            return (<Exercises key={currentexercise._id} exercise={currentexercise} Deleteexercise={deleteExercise} />)
        })
    }

    return (
        <div>
            <h1>Logged Exercises</h1>
            <table className="table table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Username</th>
                        <th scope="col">Description</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Date</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { exercisesList() }
                </tbody>
            </table>
        </div>
    );
}

export default ExercisesList;