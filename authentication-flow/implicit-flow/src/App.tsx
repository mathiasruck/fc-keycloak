import {createBrowserRouter, RouterProvider} from "react-router-dom"
import {Logout} from "./Logout";
import {Callback} from "./Callback";
import {Login} from "./Login";
import {AuthProvider} from "./AuthProvider.tsx";

const router = createBrowserRouter([
    {
        path: "login",
        element: <Login/>
    },
    {
        path: "logout",
        element: <Logout/>
    },
    {
        path: "admin",
        element: <div>Admin</div>,
    },
    {
        path: "callback",
        element: <Callback/>
    }
]);

function App() {
    return <AuthProvider>
        <RouterProvider router={router}/>
    </AuthProvider>;
}

export default App
