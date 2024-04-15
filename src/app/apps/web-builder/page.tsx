"use client";
import { useRef } from "react";
import WBContainer from "./_components/core/WBContainer";
import WBIframe from "./_components/core/WBIframe";
import WBPage from "./_components/core/WBPage";

const WebBuilder = () => {
  const wbRef = useRef(null);

  return (
    <div>
      <div>
        {/* <WBPage
          ref={wbRef}
          components={[<WBContainer key={1} />, <WBContainer key={2} />]}
        /> */}
      </div>
      <div>
        <WBIframe html={WBPage.toString()} />
      </div>
    </div>
  );
};

export default WebBuilder;
