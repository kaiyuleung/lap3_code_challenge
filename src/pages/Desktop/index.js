import React from 'react'
// import { Home, Dashboard, Repo } from '../'
import { Form, UserStats, Logo } from '../../components'
import './style.css';

export default function Desktop() {
    return (
        <div id='desktop-app'>
            <div id='top' style={{backgroundColor:"grey"}}>
                <Logo isHome={true}/>
            </div>
            <div id='left-up' style={{backgroundColor:"pink"}}>
                <Form />
            </div>
            <div id='left-bottom' style={{backgroundColor:"beige"}}>
                <UserStats />
            </div>
            <div id='middle' style={{backgroundColor:"wheat"}}>

            </div>
            <div id='right' style={{backgroundColor:"lightskyblue"}}>

            </div>

            {/* <Home />
            <Dashboard />
            <Repo /> */}
        </div>
    )
}
