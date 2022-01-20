import { useState } from "react";
import { Outlet } from "react-router-dom"
import { Button, Pane, Text, SearchInput } from "evergreen-ui"

function App() {
  const [isImageActive, setIsImageActive] = useState(false);
  const [photoName, setPhotoName] = useState("")
  function clickEventHandler( person: string ) {
    setPhotoName(person)
    setIsImageActive(true);
  }
  return (
    <Pane>
      <Pane height={50} backgroundColor="#eeeee4" clearfix>
        <Pane width="33.33%" float="left" display="flex" alignItems="center" justifyContent="center">
          <Text margin={8} size={500}>
            thewillygoat.fun</Text>
        </Pane>
        <Pane width="33.33%" float="left" display="flex" alignItems="center" justifyContent="center">
          <SearchInput margin={8}>
          </SearchInput>
        </Pane>
        <Pane width="33.33%" float="left" display="flex" alignItems="right">
        </Pane>
      </Pane>
      <Pane margin={10} alignItems="center" width="100%" justifyContent="center">
        <Pane width="50%" height="50%" display="flex" float="left" justifyContent="center" flexDirection="column">
          <Button margin={20} onClick={() => clickEventHandler("ciaran.png")}>Click for Ciaran</Button>
          <Button margin={20} onClick={() => clickEventHandler("arvin.png")}>Click for Arvin</Button>
          <Button margin={20} onClick={() => clickEventHandler("mady.png")}>Click for Mady</Button>
          <Button margin={20} onClick={() => clickEventHandler("grace.png")}>Click for Grace</Button>
        </Pane>
        <Pane width="50%" display="flex" float="left" justifyContent="center">
          {isImageActive && <img src={process.env.PUBLIC_URL + photoName} alt="Ciaran " />}
        </Pane>
        
      </Pane>
      <Outlet />
    </Pane>
  );
};


export default App;
