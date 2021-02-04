import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const all = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const current = 4;

  const [previousElm, setPreviousElm] = useState([]);
  const [nextElm, setNextElm] = useState([]);

  useEffect(() => {
    setPreviousElm(all.filter((e) => e < current).slice(0, 3));
    setNextElm(all.filter((e) => e > current).slice(0, 3));
  }, [all, current]);

  const getLineWidth = (index, isReversed) => {
    if (isReversed) {
      if (current > 3) {
        return index === 0 ? "third" : index === 1 ? "second" : "first";
      }
    } else {
      if (current > 3) {
        return index === 0 ? "first" : index === 1 ? "second" : "third";
      }
    }
    return "third";
  };

  return (
    <div className="App" style={{ display: "flex", flexDirection: "column" }}>
      {previousElm.map((e, i) => (
        <>
          <div className={`previous`} style={{ margin: "10px 0" }} key={e}>
            <div className="rank">{e}</div>
          </div>
          <div className={`${getLineWidth(i, false)}`}></div>
        </>
      ))}
      <div className="current" style={{ margin: "10px 0" }}>
        {current}
      </div>
      {nextElm.map((e, i) => (
        <>
          <div className={`${getLineWidth(i, true)}`}></div>
          <div className={`next`} style={{ margin: "10px 0" }} key={e}>
            {e}
          </div>
        </>
      ))}
    </div>
  );
}
