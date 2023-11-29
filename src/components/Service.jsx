import { Link, Outlet } from "react-router-dom";

function Service() {
    return (
        <>
            <h1>Nos Services</h1>
            <nav>
                <Link to="/service/marketing">Service Marketing</Link>
                <Link to="/service/developpement">Service Développement</Link>
            </nav>
            <Outlet />
        </>
    )

}
export default Service;