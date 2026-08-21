import { useState } from "react";
import {
  FiAward,
  FiBookOpen,
  FiBriefcase,
  FiCode,
  FiHome,
  FiMail,
  FiMenu,
  FiUser,
  FiX,
} from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import "./Navbar.css";

const links = [
  { label: "Home", href: "#home", icon: FiHome },
  { label: "About", href: "#about", icon: FiUser },
  { label: "Skills", href: "#skills", icon: FiCode },
  { label: "Projects", href: "#projects", icon: FiBriefcase },
  { label: "Certifications", href: "#certifications", icon: FiAward },
  { label: "Contact", href: "#contact", icon: FiMail },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigateTo = (event, href) => {
    event.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className="site-navbar">
      <div className="navbar-inner">
        <a href="#home" className="navbar-brand" onClick={(event) => navigateTo(event, "#home")}>
          <span className="navbar-brand__mark">A</span>
          <span className="navbar-brand__name">AMAN SINGH</span>
        </a>

        <nav className="navbar-links" aria-label="Main navigation">
          {links.map(({ label, href, icon: Icon }) => (
            <a key={href} href={href} onClick={(event) => navigateTo(event, href)}>
              <Icon aria-hidden="true" />
              <span>{label}</span>
            </a>
          ))}
          <ThemeToggle />
        </nav>

        <div className="navbar-mobile-actions">
          <ThemeToggle />
          <button
            type="button"
            className="navbar-menu-button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
      </div>

      <nav className={`navbar-mobile-menu ${menuOpen ? "is-open" : ""}`} aria-label="Mobile navigation">
        {links.map(({ label, href, icon: Icon }) => (
          <a key={href} href={href} onClick={(event) => navigateTo(event, href)}>
            <Icon aria-hidden="true" />
            <span>{label}</span>
          </a>
        ))}
      </nav>
    </header>
  );
}
