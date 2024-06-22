import { detectIncognito } from "detectincognitojs";
import { useEffect, useState } from "react";

const DetectIncognitoPage = () => {
  const [result, setResult] = useState<any>(null);
  const [isIncognito, setIsIncognito] = useState<boolean>(false);
  const [browserName, setBrowserName] = useState<string>("");

  useEffect(() => {
    detectIncognito().then((result) => {
      console.log(result);

      setResult(JSON.stringify(result));
      setBrowserName(result.browserName);
      setIsIncognito(result.isPrivate);
    });
  }, []);

  return (
    <div>
      <div>
        {isIncognito === null ? (
          <p>Detecting incognito mode...</p>
        ) : isIncognito ? (
          <p>You are in incognito mode, browserName: {browserName}</p>
        ) : (
          <p>You are NOT in incognito mode, browserName: {browserName}</p>
        )}
      </div>
      <pre>{result}</pre>
    </div>
  );
};

export default DetectIncognitoPage;
