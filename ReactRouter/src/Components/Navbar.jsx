import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav style={{display:"flex", gap:"20px", padding:"10px", background:"#8c8dc"}}>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/OrderPanel">OrderPanel</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/Admin">Admin</Link>
           
            
        </nav>
    );
}

export default Navbar;