import React, {useState} from "react";
import './style.css';

export default function Form({getResult}) {

    const [ username, setUsername ] = useState("Crowy92")

    const handleSubmit = (e) => {
        e.preventDefault();
        getResult(username)
        setUsername("");
    }

    const handleChange = (e) => {
        setUsername(e.target.value);
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>GitHub username:
                <br />
                <input type="text" value={username} onChange={handleChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}


