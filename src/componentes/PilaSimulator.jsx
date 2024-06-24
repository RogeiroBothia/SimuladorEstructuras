import Button from "./Button";
import Loader from "./Loader"
import VentanaFlotante from "./VentanaFlotante";
import { useState, useRef } from "react";


const PilaSimulator = () => {
  const [PILA, setPILA] = useState([])
  const buttonRef = useRef();

  const [contenidoVenta, setContenidoVentana] = useState("");
  /***************** Control de la ventana modal********/
  const [openVentana, setOpenVentana] = useState(false);
  const handleOpenVentanaClick = () => {
    setOpenVentana(true)
  }

  const imagenes = (tipImg) => {
    let number = Math.floor(Math.random() * (10 - 1) + 1)
    if (tipImg === 0) {
      return <img src={`../../public/fruta ${number}.png`} />
    }
    if (tipImg === 1) {
      return <img src={`../../public/animal ${number}.png`} />
    }
  }

  const handleAdd = () => {
    if (PILA.length == 10) {
      setContenidoVentana("Pila llena")
      handleOpenVentanaClick()
      return
    }
    setPILA(prevPILA => [...prevPILA, imagenes(Math.round(Math.random()))])
    buttonRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const handleDelete = () => {
    if (PILA.length == 0) {
      setContenidoVentana("La Pila no tiene contenido")
      handleOpenVentanaClick()
      return
    }
    setPILA(prevPILA => prevPILA.slice(0, -1))
  }

  const handleReinicio = () => {
    setPILA([])
  }

  return (
    <>
      <div className="flex justify-evenly mt-5 items-center">
        <aside className="text-center" ref={buttonRef}>
          <Button nombre="push" funcion={handleAdd} />
          <Button nombre="pop" funcion={handleDelete} />
          <div>
            <Button nombre="Reiniciar Pila" funcion={handleReinicio} />
          </div>

        </aside>
        <div className=" inline-flex flex-col-reverse font-indie font-bold text-center">
          {

            PILA.length <= 0 ? <Loader nombre="Sin Datos en la Pila" />
              :
              PILA.map((value, index) => (
                <div key={index} className="border-b-2 border-r-2 border-l-2 border-black">
                  {index === 0 ?
                    <span className="text-lg">{`Nodo Inicio`}</span>
                    :
                    <span className="text-lg">{`Nodo ${index}`}</span>
                  }
                  {value}
                </div>
              ))
          }
        </div>
      </div>
      {openVentana && <VentanaFlotante onClose={() => setOpenVentana(false)} teoria={contenidoVenta} />}
    </>
  )
}

export default PilaSimulator