import "./App.css";
import { ThemeProvider } from "./utils/ThemeContext";
import HomePage from "./HomePage";

function App() {
  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
