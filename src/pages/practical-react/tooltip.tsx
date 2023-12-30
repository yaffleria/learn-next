import Tippy from "@tippy.js/react";
import { LegacyRef, forwardRef } from "react";
import { NextPage } from "next";
import "tippy.js/dist/tippy.css";

const ColoredTooltip = () => {
  return <span style={{ color: "yellow" }}>Colored</span>;
};

const CustomChild = forwardRef((props: any, ref: LegacyRef<HTMLDivElement>) => {
  return (
    <div ref={ref}>
      <div>First line</div>
      <div>Second line</div>
    </div>
  );
});

const Tooltip: NextPage = () => {
  return (
    <>
      <div style={{ paddingBottom: "20px" }}>
        <Tippy arrow={false} content="Basic Tooltip">
          <button>Hover</button>
        </Tippy>
      </div>

      <div style={{ paddingBottom: "20px" }}>
        <Tippy
          delay={1000}
          content={<span style={{ color: "orange" }}>Colored</span>}
        >
          <button>Hover</button>
        </Tippy>
      </div>

      <div style={{ paddingBottom: "20px" }}>
        <Tippy content={<ColoredTooltip />}>
          <button>Hover</button>
        </Tippy>
      </div>

      <div style={{ paddingBottom: "20px" }}>
        <Tippy placement="top-start" content={<ColoredTooltip />}>
          <CustomChild />
        </Tippy>
      </div>
    </>
  );
};

export default Tooltip;
