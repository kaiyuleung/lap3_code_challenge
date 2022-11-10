import React from 'react'
import RepoItem from '../RepoItem'

export default function RepoList({results}) {
    return (
        <div style={{color: "white"}}>
            { results.map(r => <RepoItem key={r.id} Name={r.name} URL={r.html_url}/>) }
        </div>
    )
}
