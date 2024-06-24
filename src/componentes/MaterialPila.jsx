import Pregunta from "./Pregunta";
const MaterialPila = () => {
  return (
    <div className="font-indie font-semibold flex mt-2 items-center">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/CEeMHlEj630?si=WKtok1lbgPOF2DJI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      <div className="ml-4">
        <h2 className="text-center">Probar Conocimientos</h2>
        <div className="">
          <Pregunta pregunta='La pila sigue el principio de “último en entrar, primero en salir” (LIFO)?' rv={true} rf={false} n={1} />
          <Pregunta pregunta='En una pila, la operación de inserción se llama “push”?' rv={true} rf={false} n={2} />
          <Pregunta pregunta='En una pila, la operación de eliminación se llama “pop”?' rv={true} rf={false} n={3} />
          <Pregunta pregunta='Una pila puede tener acceso directo a cualquier elemento en su interior, similar a un array?' rv={false} rf={true} n={4} />
          <Pregunta pregunta='Las pilas son útiles para la gestión de llamadas a subrutinas en programación?' rv={true} rf={false} n={5} />
        </div>
      </div>
    </div>
  )
}

export default MaterialPila