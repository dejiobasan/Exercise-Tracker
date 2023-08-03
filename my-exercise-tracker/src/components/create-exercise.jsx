import React, { useState } from "react";

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
        window.location = "/";
    }

    return (
        <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col">
                <input name="username" value={user.username} onChange={handleChange} type="text" className="form-control" placeholder="Username" />
            </div>
            <div className="col">
                <input name="description" value={user.description} onChange={handleChange} type="text" className="form-control" placeholder="Exercise description" />
            </div>
            <div className="col">
                <input name="duration" value={user.duration} onChange={handleChange} type="number" className="form-control" placeholder="duration" />
            </div>
            <div className="col-12">
            <button type="submit" className="btn btn-dark">Submit</button>
            </div>
        </form>
    );
}

export default CreateExercise;