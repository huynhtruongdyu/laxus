"use client";

import {
  BiMessageSquareDetail,
  BiNotification,
  BiSolidMessageSquareDetail,
  BiSolidNotification,
} from "react-icons/bi";

import "./styles.css";

const ActionBar = () => {
  return (
    <div className="header__actionbar">
      <a className="header__actionbar__item" role="button" title="Message">
        <BiMessageSquareDetail size={"1.3rem"} />
        {/* <BiSolidMessageSquareDetail size={"1.3rem"} /> */}
      </a>
      <a
        className="header__actionbar__item active"
        role="button"
        title="Message"
      >
        {/* <BiMessageSquareDetail size={"1.3rem"} /> */}
        <BiSolidMessageSquareDetail size={"1.3rem"} />
      </a>

      <a className="header__actionbar__item" role="button" title="Notification">
        <BiNotification size={"1.5rem"} />
        {/* <BiSolidNotification size={"1.5rem"} /> */}
      </a>
      <a
        className="header__actionbar__item active"
        role="button"
        title="Notification"
      >
        {/* <BiNotification size={"1.5rem"} /> */}
        <BiSolidNotification size={"1.5rem"} />
      </a>
    </div>
  );
};

export default ActionBar;
