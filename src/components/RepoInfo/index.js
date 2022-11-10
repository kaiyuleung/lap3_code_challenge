import React from 'react'

export default function RepoInfo({repo}) {
        return (
            <div style={{color: "white"}}>RepoInfo
                <p><a href={repo.html_url}>{repo.name}</a></p>
                <p>{repo.forks}</p>
                <p>{repo.stargazers_count}</p>
                <p>{repo.watchers_count}</p>
                <p>{repo.updated_at}</p>
                <p>{repo.created_at}</p>
            </div>
        )
}
