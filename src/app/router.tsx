import {createBrowserRouter, Navigate, Outlet, RouteObject, RouterProvider} from 'react-router-dom'
import {DecksPage} from "../pages/decks/Decks.page";
import {Slider} from "../components/ui/slider/slider";
import {Pagination} from "../components/ui/paginator/paginator";
import {Layout} from "@/components/layout/layout";

const publicRoutes: RouteObject[] = [
    {
        path: '/login',
        element: <Slider value={[1,10]} />,
    },
    {
        path: '/page',
        element: <Pagination totalCount={20} pageSize={3} onPageChange={() => {}} onPageSizeChange={() => {}} currentPage={1}/>,
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
        element: <Layout />, // Wrap routes with Layout
        children: [
            {
                element: <PrivateRoutes />,
                children: privateRoutes,
            },
            ...publicRoutes,
        ],
    },
])


export function Router() {
    return <RouterProvider router={router} />
}


