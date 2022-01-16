import { Outlet } from "react-router-dom"

function App() {
  return (
    <div>
      <img src={process.env.PUBLIC_URL + "ciaran-head.png"} alt="Ciaran"/>
      <Outlet/>
    </div>
  );
}

export default App;
