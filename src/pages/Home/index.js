import React from 'react'

export default function Home() {
    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <div>
            <h1>Welcome to GitHub Stalker</h1>
            <h2>Choose a GitHub user to <span style={{textDecoration: 'line-through'}}>stalk</span> follow</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    github.com/
                    <input type='text' placeholder='username' required autoFocus></input>
                    <input type='submit' value='Search'></input>
                </label>
            </form>
        </div>
    )
}
