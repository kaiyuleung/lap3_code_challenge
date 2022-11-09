import React from 'react'

const Logo = ({isHome}) => {
    return (
        <div>
            <span style={{fontSize: isHome? "72px" : "23px"}}>GitHub Stalker</span>
            <p style={{display: isHome? "block" : "none"}}>An App to <em>spy</em> on a GitHub user</p>
        </div>
    )
}
// {isHome ? "initial" : "none"}
export default Logo;
