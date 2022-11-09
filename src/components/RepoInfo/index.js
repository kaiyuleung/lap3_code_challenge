import React from 'react'

export default function RepoInfo({
    name = "example", 
    forks = 0, 
    stargazers_count = 0, 
    watchers_count = 0,
    updated_at = "now", 
    created_at = "now",
    html_url = "#"
}) {
        return (
            <div style={{color: "white"}}>RepoInfo
                <p><a href={html_url}>{name}</a></p>
                <p>{forks}</p>
                <p>{stargazers_count}</p>
                <p>{watchers_count}</p>
                <p>{updated_at}</p>
                <p>{created_at}</p>
            </div>
        )
}
