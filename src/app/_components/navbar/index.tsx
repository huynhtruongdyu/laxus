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
import { FaRegUser, FaUser } from "react-icons/fa";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";
import { LuBookMinus } from "react-icons/lu";
import { RiBookOpenFill } from "react-icons/ri";

import { TbBrandBlogger } from "react-icons/tb";

import { BiLogoBlogger } from "react-icons/bi";

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
          className="navbar__item navbar__item--1"
          isActive={equalsIgnoringCase(pathname, "/")}
          iconOutline={<AiOutlineHome size={"1.2rem"} />}
          iconFilled={<AiFillHome size={"1.4rem"} />}
        />
        <NavItem
          className="navbar__item navbar__item--2"
          href="/apps"
          name="Apps"
          isActive={equalsIgnoringCase(pathname, "/apps")}
          iconOutline={<AiOutlineAppstore size={"1.2rem"} />}
          iconFilled={<AiFillAppstore size={"1.4rem"} />}
        />
        <NavItem
          className="navbar__item navbar__item--3"
          href="/blogs"
          name="Blog"
          isActive={equalsIgnoringCase(pathname, "/blogs")}
          iconOutline={<TbBrandBlogger size={"1.2rem"} />}
          iconFilled={<BiLogoBlogger size={"1.4rem"} />}
        />
        <NavItem
          className="navbar__item navbar__item--4"
          href="/course"
          name="Course"
          isActive={equalsIgnoringCase(pathname, "/course")}
          iconOutline={<LuBookMinus size={"1.2rem"} />}
          iconFilled={<RiBookOpenFill size={"1.4rem"} />}
        />
        <NavItem
          className="navbar__item navbar__item--5"
          href="/bookmark"
          name="Bookmark"
          isActive={equalsIgnoringCase(pathname, "/bookmark")}
          iconOutline={<IoBookmarkOutline size={"1.2rem"} />}
          iconFilled={<IoBookmark size={"1.4rem"} />}
        />
      </div>
      <div className="navbar__container navbar__container--bottom">
        {/* <NavItem
          className="navbar__item"
          href="/about"
          name="About"
          isActive={equalsIgnoringCase(pathname, "/about")}
          iconOutline={<FaRegUser size={"1.2rem"} />}
          iconFilled={<FaUser size={"1.4rem"} />}
        /> */}
      </div>
    </nav>
  );
};

export default Navbar;
