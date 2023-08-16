import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import { useSelector } from "react-redux";

const EmployeeRoute = ({ children }) => {
    const userLoggedIn = useAuth();
    const user = useSelector(state => state.user.user)

    const location = useLocation();
    if (!userLoggedIn) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    if (user.roll === "user") {
        return <Navigate to="/" state={{ from: location }} replace />
    }
    if (user.roll !== "user") {
        return children
    }
};

export default EmployeeRoute;