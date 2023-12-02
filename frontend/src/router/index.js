import Layout from "../components/layout";
import Dashboard from "../pages/dashboard";
import Login from "../pages/login/login";

const routes = [
    {
        path:'/',
        element:<Layout />,
        children:[
            {
                index:true,
                element:<Dashboard />
            }
        ]
    },
    {
        path:"/login",
        element:<Login/>
    }
]
export default routes;