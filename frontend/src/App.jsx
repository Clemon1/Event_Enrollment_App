import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";

import "./App.css";
import Navbar from "./components/navbar";
import Home from "./pages/home";

const theme = createTheme({
  Typography: {
    fontFamily: "Montserrat+Alternates",
    fontWeightLight: 200,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Navbar />
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
