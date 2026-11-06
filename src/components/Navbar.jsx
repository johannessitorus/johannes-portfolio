
import { useState } from "react";
import { NavLink, useLocation } from "react-router";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Certifications", path: "/certifications" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const { pathname } = useLocation();

  const [menu, setMenu] = useState({
    open: false,
    pathname,
  });

  const isOpen = menu.pathname === pathname && menu.open;

  const toggleMenu = () => {
    setMenu({
      open: !isOpen,
      pathname,
    });
  };

  const closeMenu = () => {
    setMenu({
      open: false,
      pathname,
    });
  };

  const linkStyle = ({ isActive }) =>
    `block rounded-md px-3 py-2 text-sm transition-colors
    focus-visible:outline-2 focus-visible:outline-offset-2
    focus-visible:outline-primary ${
      isActive
        ? "bg-white/10 text-primary"
        : "text-accent hover:bg-white/5 hover:text-primary"
    }`;

  return (
    <header className="relative z-50 mx-auto w-full max-w-6xl px-4">
      <nav
        aria-label="Main navigation"
        className="rounded-b-xl border border-t-0 border-white/5 bg-surface px-5 py-4 md:px-7"
      >
        <div className="flex items-center justify-between gap-5">

          {/* Logo */}
          <NavLink
            to="/"
            onClick={closeMenu}
            className="text-lg font-bold tracking-tight text-primary"
            aria-label="JCPS, Home"
          >
            Johannes Christian Pratama Sitorus<span className="text-accent">.</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-2 md:flex">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={linkStyle}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/10 text-primary hover:bg-white/10 md:hidden"
          >
            {isOpen ? (
              <span aria-hidden="true" className="text-2xl">
                ×
              </span>
            ) : (
              <span aria-hidden="true" className="text-xl">
                ☰
              </span>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            id="mobile-navigation"
            className="mt-5 space-y-1 border-t border-white/10 pt-4 md:hidden"
          >
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={linkStyle}
                onClick={closeMenu}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
