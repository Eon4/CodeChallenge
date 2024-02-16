import { Login } from "./pages/Login";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { MainLayout } from "./MainLayout/";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
