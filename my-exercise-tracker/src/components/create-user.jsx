import React, { useState } from "react";
import axios from "axios";

function CreateUser() {

    const [newUser, setNewUser] = useState({
        username: ""
    });

    function handleChange(event) {
        const { value, name } = event.target;
        setNewUser((prevState)=> ({...prevState,[name]:value})); 
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(newUser);
        axios.post("http://localhost:5000/Users/add", newUser)
            .then(res => console.log(res.data));
        setNewUser({
            username: ""
        });
    }

    return (
        <div>
            <h4>Create New User </h4>
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label">Username: </label>
                    <input name="username" value={newUser.username} onChange={handleChange} type="text" className="form-control" placeholder="Username" />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-dark">Create User</button>
                </div>
            </form>
        </div>
    );
}

export default CreateUser;