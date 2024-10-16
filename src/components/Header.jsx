import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="min-h-32 flex items-center justify-center gap-32 py-5 bg-slate-600">
      <div>
        <h1 className="text-2xl text-red-900 font-bold">Blog Addict</h1>
        <h2 className="text-xl text-red-700 font-bold">Le blog qui parle aux addicts!</h2>
      </div>
      <div>
        <span>LOGO</span>
      </div>
      <div>
        <Navbar />
      </div>
    </header>
  )
}
