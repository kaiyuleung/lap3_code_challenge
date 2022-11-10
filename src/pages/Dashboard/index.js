//! not ready for review
import React, { useState } from 'react'
import { BackBtn } from '../../components'

export default function Dashboard({user}) {
    return (
        <div >
            <BackBtn />
            <div>
                <h2>{user}'s Dashboard</h2>
                <p>Not {user}? <a href='#'>Search for a different GitHub account</a></p>
            </div>
        </div>
    )
}
