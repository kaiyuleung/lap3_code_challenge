import React, {useState} from "react";
import { useSelector } from "react-redux";
import './style.css';

export default function Form({getResult}) {

    const [ username, setUsername ] = useState("example")
    const error = useSelector(state => state.error);

    const handleSubmit = (e) => {
        e.preventDefault();
        try{
            getResult(username);
            setUsername("");
        } catch (err) {
            console.log(err);
            alert("user not found")
        }
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
            {error? <p>user not found</p> : <></>}
            <input type="submit" value="Submit" />
        </form>
    );
}


