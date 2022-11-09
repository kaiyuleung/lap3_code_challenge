import React from 'react'
// import { Home, Dashboard, Repo } from '../'
import { Form } from '../../components'
import './style.css';

export default function Desktop() {
    return (
        <div id='desktop-app' className='full-page flex-col'>
            <div id='top'>top</div>
            <div className='flex-row grow'>
                <div className='col'>
                    <div id='left-up' className='card' style={{backgroundColor:"pink"}}>left-up
                        <Form />
                    </div>
                    <div id='left-bottom' className='card' style={{backgroundColor:"beige"}}>left-bottom</div>
                </div>
                <div className='col'>
                    <div id='middle' className='card' style={{backgroundColor:"wheat"}}>middle</div>
                </div>
                <div className='col'>
                    <div id='right' className='card' style={{backgroundColor:"lightskyblue"}}>right</div>
                </div>
            </div>

            {/* <Home />
            <Dashboard />
            <Repo /> */}
        </div>
    )
}
