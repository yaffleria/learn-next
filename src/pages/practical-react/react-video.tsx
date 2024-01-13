import { NextPage } from "next";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const ReactVideoPage: NextPage = () => {
  const containerStyle = {
    padding: "60px",
    BoxSizing: "border-box",
  };

  return (
    <div style={containerStyle}>
      <ReactPlayer
        url="https://youtu.be/d4oBg7dnny4?si=Ibr_S3EPYBOSxmVZ"
        controls
        width="480px"
        height="240px"
        onReady={() => console.log("onReady callback")}
        onStart={() => console.log("onStart callback")}
        onPause={() => console.log("onPause callback")}
        onEnded={() => console.log("onEnded callback")}
        onError={() => console.log("onError callback")}
      />
    </div>
  );
};

export default ReactVideoPage;
