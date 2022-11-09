import React from 'react'
// import { Home, Dashboard, Repo } from '../'
import { Form, UserStats, Logo } from '../../components'
import './style.css';

export default function Desktop() {
    return (
        <div id='desktop-app' className='full-page flex-col'>
            <div id='top'>
                <Logo isHome={true}/>
            </div>
            <div className='flex-row grow'>
                <div className='col'>
                    <div id='left-up' className='card' style={{backgroundColor:"pink"}}>
                        <Form />
                    </div>
                    <div id='left-bottom' className='card' style={{backgroundColor:"beige"}}>
                        <UserStats />
                    </div>
                </div>
                <div className='col'>
                    <div id='middle' className='card' style={{backgroundColor:"wheat"}}>
                        
                    </div>
                </div>
                <div className='col'>
                    <div id='right' className='card' style={{backgroundColor:"lightskyblue"}}>
                        
                    </div>
                </div>
            </div>

            {/* <Home />
            <Dashboard />
            <Repo /> */}
        </div>
    )
}
