import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useDispatch } from 'react-redux';
import { getResult } from './actions';

//* Router Stuff
import { Routes, Route } from 'react-router-dom';

//* Pages, Components and Styles
import './App.css';
import { Home, Dashboard, Repo, NotFound, Desktop } from './pages';

//* Breakpoint for responsiveness
const Breakpoint = 1240;

const useDesktopMediaQuery = () =>
useMediaQuery({ query: `(min-width: ${Breakpoint}px)` })

const useTabletAndBelowMediaQuery = () =>
useMediaQuery({ query: `(max-width: ${Breakpoint-1}px)` })

// Desktop
const UBP = ({ children }) => {
const isDesktop = useDesktopMediaQuery()

return isDesktop ? children : null
}

// Tablet and Below
const LBP = ({ children }) => {
const isTabletAndBelow = useTabletAndBelowMediaQuery()

return isTabletAndBelow ? children : null
}



function App() {

  const dispatch = useDispatch();
  const search = searchTerm => dispatch(getResult(searchTerm))

  //* initial load
  useEffect(()=> {
    search("crowy92")
  },[])

  //* state for repoInfo
  const [repo, setRepo] = useState("Please select one repo to see the stats.")
  


  return(
    <>
    <LBP>
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/dashboard" element={<Dashboard setRepo={setRepo} />}/>
          <Route path="/repo" element={<Repo repo={repo}/>}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </main>
    </LBP>

    <UBP>
      <Desktop repo={repo} setRepo={setRepo} />
    </UBP>
    </>
  )
}

export default App;
