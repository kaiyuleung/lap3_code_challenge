import React from 'react'
import './style.css'

export default function UserStats({username}) {
    return (
        <img src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&locale=en&theme=tokyonight`} alt="image of the user's statistics"/>
    )
}
