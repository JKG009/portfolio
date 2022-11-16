import React from "react";
import { IconGitHub, LiveSite } from "./index";

const Icon = ({ name }) => {
  switch (name) {
    case "GitHub":
      return <IconGitHub />;
    case "Live Site":
      return <LiveSite />;
    default:
      return;
  }
};

export default Icon;