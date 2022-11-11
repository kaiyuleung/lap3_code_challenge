import React from 'react'
import './style.css'

export default function RepoItem({ Name, URL, onClick }) {
    return (
        <div className='repo-item' onClick={onClick}>{Name}
            <a href={URL}>&#x27A4;</a>
        </div>
    )
}
