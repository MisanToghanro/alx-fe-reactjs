import { Navigate , Outlet } from "react-router-dom";
const ProtectedRoute = () => {
    const useAuth= true;

return(
    useAuth? <Outlet/> : <Navigate to="/login"/>
)
}
export default ProtectedRoute;