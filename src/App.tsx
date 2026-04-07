import { HashRouter, Route, Routes, Link } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { VariableDetails } from "./pages/VariableDetails";
import { Variables } from "./pages/Variables";

function App() {
  return (
    <HashRouter>
      <nav>
        <Link to="/">Головна</Link>
        <Link to="/variables">Довідка</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/variables" element={<Variables />} />
          <Route path="/variables/:id" element={<VariableDetails />} />
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;