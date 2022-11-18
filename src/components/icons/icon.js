import React from "react";
import { IconGitHub, LinkedIn, LiveSite } from "./index";

const Icon = ({ name }) => {
  switch (name) {
    case "GitHub":
      return <IconGitHub />;
    case "Live Site":
      return <LiveSite />;
    case "LinkedIn":
      return <LinkedIn />;
    default:
      return;
  }
};

export default Icon;
