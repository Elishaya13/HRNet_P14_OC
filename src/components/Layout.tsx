import { Outlet } from "react-router-dom"
import Header from "./Header"

// Layout component that wraps the Header and Outlet components
const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
};

export default Layout;