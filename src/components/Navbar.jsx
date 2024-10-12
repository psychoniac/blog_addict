import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
        <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to='/connexion'>Connexion</Link>
            </li>
            <li>
            <Link to='inscription'>Inscription</Link>
            </li>
            <li>
            <Link to='contact'>Contactez moi</Link>
            </li>
        </ul>
    </nav>
  )
}
