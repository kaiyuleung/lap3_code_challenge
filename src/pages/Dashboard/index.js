import React from 'react'
import { useSelector } from 'react-redux';
import { BackBtn, Breadcrumb, Logo, UserStats, RepoList, Sort } from '../../components'
import './style.css'

export default function Dashboard({setRepo}) {
    const username = useSelector(state => state.username);
    const userIconURL = useSelector(state => state.userIconURL);
    const results = useSelector(state => state.results);

    return (
        <div className='dashboard'>
            <header>
                <Logo isHome={false} />
                <BackBtn />
                <Breadcrumb Name={username} URL={`https://github.com/${username}/`} />
            </header>
            <main>
                <div>
                    <UserStats username={username} userIconURL={userIconURL}/>
                </div>
                <div>
                    <Sort setRepo={setRepo}/>
                    <RepoList results={results} setRepo={setRepo}/>
                </div>
            </main>
        </div>
    )
}


// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { BackBtn } from '../../components'

// export default function Dashboard() {
//     const { username } = useParams()
//     const [user, setUser] = useState(null)

//     useEffect(() => {
//         let res
//         (async function(){
//             try {
//                     res = await (await fetch(`https://api.github.com/users/${username}`)).json()
//                     console.log(res)
//             } catch (err) {
//                 console.error('This broke', err.message)
//             }
//         })()

//         setUser(res || null)
        
//     }, [])

//     return (
//         <div >
//             <BackBtn />
//             <div>
//                 <h2>{user?.name || username}'s Dashboard</h2>
//                 <p>Not {user?.name || username}? <a href='#'>Search for a different GitHub account</a></p>
//             </div>
//         </div>
//     )
// }
