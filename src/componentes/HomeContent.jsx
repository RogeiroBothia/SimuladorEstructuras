import Card from "./Card"
import { ESTRUCTURAS, NAV_CARD } from "../constantes/Constantes"

const HomeContent = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 my-3 gap-8 place-items-center">
      {ESTRUCTURAS.map((item, index) =>
        <div key={index}>
          <Card
            titulo={item.titulo}
            img={item.img}
            descripcion={item.descripcion}
            ruta={NAV_CARD[index]}
          />
        </div>
      )}
    </section >


  )
}

export default HomeContent 