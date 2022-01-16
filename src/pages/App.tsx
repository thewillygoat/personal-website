import { useState } from "react";
import { Outlet } from "react-router-dom"

function App() {
  const [isImageActive, setIsImageActive] = useState(false);
  function clickEventHandler() {
    setIsImageActive(true);
  }
  return (
    <div>
      {!isImageActive && <button onClick={clickEventHandler}>Click for Ciaran</button> }
      {isImageActive && <img src={process.env.PUBLIC_URL + "ciaran-head.png"} alt="Ciaran " />}
      <Outlet/>
    </div>
  );
};


export default App;
