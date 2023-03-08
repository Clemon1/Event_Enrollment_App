import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
  Outlet,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import { useSelector } from "react-redux";
import { currentUSer } from "./features/authSlice";
import Category from "./pages/category";
import Profile from "./pages/profile";
import SingleEvent from "./pages/SingleEvent";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#030f18",
        light: "#edf7ff",
      },
      secondary: {
        main: "#009FFF",
        light: "#082036",
      },
      success: {
        main: "#03a075",
      },
    },
    Typography: {
      fontFamily: "Montserrat+Alternates",
      fontWeightLight: 200,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
    },
  });
  const user = useSelector(currentUSer);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={user ? <Navigate to={"/home"} /> : <Home />} />
        <Route
          path='/login'
          element={user ? <Navigate to={"/home"} /> : <Login />}
        />
        <Route
          path='/register'
          element={user ? <Navigate to={"/home"} /> : <Register />}
        />
        <Route
          path='/home'
          element={user ? <Dashboard /> : <Navigate to='/login' />}
        />
        <Route
          path='/categories'
          element={user ? <Category /> : <Navigate to='/login' />}
        />
        <Route
          path='/profile'
          element={user ? <Profile /> : <Navigate to='/login' />}
        />
        <Route
          path='/events/:id'
          element={user ? <SingleEvent /> : <Navigate to='/login' />}
        />
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
