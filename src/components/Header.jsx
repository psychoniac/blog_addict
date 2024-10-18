import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="min-h-[20vh] flex justify-center gap-24 bg-slate-600">
      <div className="max-w-[30%] max-h-[5vh] mt-5">
        <img src="./logo.png" alt="logo chat" className="max-w-[100%] max-h-[15vh]" />
      </div>
      <div className="mt-10">
        <h1 className="text-2xl text-red-900 font-bold">Blog Addict</h1>
        <h2 className="text-xl text-red-700 font-bold">Le blog qui parle aux addicts!</h2>
      </div>

      <div className="mt-10">
        <Navbar />
      </div>
    </header>
  )
}
