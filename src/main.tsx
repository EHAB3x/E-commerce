import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// Layouts
import MainLayout from "@layouts/MainLayout/MainLayout";
// Pages
import Home from '@pages/Home';
import Categories from '@pages/Categories';
import Products from '@pages/Products';
import AboutUs from '@pages/AboutUs';
// Styles
import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([{
  path:"/",
  element:<MainLayout />,
  children:[
    {
    index:true,
    element:<Home />
    },
    {
      path:"categories",
      element:<Categories />
    },
    {
      path:"products/:prefix",
      element:<Products />
    },
    {
      path:"about-us",
      element:<AboutUs />
    },
  ]
}])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>
)
