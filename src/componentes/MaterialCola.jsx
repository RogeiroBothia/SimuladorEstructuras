import Pregunta from "./Pregunta";
const MaterialCola = () => {
  return (
    <div className="font-indie font-semibold flex mt-2 items-center">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/GiOOShsbUpw?si=g4P8xROp7wZ-OyCR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      <div className="ml-4">
        <h2 className="text-center">Probar Conocimientos</h2>
        <div className="">
          <Pregunta pregunta='En una cola, los elementos se procesan en el orden en que se añaden, siguiendo el principio FIFO (First In, First Out)?' rv={true} rf={false} n={1} />
          <Pregunta pregunta='En una cola, los elementos se añaden al frente y se eliminan desde el final?' rv={false} rf={true} n={2} />
          <Pregunta pregunta='Una cola puede ser implementada usando tanto arreglos como listas enlazadas?' rv={true} rf={false} n={3} />
          <Pregunta pregunta='El método peek() en una cola es un estandar que devuelve y elimina el primer elemento de la cola?' rv={false} rf={true} n={4} />
          <Pregunta pregunta='El método poll() en una cola es un estandar que devuelve y elimina el primer elemento, y si la cola está vacía, devuelve null?' rv={true} rf={false} n={5} />
        </div>
      </div>
    </div>
  )
}

export default MaterialCola