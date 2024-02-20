import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './paginas/Inicio';
import SobreMim from './paginas/SobreMim';
import Menu from './componentes/Menu';
import Rodape from 'componentes/Rodape';
import Post from 'paginas/Post';
import PaginaNaoEncontrada from 'paginas/NaoEncontrada';
import Banner from 'componentes/Banner';

function AppRoutes() {
  return (
    <div className="App">
      <BrowserRouter> {/* Criando SPA */}
        <Menu />
        {/*Rotas aninhadas */}
        <Routes>
          <Route path='/' element={<Banner />}>
            <Route index element={<Inicio />} />
          </Route>
          <Route path="sobremim" element={<SobreMim />} />
          <Route path="posts/:id" element={<Post />} />
          <Route path="*" element={<PaginaNaoEncontrada />} />
        </Routes>
        <Rodape />
      </BrowserRouter>
    </div>
  );
}

export default AppRoutes;