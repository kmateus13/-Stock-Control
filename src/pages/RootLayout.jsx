import { Link, Outlet } from "react-router-dom";

export default function RootLayout() {
    return (
        <>
            <header>
                <Link to="/" className="logo">REACT STOCK</Link>
                <nav>
                    <Link to="/" className="logo">Início</Link>
                    <Link to="/items" className="logo">Items</Link>
                </nav>
            </header>
            <div>
                <Outlet />
            </div>
            <footer>
                Feito com React e React Router!
            </footer>
        </>
    )
}