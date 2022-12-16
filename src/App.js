import './App.css';
import PaginaBuscador from './paginas/PaginaBuscador';

import {
  createBrowserRouter,
  RouterProvider
  //Route
}from 'react-router-dom';
import Error404 from './components/Errores/404';
const router = createBrowserRouter([
  {
    path: "/",
    element: <PaginaBuscador />,
    errorElement: <Error404 />,
  },
  {
    path: "/buscador",
    element: <PaginaBuscador />,
  },
 
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
