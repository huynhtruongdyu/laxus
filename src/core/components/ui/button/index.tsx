import React, { type PropsWithChildren } from "react";

type ButtonProps = {
  type: "primary" | "secondary";
};

const Button = (props: PropsWithChildren<ButtonProps>) => {
  const { type } = props;
  return <div>Button</div>;
};

export default Button;
