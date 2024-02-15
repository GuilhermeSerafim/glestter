import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './paginas/Inicio';
import SobreMim from './paginas/SobreMim';
import Menu from './componentes/Menu';
import Rodape from 'componentes/Rodape';

function AppRoutes() {
  return (
    <div className="App">
      <BrowserRouter> {/* Criando SPA */}
        <Menu/>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobremim" element={<SobreMim />} />
          <Route path="/*" element={<h1>Página não encontrada</h1>} /> 
        </Routes>
        <Rodape/>
      </BrowserRouter>
    </div>
  );
}

export default AppRoutes;