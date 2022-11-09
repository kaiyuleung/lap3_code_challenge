import React from 'react'
// import { Home, Dashboard, Repo } from '../'
import { Form } from '../../components'
import './style.css';

export default function Desktop() {
    return (
        <div id='desktop-app'>
            <div id='top' style={{backgroundColor:"grey"}}>top</div>
            <div id='left-up' style={{backgroundColor:"pink"}}>left-up
                <Form />
            </div>
            <div id='left-bottom' style={{backgroundColor:"beige"}}>left-bottom</div>
            <div id='middle' style={{backgroundColor:"wheat"}}>middle</div>
            <div id='right' style={{backgroundColor:"lightskyblue"}}>right</div>

            {/* <Home />
            <Dashboard />
            <Repo /> */}
        </div>
    )
}
