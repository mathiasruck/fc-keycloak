import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Logout } from "./Logout";
import { Callback } from "./Callback";
import { Login } from "./Login";

const router = createBrowserRouter([
  {
    path:"login",
    element: <Login/>
  },
  {
    path:"logout",
    element: <Logout/>
  },
  {
    path:"admin",
    element: <div>Admin</div>,
  },
  {
    path:"callback",
    element: <Callback/>
  }
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App
