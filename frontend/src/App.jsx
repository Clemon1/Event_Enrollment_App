import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Login from "./pages/login";

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
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Route>,
    ),
  );
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  );
}
const Root = () => {
  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;
