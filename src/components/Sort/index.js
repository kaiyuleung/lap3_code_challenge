import React from 'react'
import { useDispatch } from 'react-redux';


export default function Sort() {

    const dispatch = useDispatch();

    function handleChange(e){
        e.preventDefault();
        dispatch({ type: 'SORT', payload: e.target.value })
    }

    return (
        <label> Sort by
            <select onChange={handleChange}>
                <option value="none">Name</option>
                <option value="created_at">{"Created (old-recent)"}</option>
                <option value="stargazers_count"> Stargazers count</option>
                <option value="watchers_count"> Watchers count</option>
            </select>
        </label>
    )
}
