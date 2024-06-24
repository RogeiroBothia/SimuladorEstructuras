import Button from "../componentes/Button"
import VentanaFlotante from "../componentes/VentanaFlotante"
import { Users } from "../constantes/Constantes"
import { useState } from "react"
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [contenidoVenta, setContenidoVentana] = useState("");
  /***************** Control de la ventana modal********/
  const [openVentana, setOpenVentana] = useState(false);
  const handleOpenVentanaClick = () => {
    setOpenVentana(true)
  }
  const navigate = useNavigate();

  const ingresar = (event) => {
    event.preventDefault()
    const user = document.querySelector('#user').value
    const password = document.querySelector('#password').value
    const userFound = Users.find(u => u.usuario === user && u.password === password);

    console.log(user + password)
    if (!userFound) {
      setContenidoVentana("Usuario o contraseña incorrectos")
      handleOpenVentanaClick()
      return
    }
    navigate('/Home');
  }

  const registrar = () => {
    navigate('/Home');
  }

  return (
    <div className="bg-white p-8 rounded-lg w-full md:w-96">
      <div className="mb-10">
        <h1 className="text-3xl uppercase font-bold text-center">
          Iniciar Sesión
        </h1>
      </div>
      <form className="flex flex-col gap-4">
        <div className="relative">
          <input
            id="user"
            type="text"
            className="w-full border hover:border-red-600 py2 px-8 rounded-lg"
            placeholder="Usuario"
          />
        </div>
        <div className="relative">
          <input
            id="password"
            type="password"
            className="w-full border hover:border-red-600  py2 px-8 rounded-lg"
            placeholder="Contraseña"
          />
        </div>
        <div className="text-center">
          <Button nombre='Ingresar' funcion={ingresar} />
          <Button nombre='Registrarse' funcion={registrar} />
        </div>
      </form>
      {openVentana && <VentanaFlotante onClose={() => setOpenVentana(false)} teoria={contenidoVenta} />}
    </div>
  )
}

export default Login