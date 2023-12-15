import {Route,Routes} from 'react-router-dom'
import { lazy } from 'react'
import PrivateRoute from './routes/PrivateRoute'
import RegisterPage from './pages/RegisterPage'

const LandingPage = lazy(()=>import('./pages/LandingPage'))
function App() {

  return (
    <>
    <Routes path='/'>
      <Route element={<PrivateRoute/>}>
        <Route index element={<LandingPage/>}/>
      </Route>
      <Route path='/register' element={<RegisterPage/>}/>

    </Routes>
    </>
  )
}

export default App
