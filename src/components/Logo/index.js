import React from 'react'
import './style.css'

const Logo = ({isHome}) => {
    return (
        <div className='logo'>
            <span style={{fontSize: isHome? "72px" : "23px"}}>GitHub Stalker</span>
            <h2>Choose a GitHub user to <span style={{
                display: isHome? "inline" : "none", 
                textDecoration: 'line-through'}}>stalk</span> follow</h2>
        </div>
    )
}

export default Logo;
