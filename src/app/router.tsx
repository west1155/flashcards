import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import { Layout } from "@/components/layout/layout";
import { DecksPage } from "@/pages/decks/Decks.page";

import { Pagination } from "../components/ui/paginator/paginator";
import { Slider } from "../components/ui/slider/slider";
import { Deck } from "../pages/deck/Deck";

const publicRoutes: RouteObject[] = [
  {
    element: <Slider value={[1, 10]} />,
    path: "/login",
  },
  {
    element: (
      <Pagination
        currentPage={1}
        onPageChange={() => {}}
        onPageSizeChange={() => {}}
        pageSize={3}
        totalCount={20}
      />
    ),
    path: "/page",
  },
  {
    element: <Deck />,
    path: "/deck/:id",
  },
  {
    element: <Navigate to={"/decks"} />,
    path: "/",
  },
];

const privateRoutes: RouteObject[] = [
  {
    element: <DecksPage />,
    path: "/decks",
  },
];

function PrivateRoutes() {
  const isAuthenticated = true;

  return isAuthenticated ? <Outlet /> : <Navigate to={"/sign-in"} />;
}

const router = createBrowserRouter([
  {
    children: [
      {
        children: privateRoutes,
        element: <PrivateRoutes />,
      },
      ...publicRoutes,
    ],
    element: <Layout />, // Wrap routes with Layout
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
