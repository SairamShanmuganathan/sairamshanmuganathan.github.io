import './App.css';
import Navbar, { MobileNavbar } from './Components/Navbar';
import { useState, useEffect } from 'react';
import styled , {createGlobalStyle} from 'styled-components';

function App() {
  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 640;
  return (
    <div>
      <Styles.Wrapper>
      <CSSReset />
      {isMobile?<MobileNavbar/>:<Navbar/>}
      </Styles.Wrapper>
    </div>
  );
}

const Styles = {
  Wrapper: styled.main`
    display: flex;
    background-color: #eeeeee;
    height: 100vh;
  `,
};

const CSSReset = createGlobalStyle`
  *,
  *::before, 
  *::after {
    margin: 0; 
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%; /*1rem = 10px*/
    box-sizing: border-box;    
  }  

  body {
    font-size: 1.4rem;
    font-family: sans-serif;  
  }
`;

export default App;
