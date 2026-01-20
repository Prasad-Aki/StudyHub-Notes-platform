import './Navbar.css'
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <header className="header">
                <div className="logo">
                    <h1>StudyHub</h1>
                </div>
                <div className="navlinks">
                    <Link to = '/' >Home</Link>
                    <Link to = '/notes' >Notes</Link>
                </div>
            </header>
        </>
    )
}

export default Navbar