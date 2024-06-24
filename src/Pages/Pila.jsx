import PilaSimulator from "../componentes/PilaSimulator"
import Instrucciones from "../componentes/Instrucciones"
import MaterialPila from "../componentes/MaterialPila"

const Pila = () => {
  return (
    <div className=" container mx-auto">
      <MaterialPila />
      <Instrucciones>
        <h2 className="text-center"><b>Condiciones para Simular el Array Simple</b></h2>
        El simulador para el Array simple contiene los siguientes metodos elementales: <br />
        <ul className="list-disc pl-4">
          <li>Agregar Elementos</li>
          <li>Eliminar Elementos</li>
        </ul>
        <p>
          Tambien se agregan las condiciones elementales para un Array simple, como lo son la <b><i>definicion de su tamaño</i></b>, el <b><i>manejo de las posiciones del Array</i></b> y la redenrizacion de su contenido. Adicionalmente se agregan <b><i>tipos de datos</i></b> didacticos, como lo son las frutas y los animales
        </p>
        <hr className="border-red-500" />
        <br />
        <h2 className="text-center"><b>Uso del Simulador</b></h2>
        <ol className="list-decimal pl-4">
          <li>Primero se debe definir el tamaño (length) del Array, el simulador cuenta con un tamaño maximo de 10 y un tamaño minimo de 1, este se puede establecer apartir de la barra de rango.</li>
          <li>Una vez establecido el tamaño del Array, se debe oprimir el boton: Definir Tamaño del Array</li>
          <li>Para los arrays simples, estos solo pueden almacenar un tipo de dato especifico, por ello se debe seleccionar uno y el otro se desactivara</li>
          <li>Los Arrays simples siempre funcionan atraves de su posicion, por ello para agregar o eliminar elementos del mismo, primero se debe definir una posicion, estas posiciones son relativas al tamaño del arreglo siendo generalmente: length-1 y comenzando desde 0</li>
          <li>Al definir una posicion, se habilitan los botones para agregar y elminar</li>
          <li>Desde el boton de reiniciar simulador se puede devolver el array a un estado inicial</li>
          <li>El simulador tiene sus validaciones, estas aparecen en forma de ventana modal y se pueden cerrar presionando la X</li>
        </ol>
        <hr className="border-red-500" />
      </Instrucciones>
      <PilaSimulator />
    </div>
  )
}

export default Pila 