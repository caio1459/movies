import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/Home";
import { Watch } from "../pages/Watch";
import { Error } from "../pages/Error/Error";
import { Search } from "../pages/Search";
import { Favorites } from "../pages/Favorites";
import { Register } from "../pages/Register";

export const AppRoutes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/watch/:id',
                element: <Watch />
            },
            {
                path: '*', //Indica uma pagina para ir se nada for encontrado
                element: <Error />
            },
            {
                path: 'search',
                element: <Search />
            },
            {
                path: 'favorites',
                element: <Favorites />
            },
            {
                path: 'register',
                element: <Register />
            }
        ]
    }
])