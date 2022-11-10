import React from 'react'
import { useDispatch } from 'react-redux';
import { getResult } from '../../actions';
import { Form, Logo } from '../../components'



export default function Home() {

    const dispatch = useDispatch();
    const search = searchTerm => dispatch(getResult(searchTerm))
    
    return (
        <div>
            <Logo isHome={true} />
            <Form getResult={search} />
        </div>
    )
}



// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// import { useSelector } from 'react-redux';

// export default function Home() {
//     const navigate = useNavigate()

//     const username = useSelector(state => state.username);


//     function handleSubmit(e) {
//         e.preventDefault()

//         const form = e.target
//         const data = Object.fromEntries(new FormData(form))
//         form.reset()

//         navigate(`/${data.username}`)
//     }

//     return (
//         <div>
//             <h1>Welcome to GitHub Stalker</h1>
//             <h2>Choose a GitHub user to <span style={{textDecoration: 'line-through'}}>stalk</span> follow</h2>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     github.com/
//                     <input type='text' name='username' placeholder='username' required autoFocus></input>
//                 </label>
//                 <input type='submit' value='Search'></input>
//             </form>
//         </div>
//     )
// }
