import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav style={{display:"flex", gap:"20px", padding:"10px", background:"#8c8dc"}}>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/admin">Admin</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/addcakes">Add Cake</Link>
            
        </nav>
    );
}

export default Navbar;