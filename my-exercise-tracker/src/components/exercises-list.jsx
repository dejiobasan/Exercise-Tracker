import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const Exercise = props => {
    <tr>
        <td>{props.Username}</td>
        <td>{props.Description}</td>
        <td>{props.Duration}</td>
        <td>{props.Date}</td>
        <td>
            <Link to={"/edit/"+props._id}>edit</Link> | <button className="btn btn-dark" onClick={ props.Deleteexercise(props._id) }>Delete</button>
        </td>
    </tr>
}

function ExercisesList() {
    const [exercises, setExercises] = useState([]);

    axios.get("http://localhost:5000/Exercises/")
        .then(res => {
            setExercises(res.data)
        })
        .catch((error) => {
            console.log('Error:'+ error);
        })

    function deleteExercise(id) {
        axios.delete("http://localhost:5000/Exercises/"+id)
            .then(res => console.log(res.data))
            setExercises(exercises.filter(exercise => exercise._id !== id))
    }

    function exercisesList() {
        return exercises.map(currentexercise => {
            return <Exercise exercise={currentexercise} Deleteexercise={deleteExercise} key={currentexercise._id} />
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