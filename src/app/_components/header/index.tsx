import React from "react";
import SearchBar from "./_components/search-bar";
import "./styles.css";
import Link from "next/link";
import ActionBar from "./_components/actions-bar";

const Header = () => {
  return (
    <header className="header">
      <div className="header__item">
        <Link href="/about">
          <h4>LAXUS</h4>
        </Link>
      </div>
      <div className="header__item">{/* <SearchBar /> */}</div>
      <div className="header__item">
        <ActionBar />
      </div>
    </header>
  );
};

export default Header;
