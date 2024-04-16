"use client";
import { useClickOutside } from "@/core/hooks";
import React, { useRef } from "react";

const Apps = () => {
  const divRef = useRef<any>(null);

  const setRef = useClickOutside(() => {
    console.log("is outside");
  });
  return <div ref={setRef}>Apps</div>;
};

export default Apps;
