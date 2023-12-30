import { NextPage } from "next";
import React from "react";
import CountUp, { useCountUp } from "react-countup";

const CountUpPage: NextPage = () => {
  const countUpRef = React.useRef(null); // set null value to avoid type error: https://velog.io/@dev_hikun/react-%EC%9E%90%EC%A3%BC%EA%B2%AA%EB%8A%94-%EB%AC%B8%EC%A0%9C-%ED%95%B4%EA%B2%B0%EB%B0%A9%EB%B2%95
  const { start, pauseResume, reset, update } = useCountUp({
    ref: countUpRef,
    start: 0,
    duration: 5,
    end: 1000,
    startOnMount: false,
  });

  return (
    <div>
      <h1>
        <div ref={countUpRef} />
        <button onClick={start}>Start</button>
        <button onClick={reset}>Reset</button>
        <button onClick={pauseResume}>Pause Resume</button>
        <button onClick={() => update(2000)}>Update to 2000</button>
      </h1>
      <h1>
        <CountUp end={200} />
      </h1>
      <h1>
        <CountUp end={200} duration={5} />
      </h1>
      <h1>
        <CountUp end={1000} duration={5} start={500} />
      </h1>
      <h1>
        <CountUp end={1000} duration={5} prefix="$" decimals={2} />
      </h1>
      <h1>
        <CountUp end={1000} duration={5} suffix="USD" decimals={2} />
      </h1>
    </div>
  );
};

export default CountUpPage;
