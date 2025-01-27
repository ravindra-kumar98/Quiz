import { useSelector } from "react-redux"; // import useSelector from react-redux
import { Navigate, useLocation } from "react-router-dom"; // import Navigate and useLocation from react-router-dom

const PrivateRoute =({children})=>{ // create a function PrivateRoute with children as argument
    const { isAuthenticated } = useSelector(state=>state.isAuthenticated); // get isAuthenticated from state
    const location = useLocation(); // get location from useLocation
    if(!isAuthenticated){ // if not isAuthenticated
        return <Navigate to='/login' state={{from: location}} replace />; // return Navigate to /login with location as state
    }
    return children; // return children
}
export default PrivateRoute;