import { Outlet } from "react-router-dom"

const Auth = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-200">
      <Outlet />
    </div>
  )
}

export default Auth