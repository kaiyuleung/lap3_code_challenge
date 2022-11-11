import React from 'react'

//* components and styles
import { Form, UserStats, Logo, RepoList, RepoInfo, Sort } from '../../components'
import './style.css';

//* redux thing
import { useSelector, useDispatch } from 'react-redux';
import { getResult } from '../../actions';


export default function Desktop({ repo, setRepo }) {


    //* Get state from reducer:
    const username = useSelector(state => state.username);
    const userIconURL = useSelector(state => state.userIconURL);
    const results = useSelector(state => state.results);

    const dispatch = useDispatch();
    const search = searchTerm => dispatch(getResult(searchTerm))

// {try{dispatch(getResult(searchTerm));}catch (err){throw new Error(err.message)}}

    // useEffect(()=> {
    //     search("example")
    // },[])



    return (
        <div id='desktop-app' className='full-page flex-col'>
            <div id='top'>
                <Logo isHome={true}/>
            </div>
            <div className='content'>
                <div className='inner flex-row'>
                    <div className='col'>
                        <div id='left-up' className='card'>
                            <Form getResult={search} />
                        </div>
                        <div id='left-bottom' className=''>
                            <UserStats username={username} userIconURL={userIconURL}/>
                        </div>
                    </div>
                    <div className='col'>
                        <div id='middle' className='results card'>
                            <div className='sticky top'>
                                <h3>Public repositories</h3>
                                <Sort setRepo={setRepo}/>
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
