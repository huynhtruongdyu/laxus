"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";
import { equalsIgnoringCase } from "@/utils/strings.ultil";

const NavItem = ({
  name,
  href,
  className,
  isActive = false,
  activeClass = "active",
}: {
  name: string;
  href: string;
  className: string;
  isActive?: boolean;
  activeClass?: string;
}) => {
  const classes = className + " " + (isActive ? activeClass : "");

  return (
    <Link className={classes} href={href}>
      <span>img</span>
      <small>{name}</small>
    </Link>
  );
};

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="navbar">
      <div className="navbar__container navbar__container--top">
        <NavItem
          href="/"
          name="Home"
          className="navbar__item"
          isActive={equalsIgnoringCase(pathname, "/")}
        />
        <NavItem
          className="navbar__item"
          href="/apps"
          name="Apps"
          isActive={equalsIgnoringCase(pathname, "/apps")}
        />
      </div>
      <div className="navbar__container navbar__container--bottom">
        <NavItem
          className="navbar__item"
          href="/about"
          name="About"
          isActive={equalsIgnoringCase(pathname, "/about")}
        />
      </div>
    </nav>
  );
};

export default Navbar;
