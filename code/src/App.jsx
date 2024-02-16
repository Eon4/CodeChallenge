import './App.css'
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Login } from "./pages/Login";
import { Details } from "./pages/Details";
import { Products } from "./pages/Products";
import { Router } from './Components/Router/Router';

function App() {

  const routeArr = [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/products',
      element: <Products />,
    },
    {
      path: '/products/:product/:id',
      element: <Details />,
    },
  ];

  return (
    <>
      <Router routes={routeArr} />
    </>
  )
}

export default App
