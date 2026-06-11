import { Navigate } from "react-router-dom";
import type { JSX } from "react/jsx-dev-runtime";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const admin = localStorage.getItem("admin");

    if (!admin) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;