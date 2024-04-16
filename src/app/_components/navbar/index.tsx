import React from "react";
import "./styles.css";
import Link from "next/link";

const NavItem = ({ className, href }: { className: string; href: string }) => {
  return (
    <Link className={className} href={href}>
      <span>img</span>
      <small>text</small>
    </Link>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container--top">
        <NavItem className="navbar__item " href="/" />
        <NavItem className="navbar__item " href="/apps" />
      </div>
      <div className="navbar__container--bottom">
        <NavItem className="navbar__item " href="/about" />
      </div>
    </nav>
  );
};

export default Navbar;
