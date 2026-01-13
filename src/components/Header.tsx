import logo from '../assets/favicon.png'

export default function Header() {
  return (
   <header className="w-full h-16 flex items-center justify-center border-b bg-white">
  <img src={logo} alt="transform-my-raw-data Logo" className="h-10 w-auto" />
</header>

  )
}
