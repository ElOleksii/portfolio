import { useEffect } from "react";
import { stars } from "./stars.js";
function App() {
  useEffect(() => {
    const runAsync = async () => {
      await stars();
      console.log("builded");
    };

    runAsync();
  }, []);
  return (
    <>
      <div className="homepage">
        <div className="fullscreen">
          <div className="fullscreen__content-container">
            <p>Oleksii Telecnhak</p>
            <h1>Front End Developer</h1>
            <p>Click for more</p>
          </div>
          <div className="anim-wrapp">
            <div className="star"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
