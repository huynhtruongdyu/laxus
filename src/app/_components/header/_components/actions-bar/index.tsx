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

const ActionBar = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = useCallback(() => {
    if (!isFullScreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setIsFullScreen(!isFullScreen);
  }, [isFullScreen]);

  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(document.fullscreenElement !== null);
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);

    return () =>
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
  }, []);
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
      <a
        className="header__actionbar__item active"
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
