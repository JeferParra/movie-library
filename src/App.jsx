import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import AppRouter from "./router";

function App() {
  return (
    <BrowserRouter>
      <header>
        <NavBar />
      </header>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
