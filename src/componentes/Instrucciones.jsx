import PropTypes from 'prop-types'

const Instrucciones = ({ children }) => {
  return (
    <div className="font-indie">
      {children}
    </div>
  )
}
Instrucciones.propTypes = {
  children: PropTypes.node
}
export default Instrucciones