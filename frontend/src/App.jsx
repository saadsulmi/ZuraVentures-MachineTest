import {Route,Routes} from 'react-router-dom'
import { Suspense, lazy } from 'react'
import PrivateRoute from './routes/PrivateRoute'
import RegisterPage from './pages/RegisterPage'
import LoaderComponent from './component/Loaders/LoaderComponent'
import ProjectPage from './pages/ProjectPage'
import EditSubProjectPage from './pages/EditSubProjectPage'

const LandingPage = lazy(()=>import('./pages/LandingPage'))
function App() {

  return (
    <>
  <Suspense fallback={<LoaderComponent />}>
        <Routes path='/'>
          <Route element={<PrivateRoute />}>
            <Route index element={<LandingPage />} />
            <Route path='/projects'>
              <Route path=':projectId' element={<ProjectPage />} />
              <Route path='edit/:subProjectId' element={<EditSubProjectPage />} />
            </Route>
          </Route>
          <Route path='/widgetconfigurations' element={<RegisterPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
