import {Navigate} from "react-router-dom";


function PrivateRoute({children}){
    const user = localStorage.getItem('token')
    if (!user){
        return <Navigate to="/login" />
    }
    return children
}

export default PrivateRoute;