import logo from '../assets/favicon.png'

export default function Header() {
  return (
   <header className="w-full h-20 flex items-center justify-center border-b bg-white">
      <img src={logo} alt="DataDock Logo" className="h-25 w-25" />
    </header>
  )
}
