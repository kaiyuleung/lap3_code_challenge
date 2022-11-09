import React from 'react'
// import { Home, Dashboard, Repo } from '../'
import { Form, UserStats, Logo } from '../../components'
import Breadcrum from '../../components/Breadcrumb';
import './style.css';

export default function Desktop() {
    return (
        <div id='desktop-app' className='full-page flex-col'>
            <div id='top'>
                <Logo isHome={true}/>
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
                        
                    </div>
                </div>
                <div className='col'>
                    <div id='right' className='card'>
                        
                    </div>
                </div>
            </div>

            {/* <Home />
            <Dashboard />
            <Repo /> */}
        </div>
    )
}
