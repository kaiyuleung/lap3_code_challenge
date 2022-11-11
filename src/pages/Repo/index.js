import React from 'react'
import { useSelector } from 'react-redux';
import { BackBtn, Logo, RepoInfo, Breadcrumb } from '../../components'

import './style.css'

export default function Repo({repo}) {
    const username = useSelector(state => state.username);

    return (
        <div className='repo'>
            <Logo isHome={false} />
            <BackBtn />
            <Breadcrumb Name={username} URL={`https://github.com/${username}/`} />
            <RepoInfo repo={repo} />
        </div>
    )
}
