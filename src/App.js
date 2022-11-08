import React from 'react';

import { Routes, Route } from 'react-router-dom';

import './App.css';
import { Home, Dashboard, Repo, NotFound } from './pages';

function App() {
  return(
    <>
    <h1>GitHub-Stalker</h1>
    <main>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/repo" element={<Repo />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </main>
    </>
  )
}

export default App;


//* Reference:
// import { Counter } from './features/counter/Counter';
// return (
//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <Counter />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <span>
//         <span>Learn </span>
//         <a
//           className="App-link"
//           href="https://reactjs.org/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           React
//         </a>
//         <span>, </span>
//         <a
//           className="App-link"
//           href="https://redux.js.org/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Redux
//         </a>
//         <span>, </span>
//         <a
//           className="App-link"
//           href="https://redux-toolkit.js.org/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Redux Toolkit
//         </a>
//         ,<span> and </span>
//         <a
//           className="App-link"
//           href="https://react-redux.js.org/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           React Redux
//         </a>
//       </span>
//     </header>
//   </div>
// );
