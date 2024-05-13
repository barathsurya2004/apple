import { useEffect, useState } from "react";
import "./App.css";
import Face from "./components/Face";
const App = () => {
  const [x, setX] = useState();
  const [y, setY] = useState();
  const [absX, setAbsX] = useState();
  const [absY, setAbsY] = useState();

  useEffect(() => {
    const update = (e) => {
      const wid = window.innerWidth;
      const hig = window.innerHeight;
      // console.log(wid);
      setAbsX(e.x / wid);
      setAbsY(e.y / hig);
      setX(e.x - wid / 2);
      setY(hig / 2 - e.y);
    };
    window.addEventListener("mousemove", update);
    window.addEventListener("touchmove", update);
    return () => {
      window.removeEventListener("mousemove", update);
      window.removeEventListener("touchmove", update);
    };
  }, [setX, setY]);
  return (
    <div className="container">
      <Face x={x} y={y} absX={absX} absY={absY} />
    </div>
  );
  // return <div>hellow</div>;
};

export default App;
