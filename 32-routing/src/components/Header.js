import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <span>Router Tutorial</span>
            <ul>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;
