import React, { useState } from 'react'

//* components and styles
import { Form, UserStats, Logo, RepoList, RepoInfo } from '../../components'
import Breadcrumb from '../../components/Breadcrumb';
import './style.css';

//* redux thing
import { useSelector, useDispatch } from 'react-redux';
import { getResult } from '../../actions';


export default function Desktop() {

    //* state for repoInfo
    const [repo, setRepo] = useState({
        name: "example", 
        forks: 0, 
        stargazers_count: 0, 
        watchers_count: 0,
        updated_at: "now", 
        created_at: "now",
        html_url: "#"
    })

    //* Get state from reducer:
    const username = useSelector(state => state.username);
    const results = useSelector(state => state.results);
    const error = useSelector(state => state.error);

    const dispatch = useDispatch();
    const search = searchTerm => dispatch(getResult(searchTerm));

    return (
        <div id='desktop-app' className='full-page flex-col'>
            <div id='top'>
                <Logo isHome={true}/>
                <div>
                    <Breadcrumb Name={username} URL={`https://github.com/${username}/`} />
                </div>
                <div>
                    <Breadcrumb Name={username} URL={`https://github.com/${username}/`}/>
                    {/* <Breadcrumb Name="/authCodealong" URL="https://github.com/Crowy92/authCodealong/"/> */}
                </div>
            </div>
            <div className='content'>
                <div className='inner flex-row'>
                    <div className='col'>
                        <div id='left-up' className='card'>
                            <Form getResult={search}/>
                        </div>
                        <div id='left-bottom' className=''>
                            <UserStats username={username||"Crowy92"} />
                        </div>
                    </div>
                    <div className='col'>
                        <div id='middle' className='results card'>
                            <div className='sticky top'>
                                <h3>Public repositories</h3>
                            </div>
                            <div className='scroll'>
                                <RepoList results={results} setRepo={setRepo}/>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div id='right' className='card'>
                            <RepoInfo repo={repo} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
