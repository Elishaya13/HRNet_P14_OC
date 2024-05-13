import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import EmployeesList from "../pages/EmployeesList";
import Layout from "../components/Layout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/employees', element: <EmployeesList /> },            
        ],
    },
    {
        path: '/*',
        element: <div>Not Found</div>
    },
   
])

export default router;