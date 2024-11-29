"use client"
import edlogonormal from "@/assets/edlogonormal.png";
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import { FaBars, FaPhoneAlt } from "react-icons/fa"; // Import icons
import styles from "./styles.module.css";

// Define the type for the ref (HTMLDivElement)
const Header: React.FC = () => {
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false); // Type state as boolean
    const headerRef = useRef<HTMLDivElement | null>(null); // Type useRef with HTMLDivElement

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    // Close the nav when clicking outside of the header
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
                setIsNavOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className={styles.hdrContainer} ref={headerRef}>
            <div className={styles.hdrLogo}>
                {/* Logo redirects to home page */}
                <a href="/">
                    <img src={edlogonormal.src} alt="Logo" className={styles.hdrLogoImg} />
                </a>
            </div>

            <nav
                className={clsx(styles.hdrNavbar, isNavOpen && styles.hdrNavbarMobile)}
            >
                <a href="/about" className={styles.hdrNavLink}>
                    About
                </a>
                <a href="/services" className={styles.hdrNavLink}>
                    Services
                </a>
                <a href="/products" className={styles.hdrNavLink}>
                    Products
                </a>
                <a href="/career" className={styles.hdrNavLink}>
                    Career
                </a>
                <a href="/contact" className={styles.hdrNavLink}>
                    Contact
                </a>
                <a href="/login" className={styles.hdrNavLink}>
                    Login
                </a>
            </nav>

            {/* Icons for smaller screens */}
            <div className={styles.hdrIcons}>
                <div className={styles.hdrIcon} onClick={toggleNav}>
                    <FaBars />
                </div>
                <div className={styles.hdrContact}>
                    <a href="tel:+919821993563" aria-label="Call us">
                        <FaPhoneAlt className={styles.hdrPhoneIcon} />
                    </a>
                    <div className={styles.hdrPhoneText}>
                        <div>Call us on</div>
                        <div>+91 98219 93563</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
