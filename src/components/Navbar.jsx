import { Link } from "react-router-dom";

function Navbar(){
    return (
        <nav>
            <Link to="/" >Home</Link>
            <Link to="/service" >Service</Link>
            <Link to="/profil" >Profil</Link>
        </nav>
    )

}
export default Navbar;