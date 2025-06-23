import { useState, useEffect } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [showNavbar, setShowNavbar] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        const timeout = setTimeout(() => setShowNavbar(true), 100)
        return () => clearTimeout(timeout)
    }, [])

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Product", path: "/Product" },
        { name: "About", path: "/About" },
        { name: "Success", path: "/Success" },
    ]

    const handleLogoClick = () => {
        navigate("/")
        setIsMobileMenuOpen(false)
    }

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 px-6 py-4 transition-opacity duration-500 ease-in-out ${showNavbar ? "opacity-100" : "opacity-0"
                } bg-white/10 backdrop-blur-md border-b border-white/10 shadow-md`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <button
                    onClick={handleLogoClick}
                    className="flex items-center space-x-2"
                    aria-label="Go to Home"
                >
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center shadow-md">
                        <span className="text-white font-bold">M</span>
                    </div>
                    <span className="text-white text-2xl font-semibold">CodeWithMamudul</span>
                </button>

                {/* Desktop_Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-white font-medium px-1"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile_Menu */}
                <div className="md:hidden">
                    <button
                        className="text-white focus:outline-none"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle mobile menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile_Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden mt-4 px-4 space-y-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-lg py-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block w-full text-left text-white font-medium py-2 px-4 rounded"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    )
}

export default Navbar
