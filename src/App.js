import "./App.css";
import RatingPage from "./components/RatingPage";
import ThankPage from "./components/ThankPage";
import { useState } from "react";
function App() {
  let [thank, setThank] = useState(false);
  const [point, setPoint] = useState(0);

  return (
    <div className="App">
      {thank ? (
        <ThankPage point={point} />
      ) : (
        <RatingPage
          setThank={() => setThank(true)}
          point={point}
          setPoint={setPoint}
        />
      )}
    </div>
  );
}

export default App;
