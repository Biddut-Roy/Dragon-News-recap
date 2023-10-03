import { createBrowserRouter } from "react-router-dom";
import Root from "./Layout/Root";
import Home from "./page/Home/Home";



const routers = createBrowserRouter([
    {
        path: "/",
        element:<Root></Root>,
        children:[
            {
                path: "/",
                element: <Home></Home>
            },
        ]
    }
]);

export default routers;