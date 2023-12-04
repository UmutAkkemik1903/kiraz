import PrivateRoute from "../PrivateRoute";
import Layout from "../components/layout";
import Dashboard from "../pages/dashboard";
import Login from "../pages/login/login";
import Order from "../pages/order/order";
import OrderIndex from "../pages/order/index";
const routes = [
    {
        path:'/',
        element:<Layout />,
        children:[
            {
                index:true,
                element:<Dashboard />
            },
            {
                path:"sepetim",
                element:<PrivateRoute><Order /></PrivateRoute>
            },
            {
                path:"siparislerim",
                element:<PrivateRoute><OrderIndex /></PrivateRoute>
            },
        ]
    },
    {
        path:"/login",
        element:<Login/>
    }
]
export default routes;