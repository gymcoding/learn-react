import './AppTheme.css';
import HeaderTheme from './components/theme/Header.jsx';
import MainTheme from './components/theme/Main.jsx'
import FooterTheme from './components/theme/Footer.jsx'
import { DarkModeContext } from './context/DarkModeContext.jsx';
import { useState } from 'react';

function AppTheme(props) {

  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <HeaderTheme />
      <MainTheme />
      <FooterTheme />
    </DarkModeContext.Provider>
  );
}

export default AppTheme;