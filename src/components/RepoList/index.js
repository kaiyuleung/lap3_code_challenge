import React from 'react'
import RepoItem from '../RepoItem'

export default function RepoList() {
    return (
        <div>
            {/* Fetch from api, map and render each RepoItem */}
            <RepoItem Name={"authCodealong"} URL={"https://github.com/Crowy92/authCodealong/"}/>
        </div>
    )
}
