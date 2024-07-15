import './AppTheme.css';
import HeaderTheme from './components/theme/Header.jsx';
import MainTheme from './components/theme/Main.jsx'
import FooterTheme from './components/theme/Footer.jsx'
import { DarkModeProvider } from './context/DarkModeContext.jsx';

function AppTheme(props) {

  return (
    <DarkModeProvider initDarkMode={false}>
      <HeaderTheme />
      <MainTheme />
      <FooterTheme />
    </DarkModeProvider>
  );
}

export default AppTheme;