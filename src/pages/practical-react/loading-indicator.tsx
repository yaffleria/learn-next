import { NextPage } from "next";
import { BounceLoader, BarLoader, BeatLoader } from "react-spinners";

const LoadingIndicatorPage: NextPage = () => {
  const containerStyle = {
    padding: "60px",
    BoxSizing: "border-box",
  };
  const loaderCSS = {
    marginTop: "25px",
    marginBottom: "25px",
  };

  return (
    <div style={containerStyle}>
      <BounceLoader cssOverride={loaderCSS} size={24} loading color="orange" />
      <BeatLoader cssOverride={loaderCSS} size={72} loading color="skyblue" />
      <BarLoader cssOverride={loaderCSS} loading color="yellow" />
    </div>
  );
};

export default LoadingIndicatorPage;
