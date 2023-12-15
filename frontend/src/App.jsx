import {Route,Routes} from 'react-router-dom'
import { Suspense, lazy } from 'react'
import PrivateRoute from './routes/PrivateRoute'
import RegisterPage from './pages/RegisterPage'
import LoaderComponent from './component/LoaderComponent'
import ProjectPage from './pages/ProjectPage'

const LandingPage = lazy(()=>import('./pages/LandingPage'))
function App() {

  return (
    <>
    <Suspense fallback={<LoaderComponent/>}>
    <Routes path='/'>
      <Route element={<PrivateRoute/>}>
        <Route index element={<LandingPage/>}/>
        <Route path='/upload' element={<ProjectPage/>}/>
      </Route>
      <Route path='/register' element={<RegisterPage/>}/>

    </Routes>
    </Suspense>
    </>
  )
}

export default App
