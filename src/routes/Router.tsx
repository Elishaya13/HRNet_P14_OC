import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/Layout";
import Employees from "../pages/Employees";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/employees', element: <Employees /> },            
        ],
    },
    {
        path: '/*',
        element: <div>Not Found</div>
    },
   
])

export default router;