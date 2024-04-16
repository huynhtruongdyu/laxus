"use client";

import {
  BiMessageSquareDetail,
  BiNotification,
  BiSolidMessageSquareDetail,
  BiSolidNotification,
} from "react-icons/bi";
import { AiOutlineFullscreen, AiOutlineFullscreenExit } from "react-icons/ai";
import { MdFullscreen, MdFullscreenExit } from "react-icons/md";

import "./styles.css";
import { useCallback, useEffect, useState } from "react";
import useFullscreen from "@/core/hooks/useFullscreen";

const ActionBar = () => {
  const { isFullScreen, toggleFullScreen } = useFullscreen();
  return (
    <div className="header__actionbar">
      <a className="header__actionbar__item" role="button" title="Message">
        <BiMessageSquareDetail size={"1.3rem"} />
        {/* <BiSolidMessageSquareDetail size={"1.3rem"} /> */}
      </a>
      {/* <a
        className="header__actionbar__item active"
        role="button"
        title="Message"
      >
        <BiSolidMessageSquareDetail size={"1.3rem"} />
      </a> */}

      <a className="header__actionbar__item" role="button" title="Notification">
        <BiNotification size={"1.5rem"} />
      </a>
      {/* <a
        className="header__actionbar__item active"
        role="button"
        title="Notification"
      >
        <BiSolidNotification size={"1.5rem"} />
      </a> */}
      <a
        className={`header__actionbar__item ${isFullScreen ? "active" : ""}`}
        role="button"
        onClick={toggleFullScreen}
      >
        {isFullScreen ? (
          <MdFullscreenExit size={"1.6rem"} />
        ) : (
          <MdFullscreen size={"1.6rem"} />
        )}
      </a>
    </div>
  );
};

export default ActionBar;
