import {
  /*Componentes do React Router DOM */
  BrowserRouter, /* Inicia a configuração das rotas*/
  Routes, /* Responsável por configurar cada rota individualmente */
  Route
} from "react-router-dom";
import Listing from 'pages/Listing'; /*Página de listagem */
import Form from 'pages/Form'; /*Página de formulário */
import Navbar from "components/Navbar";

function App() {

  /*A NavBar dentro de BrowserRouter Indica que toda a página por padrão terá a NavBar */

  /*
  Route
   path="{caminho}" element={<página />}
   
   */

   /*  Rota com passagem de parâmetro cujo parametro é movieIddentro da página form
   <Route path=":movieId" element={<Form />} />
   
   Irá ficar assim:
   localhost:300/form/1
   localhost:300/form/2
   localhost:300/form/3
   ...
   */


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/form">
          <Route path=":movieId" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;