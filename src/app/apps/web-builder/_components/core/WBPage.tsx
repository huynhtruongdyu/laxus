import React from "react";

type WBPageProps = {
  components: any[];
};

const WBPage = (props: WBPageProps) => {
  const { components } = props;
  return <div>{components.map((x) => x)}</div>;
};

export default WBPage;

WBPage.toString = () => "<h1>hello world</h1>";
