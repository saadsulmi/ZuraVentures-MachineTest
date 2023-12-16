import {Route,Routes} from 'react-router-dom'
import { Suspense, lazy } from 'react'
import PrivateRoute from './routes/PrivateRoute'
import RegisterPage from './pages/RegisterPage'
import LoaderComponent from './component/Loaders/LoaderComponent'
import ProjectPage from './pages/ProjectPage'
import EditSubProjectPage from './pages/EditSubProjectPage'
import WidgetConfigPage from './pages/WidgetConfigPage'
import DeploymentPage from './pages/DeploymentPage'
import PricingPage from './pages/PricingPage'
import SettingsPage from './pages/SettingsPage'

const LandingPage = lazy(()=>import('./pages/LandingPage'))
function App() {

  return (
    <>
  <Suspense fallback={<LoaderComponent />}>
        <Routes path='/'>
        <Route path='/register' element={<RegisterPage />} />
          <Route element={<PrivateRoute />}>
            <Route index element={<LandingPage />} />
            <Route path='/projects'>
              <Route index element={<ProjectPage />} />
              <Route path='edit/:subProjectId' element={<EditSubProjectPage />} />
            </Route>
          </Route>
          <Route path='/widgetconfigurations' element={<WidgetConfigPage/>} />
          <Route path='/deployment' element={<DeploymentPage />} />
          <Route path='/pricing' element={<PricingPage />} />
          <Route path='/settings' element={<SettingsPage />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
