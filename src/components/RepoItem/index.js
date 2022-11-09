import React from 'react'
import './style.css'

export default function RepoItem({ Name, URL }) {
    return (
        <div className='repo-item'>{Name}
            <a href={URL}>⋮</a>
        </div>
    )
}
