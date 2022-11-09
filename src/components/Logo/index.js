import React from 'react'

const Logo = ({isHome}) => {
    return (
        <div>
            <span style={{fontSize: isHome? "72px" : "23px"}}>GitHub Stalker</span>
            <h2>Choose a GitHub user to <span style={{
                display: isHome? "inline" : "none", 
                textDecoration: 'line-through'}}>stalk</span> follow</h2>
        </div>
    )
}

export default Logo;
