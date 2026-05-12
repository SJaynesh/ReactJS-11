import { createBrowserRouter } from "react-router";
import App from "../App";
import LoginPage from "../Pages/Auth/LoginPage";
import Dashboard from "../Pages/Dashboard/Dashboard";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {
                path: '/login',
                Component: LoginPage
            },
            {
                path: '/dashboard',
                Component: Dashboard
            }
        ]
    },
]);