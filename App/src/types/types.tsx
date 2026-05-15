import { type ReactNode } from "react";

export interface GeneralUserType {
    id: number,
    name: string,
    mark: number,
}

export interface DetailUserType {
    id: number,
    name: string,
    mark: number,
    info: string,
}

export interface ProtectedRouteProps {
    children: ReactNode,
    isAuth: boolean,
    redirectTo?: string, 
}