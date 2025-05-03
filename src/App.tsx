import ToggleColorMode from "./Components/ColorMode";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <ToggleColorMode />
    </Router>
  );
}

export default App;
