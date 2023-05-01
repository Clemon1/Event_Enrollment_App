import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { currentUSer } from "./features/authSlice";
import Login from "./pages/login";
import Dashboard from "./pages/Dashboard";
import Events from "./pages/Events";
import Categories from "./pages/Categories";
import Profile from "./pages/profile";
import CreateEvent from "./pages/createEvent";
import CreateCategory from "./pages/createCategories";
function App() {
  const user = useSelector(currentUSer);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route
          index
          element={user ? <Navigate to={"dashboard"} /> : <Login />}
        />
        <Route
          path='dashboard'
          element={user ? <Dashboard /> : <Navigate to={"/"} />}
        />
        <Route
          path='events'
          element={user ? <Events /> : <Navigate to={"/"} />}
        />
        <Route
          path='createEvent'
          element={user ? <CreateEvent /> : <Navigate to={"/"} />}
        />

        <Route
          path='categories'
          element={user ? <Categories /> : <Navigate to={"/"} />}
        />
        <Route
          path='createCategories'
          element={user ? <CreateCategory /> : <Navigate to={"/"} />}
        />
        <Route
          path='profile'
          element={user ? <Profile /> : <Navigate to={"/"} />}
        />
      </Route>,
    ),
  );
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => {
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
};
export default App;
