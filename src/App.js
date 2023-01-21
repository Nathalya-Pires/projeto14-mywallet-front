import Cadastro from "./pages/Cadastro";
import HomePage from "./pages/HomePage";
import Home from "./pages/Home";
import GlobalStyle from "./style/GlobalStyle";
import NovaEntrada from "./pages/NovaEntrada";
import NovaSaida from "./pages/NovaSaida";

function App() {
  return (
    <>
      <GlobalStyle />
      {/* <HomePage/>
    <Cadastro/>
      <Home />
      <NovaEntrada/> */}
      <NovaSaida/>
    </>
  );
}

export default App;
