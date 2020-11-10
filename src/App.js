import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import './App.css';

const theme = createMuiTheme({
  breakpoints: {
    xs: 321
    , sm: 481
    , md: 769
    , lg: 1025
    , xl: 1281
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        Hello World
      </div>
    </ThemeProvider>
  );
}

export default App;
