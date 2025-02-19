import logo from '../assets/logo.jpg'
export default function Header() {
    return (
        <header id="main-header">
            <div id="title">
                <img src={logo} alt="" />
                <h1>React Food</h1>
            </div>
            <nav>
                <button className="button">Cart</button>
            </nav>
        </header>
    )
}