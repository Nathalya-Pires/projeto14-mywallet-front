import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import NovaEntrada from "./pages/NovaEntrada";
import NovaSaida from "./pages/NovaSaida";
import HomePage from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {UserProvider} from "./context/Context"

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/nova-entrada" element={<NovaEntrada />} />
          <Route path="/nova-saida" element={<NovaSaida />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
