import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
        <ul className="flex justify-center gap-5">
            <li className="bg-slate-500 border border-white p-2 rounded-xl text-white hover:bg-slate-100 hover:text-red-900">
            <Link to="/">Home</Link>
            </li>
            <li className="bg-slate-500 border border-white p-2 rounded-xl text-white hover:bg-slate-100 hover:text-red-900">
            <Link to='/connexion'>Connexion</Link>
            </li>
            <li className="bg-slate-500 border border-white p-2 rounded-xl text-white hover:bg-slate-100 hover:text-red-900">
            <Link to='/inscription'>Inscription</Link>
            </li>
            <li className="bg-slate-500 border border-white p-2 rounded-xl text-white hover:bg-slate-100 hover:text-red-900">
            <Link to='/contact'>Contactez moi</Link>
            </li>
        </ul>
    </nav>
  )
}
