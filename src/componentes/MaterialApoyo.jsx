import Pregunta from "./Pregunta";
const MaterialApoyo = () => {
  return (
    <div className="font-indie font-semibold flex mt-2 items-center">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/8NkHXYVpciI?si=-ejGP-jZ7lhmfTmL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      <div className="ml-4">
        <h2 className="text-center">Probar Conocimientos</h2>
        <div className="">
          <Pregunta pregunta='Los Arrays simples se pueden definir sin un tamaño?' rv={true} rf={false} n={1} />
          <Pregunta pregunta='Los Arrays simples reservan un espacio completo para todas susposiciones en la memoria?' rv={false} rf={false} n={2} />
          <Pregunta pregunta='Los Arrays simples se pueden definir sin un tamaño?' rv={true} rf={false} n={3} />
          <Pregunta pregunta='Los Arrays simples se pueden definir sin un tamaño?' rv={true} rf={false} n={4} />
          <Pregunta pregunta='Los Arrays simples se pueden definir sin un tamaño?' rv={true} rf={false} n={5} />
        </div>
      </div>
    </div>
  )
}

export default MaterialApoyo