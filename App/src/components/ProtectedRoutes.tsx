import { Navigate } from 'react-router';
import type { ProtectedRouteProps } from "../types/types";

export default function ProtectedRoutes({ children, isAuth, redirectTo = "/login" }: ProtectedRouteProps) {
    if (!isAuth) {
        return <Navigate to={redirectTo} replace/>
    }

    return <>{children}</>
}