import React from "react";

import "./Main.scss";

export default function Main({ children, ...props }) {
  return <main {...props}>{children}</main>;
}
