import React, { useState } from 'react'

export default function Dashboard({user}) {
    return (
        <div>
            <div>
                <h2>{user}'s Dashboard</h2>
                <p>Not {user}? <a>Search for a different GitHub account</a></p>
            </div>
        </div>
    )
}
