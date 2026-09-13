import logo from '../assets/logo-text.png'

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <div>
          <img src={logo} alt="Dev Stack" className="h-10" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-6 text-gray-700 md:flex">
          <li>
            <a className="font-semibold text-pink-600" href="#">
              Home
            </a>
          </li>
          <li><a href="#technologies">Technologies</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden items-center md:flex">
          <button className="font-semibold text-gray-700">
            Sign In
          </button>

          <button className="brand-gradient ml-5 rounded-2xl px-4 py-2 font-semibold text-white">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="text-2xl text-gray-700 md:hidden"
        >
          ☰
        </button>

      </div>
    </nav>
  )
}

export default Navbar