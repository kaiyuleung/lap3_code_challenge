import React from 'react';
import { useMediaQuery } from 'react-responsive';

//* Router Stuff
import { Routes, Route } from 'react-router-dom';

//* Pages, Components and Styles
import './App.css';
import { NavBar } from './components';
import { Home, Dashboard, Repo, NotFound, Desktop } from './pages';

//* Breakpoint
const Breakpoint = 1240;

const useDesktopMediaQuery = () =>
useMediaQuery({ query: `(min-width: ${Breakpoint}px)` })

const useTabletAndBelowMediaQuery = () =>
useMediaQuery({ query: `(max-width: ${Breakpoint-1}px)` })

const UBP = ({ children }) => {
const isDesktop = useDesktopMediaQuery()

return isDesktop ? children : null
}

const LBP = ({ children }) => {
const isTabletAndBelow = useTabletAndBelowMediaQuery()

return isTabletAndBelow ? children : null
}


function App() {
  
  return(
    <>
    <LBP>
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/repo" element={<Repo />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </main>
    </LBP>

    <UBP>
      <Desktop />
    </UBP>
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
