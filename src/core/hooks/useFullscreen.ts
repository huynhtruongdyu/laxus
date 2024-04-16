"use client";

import { useCallback, useEffect, useState } from "react";

const useFullscreen = () => {
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

  return { isFullScreen, toggleFullScreen };
};
export default useFullscreen;
