import VentanaFlotante from "./VentanaFlotante"
import { useState } from "react"
import Button from "./Button";
import Loader from "./Loader";
import Botonera from "./Botonera";
import { useRef } from 'react';


const ArraySimulator = () => {
  const [contenidoVenta, setContenidoVentana] = useState("");
  /***************** Control de la ventana modal********/
  const [openVentana, setOpenVentana] = useState(false);
  const handleOpenVentanaClick = () => {
    setOpenVentana(true)
  }
  /****************************************************/
  const [range, setRange] = useState(0)
  const changeRange = (event) => {
    setRange(+event.target.value);
  }
  /****************************************************/
  /**************** control de las columnas*/
  const [numCol, setNumCol] = useState(0)
  const handleNumCol = () => {
    setNumCol(range)
  }

  /****************************************************/
  const handleAdd = () => {
    let posicion = document.querySelector("#posicion").value

    if (!(tipFruta.current && tipFruta.current.checked) && !(tipAnimal.current && tipAnimal.current.checked)) {
      setContenidoVentana("Primero se debe seleccionar un tipo de dato")
      handleOpenVentanaClick()
      return
    }

    if (!(numCol > 0 && (posicion >= 0 && posicion <= numCol - 1))) {
      setContenidoVentana("El Array no esta definido")
      handleOpenVentanaClick()
      return
    }

    if (posicion === "") {
      setContenidoVentana("No se ha definido una posicion")
      handleOpenVentanaClick()
      return
    }

    let elemento = document.getElementById(`${posicion}`)

    if (elemento.querySelector("img")) {
      setContenidoVentana("La Posicion ya esta ocupada")
      handleOpenVentanaClick()
      return
    }

    const img = document.createElement("img");
    img.className = "border-black border-2";
    if (tipFruta.current && tipFruta.current.checked)
      img.src = `../../public/fruta ${Math.floor(Math.random() * (10 - 1) + 1)}.png`;
    else
      img.src = `../../public/animal ${Math.floor(Math.random() * (10 - 1) + 1)}.png`;

    img.alt = "imagen";

    elemento.appendChild(img);
  }

  const handleDelete = () => {
    let posicion = document.querySelector("#posicion").value
    if (!(numCol > 0 && (posicion >= 0 && posicion <= numCol - 1))) {
      setContenidoVentana("El Array no esta definido")
      handleOpenVentanaClick()
      return
    }
    if (!posicion) {
      setContenidoVentana("El no se ha definido una posicion correcta")
      handleOpenVentanaClick()
      return
    }
    let elemento = document.getElementById(`${posicion}`)
    const img = elemento.querySelector("img")
    if (!img) {
      setContenidoVentana("Esta posicion no tiene contenido")
      handleOpenVentanaClick()
      return
    }
    elemento.removeChild(img)
  }

  /*Controlar el tipo de dato*/
  const tipAnimal = useRef(null);
  const tipFruta = useRef(null);

  const tdato = () => {
    if (tipAnimal.current && tipAnimal.current.checked) {
      setContenidoVentana(`El tipo de dato del Array es ${tipAnimal.current.value} no se puden insertar datos de tipo ${tipFruta.current.value}❗`);
      handleOpenVentanaClick()
      return;
    }
    if (tipFruta.current && tipFruta.current.checked) {
      setContenidoVentana(`El tipo de dato del Array es ${tipFruta.current.value} no se puden insertar datos de tipo ${tipAnimal.current.value}❗`);
      handleOpenVentanaClick()
      return;
    }
  }

  const desactivarRadio = () => {
    if (tipFruta.current && tipFruta.current.checked) tipAnimal.current.disabled = true;
    if (tipAnimal.current && tipAnimal.current.checked) tipFruta.current.disabled = true;
  }

  /**Reiniciar estados */
  const reiniciarEstados = () => {
    setNumCol(0)
    setRange(0)
    tipFruta.current.checked = false
    tipAnimal.current.checked = false
    tipFruta.current.disabled = false;
    tipAnimal.current.disabled = false;
  }
  return (
    <>
      {/*Aqui va el codigo que crea el arreglo que se va a crear segun el lenth establecido*/}
      <div className={`flex flex-wrap justify-center items-center mt-4 gap-1 sm:flex-nowrap`}>
        {
          numCol > 0 ? (
            <>
              {Array.from({ length: numCol }).map((_, index) => (
                <div key={index} id={index} className="text-center">
                  {"posicion " + index}
                </div>
              ))}
            </>
          )
            : <Loader nombre="Definiendo el Tamaño..." />
        }
      </div>

      {/*Aqui va el codigo que controla el length y lo define*/}
      <div className=" text-center mt-4 " >
        <span >{'array.length= ' + range}</span>
        <div>
          <input
            type="range"
            name="arrayLength"
            id="arrayLength"
            step="1"
            max="10"
            min="0"
            className="range pr-6 accent-red-500 h-10 w-64"
            value={range}
            onChange={changeRange} />
        </div>
        <Button funcion={handleNumCol} nombre={"Definir Tamaño del Array"} />
      </div>

      {/** control de la botonera*/}
      <div className="text-center ">
        <div className="p-6 bg-red-500 text-white">
          <label className="block">
            <span className="text-lg mb-2">Seleccionar el Tipo de Dato:</span>
            <div className="mt-2">
              <label className="inline-flex items-center mr-6">
                <input type="radio" className="form-radio" name="tdato" ref={tipFruta} value="Fruta" />
                <span className="ml-2">Fruta</span>
              </label>
              <label className="inline-flex items-center">
                <input type="radio" className="form-radio" name="tdato" ref={tipAnimal} value="Animal" />
                <span className="ml-2">Animal</span>
              </label>
            </div>
          </label>

          <label className="block">
            <span className="text-lg mb-2">Digitar Posicion:</span>
            <input
              type="number"
              name="posicion"
              id="posicion"
              max={numCol >= 0 ? numCol - 1 : 0}
              min="0"
              className="bg-white border border-white px-2 py-1 rounded-md pl placeholder:text-slate-500 appearance-none text-black"
              placeholder="posicion"
              required
            />
          </label>
        </div>

        {desactivarRadio()}
        <div className="mt-2">
          <Botonera addFruta={tipAnimal.current && tipAnimal.current.checked ? tdato : handleAdd}
            deleteFruta={handleDelete} addAnimal={tipFruta.current && tipFruta.current.checked ? tdato : handleAdd} />
          <Button nombre="Reiniciar Simulador" funcion={reiniciarEstados} />
        </div>

      </div>

      {openVentana && <VentanaFlotante onClose={() => setOpenVentana(false)} teoria={contenidoVenta} />}
    </>
  )
}

export default ArraySimulator