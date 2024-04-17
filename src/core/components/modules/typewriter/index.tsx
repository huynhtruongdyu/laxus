"use client";
import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect/dist/core";

type AppTypeWritterProps = {
  texts: string[];
};
const AppTypeWritter = ({ texts }: AppTypeWritterProps) => {
  const [typewriter, setTypewriter] = useState<any>();
  useEffect(() => {
    setTypewriter(
      new Typewriter("#elTypewritterId", {
        loop: true,
        delay: 3000,
        strings: texts,
        autoStart: true,
      })
    );
  }, [texts]);

  return <span id="elTypewritterId"></span>;
};

export default AppTypeWritter;
