import "./App.css";
import { lazy, Suspense } from "react";
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
const Login = lazy(() => import("./pages/login"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Events = lazy(() => import("./pages/Events"));
const Categories = lazy(() => import("./pages/Categories"));
import Profile from "./pages/profile";
const CreateEvent = lazy(() => import("./pages/createEvent"));
const CreateCategory = lazy(() => import("./pages/createCategories"));
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
        <Suspense fallback={<h2>...Loading</h2>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
export default App;
