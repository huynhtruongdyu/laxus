"use client";
import { equalsIgnoringCase } from "@/utils/strings.ultil";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AiFillAppstore,
  AiFillHome,
  AiOutlineAppstore,
  AiOutlineHome,
} from "react-icons/ai";
import { RiAccountCircleFill, RiAccountCircleLine } from "react-icons/ri";

import "./styles.css";

const NavItem = ({
  name,
  href,
  className,
  isActive = false,
  activeClass = "active",
  iconOutline,
  iconFilled,
}: {
  name: string;
  href: string;
  className: string;
  isActive?: boolean;
  activeClass?: string;
  iconOutline?: React.ReactNode;
  iconFilled?: React.ReactNode;
}) => {
  const classes = className + " " + (isActive ? activeClass : "");

  return (
    <Link className={classes} href={href}>
      {isActive && iconFilled}
      {!isActive && iconOutline}
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
          iconOutline={<AiOutlineHome size={"1.2rem"} />}
          iconFilled={<AiFillHome size={"1.4rem"} />}
        />
        <NavItem
          className="navbar__item"
          href="/apps"
          name="Apps"
          isActive={equalsIgnoringCase(pathname, "/apps")}
          iconOutline={<AiOutlineAppstore size={"1.2rem"} />}
          iconFilled={<AiFillAppstore size={"1.4rem"} />}
        />
      </div>
      <div className="navbar__container navbar__container--bottom">
        <NavItem
          className="navbar__item"
          href="/about"
          name="About"
          isActive={equalsIgnoringCase(pathname, "/about")}
          iconOutline={<RiAccountCircleLine size={"1.2rem"} />}
          iconFilled={<RiAccountCircleFill size={"1.4rem"} />}
        />
      </div>
    </nav>
  );
};

export default Navbar;
