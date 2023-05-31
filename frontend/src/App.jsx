import { lazy, Suspense } from "react";
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
const Home = lazy(() => import("./pages/home"));
const Login = lazy(() => import("./pages/login"));
const Register = lazy(() => import("./pages/register"));
const Dashboard = lazy(() => import("./pages/dashboard"));
import { useSelector } from "react-redux";
import { currentUSer } from "./features/authSlice";
const Category = lazy(() => import("./pages/category"));
const Profile = lazy(() => import("./pages/profile"));
const SingleEvent = lazy(() => import("./pages/SingleEvent"));
const Ticket = lazy(() => import("./pages/ticket"));
const SingleCategory = lazy(() => import("./pages/singleCategory"));
const SearchEvent = lazy(() => import("./pages/searchPage"));
import ErorPage from "./pages/error404";

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
          path='/categories/:id'
          element={user ? <SingleCategory /> : <Navigate to='/login' />}
        />
        <Route
          path='/profile'
          element={user ? <Profile /> : <Navigate to='/login' />}
        />
        <Route
          path='/events/:id'
          element={user ? <SingleEvent /> : <Navigate to='/login' />}
        />

        <Route
          path='/tickets'
          element={user ? <Ticket /> : <Navigate to='/login' />}
        />
        <Route
          path='/search/:title'
          element={user ? <SearchEvent /> : <Navigate to='/login' />}
        />
        <Route path='*' element={<ErorPage />} />
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
      <Suspense fallback={<h2>...Loading</h2>}>
        <Navbar />

        <div>
          <Outlet />
        </div>
      </Suspense>
    </>
  );
};

export default App;
