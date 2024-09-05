import {createBrowserRouter, Navigate, Outlet, RouteObject, RouterProvider} from 'react-router-dom'
import {DecksPage} from "../pages/decks/decks.page";

const publicRoutes: RouteObject[] = [
    {
        path: '/login',
        element: <div>login</div>,
    },
]

const privateRoutes: RouteObject[] = [
    {
        path: '/',
        element: <DecksPage />,
    },
]


function PrivateRoutes() {
    const isAuthenticated = true

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

const router = createBrowserRouter([
    {
        element: <PrivateRoutes />,
        children: privateRoutes,
    },
    ...publicRoutes,
])


export function Router() {
    return <RouterProvider router={router} />
}


