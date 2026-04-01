
import { useState } from "react";
import Dasgal7 from "./components/Dasgal7";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Dasgal7 />
      </div>
    </>
  );
}

export default App;
