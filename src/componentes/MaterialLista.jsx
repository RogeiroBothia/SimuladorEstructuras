import Pregunta from "./Pregunta";
const MaterialLista = () => {
  return (
    <div className="font-indie font-semibold flex mt-2 items-center">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/hxUx9dUn8eY?si=I9JPNnFvbHg7iCz0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      <div className="ml-4">
        <h2 className="text-center">Probar Conocimientos</h2>
        <div className="">
          <Pregunta pregunta='En una lista enlazada simple, cada nodo contiene una referencia al siguiente nodo en la secuencia?' rv={true} rf={false} n={1} />
          <Pregunta pregunta='Para la lista enlazada simple se reserva un espacio completo para todas las posiciones en la memoria?' rv={false} rf={true} n={2} />
          <Pregunta pregunta='En una lista enlazada simple, la eliminación de un nodo específico siempre requiere conocer la referencia al nodo anterior?' rv={true} rf={false} n={3} />
          <Pregunta pregunta='La inserción de un nuevo nodo al principio de una lista enlazada simple requiere actualizar la referencia del nodo inicial?' rv={true} rf={false} n={4} />
          <Pregunta pregunta='En una lista enlazada simple, es posible tener ciclos donde un nodo apunta a un nodo anterior en la secuencia.?' rv={false} rf={true} n={5} />
        </div>
      </div>
    </div>
  )
}

export default MaterialLista