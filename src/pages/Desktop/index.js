import React from 'react'
import { Form, UserStats, Logo, RepoList, RepoInfo } from '../../components'
import Breadcrum from '../../components/Breadcrumb';
import './style.css';

export default function Desktop() {
    return (
        <div id='desktop-app' className='full-page flex-col'>
            <div id='top'>
                <Logo isHome={true}/>
                <div>
                    <Breadcrum Name="Crowy92" URL="https://github.com/Crowy92/" />
                </div>
                <div>
                    <Breadcrum Name="Crowy92" URL="https://github.com/Crowy92/"/>
                    <Breadcrum Name="/authCodealong" URL="https://github.com/Crowy92/authCodealong/"/>
                </div>
            </div>
            <div className='flex-row grow content'>
                <div className='col'>
                    <div id='left-up' className='card'>
                        <Form />
                    </div>
                    <div id='left-bottom' className='card'>
                        <UserStats />
                    </div>
                </div>
                <div className='col'>
                    <div id='middle' className='card'>
                        <RepoList />
                    </div>
                </div>
                <div className='col'>
                    <div id='right' className='card'>
                        <RepoInfo />
                    </div>
                </div>
            </div>
        </div>
    )
}
