import Image from "next/image";
import React from "react";
import WebsiteIcon from "@/assets/svg/website-ui-svgrepo-com.svg";
import "./styles.css";

const AppCard = () => {
  return (
    <div className="appcard-container" role="button">
      <div className="appcard appcard__image">
        <span></span>
      </div>
      <div className="appcard appcard__content">content</div>
    </div>
  );
};

export default AppCard;
