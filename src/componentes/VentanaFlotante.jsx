import PropTypes from 'prop-types'

const VentanaFlotante = ({ onClose, teoria }) => {
  return (
    <div className=" font-indie font-semibold fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white p-5 rounded flex flex-col justify-center items-center gap-5">
        <div className=' w-1/2 text-center max-w-96'>{teoria}</div>
        <div>
          <button onClick={onClose}>❌</button>
        </div>
      </div>
    </div>
  )
}

VentanaFlotante.propTypes = {
  onClose: PropTypes.func.isRequired,
  teoria: PropTypes.string
}

export default VentanaFlotante