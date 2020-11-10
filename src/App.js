import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 321
      , sm: 481
      , md: 769
      , lg: 1025
      , xl: 1281
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Route exact path='/' component={Home} />
        <Route path='/' render={() => <Redirect to='/' />} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
