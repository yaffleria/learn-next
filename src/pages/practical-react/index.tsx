import { NextPage } from "next";
import { FaReact } from "react-icons/fa";
import { MdAlarm } from "react-icons/md";

const ContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "100vw",
};

const Icons: NextPage = () => {
  return (
    <div style={ContainerStyle}>
      <FaReact color="purple" size="10rem" />
      <MdAlarm color="red" size="10rem" />
    </div>
  );
};

export default Icons;
