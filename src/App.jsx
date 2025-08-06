import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <main className="flex-grow">
          <AppRouter />
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
