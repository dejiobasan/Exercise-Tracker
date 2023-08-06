import React from "react";
import { Link } from "react-router-dom";

function Exercises(props) {
    return(
        <tr>
            <td>{props.exercise.Username}</td>
            <td>{props.exercise.Description}</td>
            <td>{props.exercise.Duration}</td>
            <td>{props.exercise.Date.substring(0,10)}</td>
            <td>
                <Link to={"/edit/"+props.exercise._id}>edit</Link> | <button type="button" className="btn btn-dark" onClick={ props.Deleteexercise(props.exercise._id) }>Delete</button>
            </td>
        </tr>
    )
}

export default Exercises;