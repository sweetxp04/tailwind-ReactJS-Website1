import { useState } from "react";
import logo from "../assets/logo.png";
import { FaBars, FaGlobeAfrica } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navItems = [
        {
            link: "Overview",
            path: "home",
        },
        {
            link: "Feature",
            path: "feature",
        },
        {
            link: "About",
            path: "about",
        },
        {
            link: "Pricing",
            path: "pricing",
        },
    ];
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <>
            <nav className="bg-white md:px-14 p-4 max-w-screen-2xl border-b mx-auto">
                <div className="text-xl container mx-auto flex justify-between  items-center">
                    <div>
                        <a
                            href="/"
                            className="text-2xl font-semibold flex items-center space-x-3"
                        >
                            <img
                                className="w-10 inline-block items-center"
                                src={logo}
                                alt="logo"
                            />
                            <span className="text-primary font-semibold">
                                XYZ
                            </span>
                        </a>
                    </div>
                    <ul className="hidden md:flex items-center space-x-8">
                        {navItems.map(({ link, path }) => (
                            <a
                                key={link}
                                href={path}
                                className="block px-4 py-3 text-primary hover:text-gray-300"
                            >
                                {link}
                            </a>
                        ))}
                    </ul>
                    <div className="space-x-8 hidden md:flex items-center">
                        <a
                            className="hidden lg:flex gap-2 items-center hover:text-gray-300"
                            href="/"
                        >
                            <FaGlobeAfrica />
                            Language
                        </a>
                        <button className="bg-[#9A7AF1] py-2 px-4 transition-all duration-500 rounded hover:text-white hover:bg-indigo-600">
                            Sign up
                        </button>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className=" focus:outline-none"
                        >
                            {!isMenuOpen ? <FaBars /> : <FaXmark />}
                        </button>
                    </div>
                </div>
            </nav>

            <div
                className={`space-y-4 bg-purple-600 ${
                    isMenuOpen ? "block fixed top-20 w-[100%] left-0" : "hidden"
                }`}
            >
                {navItems.map(({ link, path }) => (
                    <a
                        key={link}
                        href={path}
                        className="block text-xl text-center px-4 py-3 text-primary hover:text-gray-300"
                    >
                        {link}
                    </a>
                ))}
            </div>
        </>
    );
};

export default Navbar;
