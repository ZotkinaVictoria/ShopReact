export default function Header(props) {
    return (
        <header>
            <nav className="pink">
                <div className="nav-wrapper container">
                    <a href="#" className="brand-logo">React Shop</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="#">Repository</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}