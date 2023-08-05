import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";


function CreateExercise() {
    const [user, setUser] = useState({
        username: "",
        description: "",
        duration: "",
        date: new Date()
    });

    function handleChange(event) {
        const { value, name } = event.target;
        setUser((prevState)=> ({...prevState,[name]:value})); 
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(user);
        axios.post("http://localhost:5000/Exercises/add", user)
            .then(res => console.log(res.data));
        window.location = "/";
    }

    return (
        <div>
            <h3>Create a new Exercise Log</h3>
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label">Username: </label>
                    <input name="username" value={user.username} onChange={handleChange} type="text" className="form-control" placeholder="Username" />
                </div>
                <div className="form-group">
                    <label className="form-label">Exercise Description: </label>
                    <input name="description" value={user.description} onChange={handleChange} type="text" className="form-control" placeholder="Exercise description" />
                </div>
                <div className="form-group">
                    <label className="form-label">Duration: </label>
                    <input name="duration" value={user.duration} onChange={handleChange} type="number" className="form-control" placeholder="duration" />
                </div>
                <div className="form-group">
                    <label className="form-label">Date: </label>
                    <DatePicker selected={user.date} onchange={handleChange} />
                </div>
                <div className="form-group">
                <button type="submit" className="btn btn-dark">Create Exercise Log</button>
                </div>
            </form>
        </div>
        
    );
}

export default CreateExercise;