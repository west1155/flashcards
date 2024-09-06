import {createBrowserRouter, Navigate, Outlet, RouteObject, RouterProvider} from 'react-router-dom'
import {DecksPage} from "../pages/decks/Decks.page";
import {Slider} from "../components/ui/slider/slider";

const publicRoutes: RouteObject[] = [
    {
        path: '/login',
        element: <Slider value={[1,10]} />,
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


