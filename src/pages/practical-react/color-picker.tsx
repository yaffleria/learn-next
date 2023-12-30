import { NextPage } from "next";
import dynamic from "next/dynamic";
import { useState } from "react";

const ChromePicker = dynamic(
  () => import("react-color").then((mod) => mod.ChromePicker),
  {
    ssr: false,
  }
);

const ColorPickerPage: NextPage = () => {
  const [color, setColor] = useState<string>("#fff");
  const [showColorPicker, setShowColorPicker] = useState<boolean>(false);

  return (
    <div>
      <button onClick={() => setShowColorPicker(!showColorPicker)}>
        {showColorPicker ? "Close color picker" : "Pick a color"}
      </button>
      {showColorPicker && (
        <ChromePicker
          color={color}
          onChange={(updatedColor) => setColor(updatedColor.hex)}
        />
      )}
      <h1>You picked {color}</h1>
    </div>
  );
};

export default ColorPickerPage;
