import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Array from "./Pages/Array"
import Lista from "./Pages/Lista"
import Pila from "./Pages/Pila"
import Cola from "./Pages/Cola"
import NotFound from "./Pages/NotFound"
import ConditionalHeader from "./componentes/ConditionalHeader"
import Login from "./login/Login"
import Auth from "./login/Auth"

const Rutas = () => {
  return (
    <BrowserRouter>
      <ConditionalHeader />
      <Routes>
        <Route path="/SimuladorEstructuras" element={<Auth />} >
          <Route index element={<Login />} />
        </Route>
        <Route path="/Home" element={<Home />} />
        <Route path="/array" element={<Array />} />
        <Route path="/lista" element={<Lista />} />
        <Route path="/pila" element={<Pila />} />
        <Route path="/cola" element={<Cola />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )

}

export default Rutas