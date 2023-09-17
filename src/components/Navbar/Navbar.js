import './Navbar.css';
import MemeImg from './mem.jpg'

export default function Navbar() {
    return (
        <nav>
            <div className="nav-title">
                <img src={MemeImg} alt="trollface-logo" className="nav-logo"/>
                <h1>MemeGenerator</h1>
            </div>
            <h2 className="nav-subtitle">Anand Shirbhaiyye (RTC💛💜🧡)</h2>
        </nav>
    )
}