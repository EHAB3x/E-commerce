// Layouts
import MainLayout from "@layouts/MainLayout/MainLayout";
// Pages
import Home from '@pages/Home';
import Categories from '@pages/Categories';
import Products from '@pages/Products';
import AboutUs from '@pages/AboutUs';
// Router Functions
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


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
const AppRouter = () => {
  return (<RouterProvider router={router}/>)
}

export default AppRouter