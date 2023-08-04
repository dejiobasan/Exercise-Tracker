import React, { useState } from "react";

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
        setNewUser({
            username: ""
        });
    }

    return (
        <div>
            <h4>Create a Username </h4>
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label">Username: </label>
                    <input name="username" value={newUser.username} onChange={handleChange} type="text" className="form-control" placeholder="Username" />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-dark">Create Username</button>
                </div>
            </form>
        </div>
    );
}

export default CreateUser;