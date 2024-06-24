import SyncLoader from "react-spinners/SyncLoader";
import PropTypes from 'prop-types'

const Loader = ({ nombre = "Definiendo..." }) => {
  return (
    <div className=" text-center font-indie font-semibold">
      <div>{nombre}</div>
      <br />
      < SyncLoader
        color={"#b60d31"}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

Loader.propTypes = {
  nombre: PropTypes.string
}

export default Loader