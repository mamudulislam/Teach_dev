import { RiMailFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram, FaDiscord } from "react-icons/fa";

const Footer = () => {
    const quickLinks = [
        { name: "About Us", href: "#" },
        { name: "Our Courses", href: "#" },
        { name: "Success Stories", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Contact", href: "#" },
        { name: "FAQ", href: "#" },
    ]

    const courses = [
        { name: "Web Development", href: "#" },
        { name: "Mobile Development", href: "#" },
        { name: "Data Science", href: "#" },
        { name: "Backend Development", href: "#" },
        { name: "DevOps & Cloud", href: "#" },
        { name: "Cybersecurity", href: "#" },
    ]

    const support = [
        { name: "Help Center", href: "#" },
        { name: "Student Portal", href: "#" },
        { name: "Career Services", href: "#" },
        { name: "Technical Support", href: "#" },
        { name: "Community Forum", href: "#" },
        { name: "Live Chat", href: "#" },
    ]

    const legal = [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "Refund Policy", href: "#" },
    ]

    const socialLinks = [
        { name: "Facebook", icon: <FaFacebookF />, href: "#" },
        { name: "Twitter", icon: <FaTwitter />, href: "#" },
        { name: "LinkedIn", icon: <FaLinkedinIn />, href: "#" },
        { name: "YouTube", icon: <FaYoutube />, href: "#" },
        { name: "Instagram", icon: <FaInstagram />, href: "#" },
        { name: "Discord", icon: <FaDiscord />, href: "#" },
    ];

    return (
        <footer className="relative bg-gradient-to-r from-purple-400 to-pink-400">
            <div className="py-16 px-6 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Stay Updated with CodeWithMamudul
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">_</span>
                    </h3>
                    <p className="text-lg text-purple-200 mb-8">
                        Get the latest updates on new courses, career tips, and exclusive offers delivered to your inbox.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-purple-400/30 text-white placeholder-purple-300 focus:outline-none focus:border-purple-400/50"
                        />
                        <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300 font-semibold">
                            Subscribe
                        </button>
                    </div>

                    <p className="text-sm text-purple-300 mt-4">
                        Join 25,000+ developers who get our weekly newsletter. Unsubscribe anytime.
                    </p>
                </div>
            </div>

            <div className="py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
                        <div className="lg:col-span-2">
                            <div className="flex items-center space-x-2 mb-6">
                                <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center shadow-md">
                                    <span className="text-white font-bold text-lg">M</span>
                                </div>
                                <span className="text-white text-2xl font-semibold">CodeWithMamudul</span>
                            </div>

                            <p className="text-purple-200 mb-6 leading-relaxed">
                                Empowering the next generation of developers through practical, industry-focused programming education.
                                Transform your career with our comprehensive courses and expert mentorship.
                            </p>

                            <div className="space-y-3 text-purple-200">
                                <div className="flex items-center gap-3">
                                    <span className="text-black text-[20px]">
                                        <RiMailFill />
                                    </span>
                                    <span>hello@codewithmamudul.com</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-black text-[20px]">
                                        <FaPhoneAlt />
                                    </span>
                                    <span>+8801234567</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-black text-[20px]">
                                        <ImLocation2 />
                                    </span>
                                    <span>Dhaka ,Bangladesh</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
                            <ul className="space-y-3">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="text-purple-200 hover:text-purple-300 transition-colors duration-200 hover:underline"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold text-lg mb-6">Popular Courses</h4>
                            <ul className="space-y-3">
                                {courses.map((course, index) => (
                                    <li key={index}>
                                        <a
                                            href={course.href}
                                            className="text-purple-200 hover:text-purple-300 transition-colors duration-200 hover:underline"
                                        >
                                            {course.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold text-lg mb-6">Support</h4>
                            <ul className="space-y-3">
                                {support.map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href={item.href}
                                            className="text-purple-200 hover:text-purple-300 transition-colors duration-200 hover:underline"
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-8 px-6 border-t border-purple-400/20">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <span className="text-purple-200 font-medium">Follow Us:</span>
                            <div className="flex gap-3">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        className="w-10 h-10 bg-purple-800/40 rounded-lg flex items-center justify-center hover:bg-purple-700/40 transition-all duration-300 hover:transform hover:scale-110"
                                        title={social.name}
                                    >
                                        <span className="text-lg">{social.icon}</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 bg-purple-800/40 rounded-lg px-4 py-2">
                                <span className="text-green-400">✓</span>
                                <span className="text-purple-200 text-sm">Accredited</span>
                            </div>
                            <div className="flex items-center gap-2 bg-purple-800/40 rounded-lg px-4 py-2">
                                <span className="text-blue-400">🛡️</span>
                                <span className="text-purple-200 text-sm">Secure</span>
                            </div>
                            <div className="flex items-center gap-2 bg-purple-800/40 rounded-lg px-4 py-2">
                                <span className="text-yellow-400">⭐</span>
                                <span className="text-purple-200 text-sm">4.9/5 Rating</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-6 px-6 bg-black/50">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="text-purple-300 text-sm">
                            © 2025 CodeWithMamudul. All rights reserved. Made with ❤️ for aspiring developers.
                        </div>

                        <div className="flex gap-6">
                            {legal.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    className="text-purple-300 hover:text-purple-200 text-sm transition-colors duration-200"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute top-10 left-10 w-32 h-32 border border-purple-400/10 rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 border border-pink-400/10 rounded-full animate-bounce"></div>
        </footer>
    )
}

export default Footer
