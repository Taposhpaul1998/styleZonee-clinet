import { useSelector } from "react-redux";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router";

export const AdminRoute = ({ children }) => {
    const userLoggedIn = useAuth();
    const user = useSelector(state => state.user.user)


    const location = useLocation();
    if (!userLoggedIn) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    if (user.roll === "user") {
        return <Navigate to="/" state={{ from: location }} replace />
    }
    if (user.roll === "employee") {
        return <Navigate to="/" state={{ from: location }} replace />
    }
    if (user.roll === "admin") {
        return children
    }

}