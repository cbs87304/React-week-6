import { createHashRouter } from "react-router-dom"
import Frontlayout from "../layouts/FrontLayout"
import HomePage from "../pages/Homepage"
import ProductsPage from "../pages/ProductsPage"
import ProductDetailPage from "../pages/ProductsDetailPage"
import CartPage from "../pages/CartPage"
import NotFound from "../pages/NotFound"

const router = createHashRouter([
    {
        path: '/',
        element: <Frontlayout/>,
        children:[
            {
                path: '',
                element:<HomePage/>
            },
            {
                path: 'products',
                element: <ProductsPage/>
            },
            {
                path:'products/:id',
                element: <ProductDetailPage/>
            },
            {
                path:'cart',
                element: <CartPage/>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound/>
    }
])

export default router