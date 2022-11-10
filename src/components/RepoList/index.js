import React from 'react'
import RepoItem from '../RepoItem'

export default function RepoList({results, setRepo}) {

    const handleClick = (key) => {
        setRepo(prev => prev = results.filter(r => r.id === key)[0])
    };

    return (
        <div style={{color: "white"}}>
            { results.map(r => <RepoItem key={r.id} Name={r.name} URL={r.html_url} onClick={() => handleClick(r.id)}/>) }
        </div>
    )
}
