import { BrowserRouter, Routes } from "react-router-dom";
import Produtos from "./components/Produtos";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={Produtos} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
