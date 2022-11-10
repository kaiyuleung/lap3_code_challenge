import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BackBtn } from '../../components'

export default function Dashboard() {
    const { username } = useParams()
    const [user, setUser] = useState(null)

    useEffect(() => {
        let res
        (async function(){
            try {
                    res = await (await fetch(`https://api.github.com/users/${username}`)).json()
                    console.log(res)
            } catch (err) {
                console.error('This broke', err.message)
            }
        })()

        setUser(res || null)
        
    }, [])

    return (
        <div >
            <BackBtn />
            <div>
                <h2>{user?.name || username}'s Dashboard</h2>
                <p>Not {user?.name || username}? <a href='#'>Search for a different GitHub account</a></p>
            </div>
        </div>
    )
}
