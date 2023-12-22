import Tippy from "@tippy.js/react";
import { NextPage } from "next";
import "tippy.js/dist/tippy.css";

const Tooltip: NextPage = () => {
  return (
    <Tippy content="Basic Tooltip">
      <button>Hover</button>
    </Tippy>
  );
};

export default Tooltip;
