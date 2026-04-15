
import { useState } from "react";
import RestaurantPage from "./components/dasgal8/RestaurantPage";



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <RestaurantPage />
      </div>
    </>
  );
}

export default App;
