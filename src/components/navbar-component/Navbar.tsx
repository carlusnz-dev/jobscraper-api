"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/all";
import { MdOutlineMenu } from "react-icons/md";
import gsap from "gsap";
import ButtonComponent from "../button/Button";
import "./navbar.css";

const navItems = [
    { name: "Home", href: "/", id: 1, icon: "" },
    { name: "Jobs", href: "jobs", id: 2, icon: "" },
    { name: "Statics", href: "statics", id: 3, icon: "" },
    { name: "About", href: "about", id: 4, icon: "" },
    { name: "Contact", href: "contact", id: 5, icon: "" },
];

export default function Navbar() {
    gsap.registerPlugin(ScrollTrigger);
    const navRef = useRef(null);
    const [navOpen, setNavOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleNavOpen = () => {
        return setNavOpen(true);
    };

    useEffect(() => {
        ScrollTrigger.create({
            start: "top top+=100",
            onUpdate: (self) => {
                if (self.scroll() > 100) {
                    setIsScrolled(true);
                } else {
                    setIsScrolled(false);
                }
            },
        });
    }, []);

    return (
        <nav
            className={`navbar fixed top-0 w-full transition-all ${isScrolled ? "is-scrolled" : ""}`}
            ref={navRef}
        >
            <div className="container flex items-center justify-between px-6 sm:px-5 py-5 md:py-8">
                <a
                    href="#"
                    className="brand text-2xl font-bold hover:text-white/70"
                >
                    JobScraper API
                </a>

                {/* Nav list */}
                <div className="nav-list">
                    <ul
                        className={`md:flex space-x-0 sm:space-x-5 ${navOpen ? "absolute flex flex-col bg-neutral-900 h-screen w-[85%] top-0 right-0 text-xl gap-y-5 p-6" : "hidden"}`}
                    >
                        {navItems.map((item) => (
                            <li key={item.id} className="nav-item">
                                <a href={item.href} className="nav-link">
                                    {item.icon}
                                    {item.name}
                                </a>
                            </li>
                        ))}

                        <button
                            className={
                                navOpen
                                    ? "absolute top-0 right-0 translate-y-3 -translate-x-3"
                                    : "hidden"
                            }
                            onClick={() => setNavOpen(false)}
                        >
                            X
                        </button>
                    </ul>
                </div>

                <ButtonComponent
                    className="block md:hidden"
                    type="button"
                    onClick={handleNavOpen}
                >
                    <MdOutlineMenu size={32} />
                </ButtonComponent>
            </div>
        </nav>
    );
}
