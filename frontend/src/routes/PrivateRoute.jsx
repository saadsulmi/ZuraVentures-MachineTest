import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
    const auth = useSelector(state=>state.auth.auth)
    return auth?<Outlet/>:<Navigate to='/register'/>
}

export default PrivateRoute