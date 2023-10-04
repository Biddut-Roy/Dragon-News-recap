import { createBrowserRouter } from "react-router-dom";
import Root from "./Layout/Root";
import Home from "./page/Home/Home";
import Login from "./page/login/Login";
import Register from "./page/Register/Register";
import News from "./page/Home/News";
import Private from "./PrivateRoute/Private";



const routers = createBrowserRouter([
    {
        path: "/",
        element:<Root></Root>,
        children:[
            {
                path: "/",
                element: <Home></Home>,
                loader:()=> fetch('/news.json')
            },
            {
                path: "/news/:id",
                element: <Private> <News></News> </Private>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path:"/register",
                element: <Register></Register>
            }
        ]
    }
]);

export default routers;