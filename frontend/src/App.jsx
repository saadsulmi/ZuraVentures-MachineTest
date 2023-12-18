import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import RegisterPage from "./pages/RegisterPage";
import LandingPage from "./pages/LandingPage";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import LoaderComponent from "./component/Loaders/LoaderComponent";
import NotFoundPage from "./pages/NotFoundPage";

const SettingsPage = lazy(() => import("./pages/SettingsPage"));
const ProjectPage = lazy(() => import("./pages/ProjectPage"));
const EditSubProjectPage = lazy(() => import("./pages/EditSubProjectPage"));
const DeploymentPage = lazy(() => import("./pages/DeploymentPage"));
const WidgetConfigPage = lazy(() => import("./pages/WidgetConfigPage"));
const PricingPage = lazy(() => import("./pages/PricingPage"));

function App() {
  return (
    <>
      <Suspense fallback={<LoaderComponent />}>
        <Routes path="/">
          <Route element={<PrivateRoute />}>
            <Route index element={<LandingPage />} />
            <Route path="projects" element={<ProjectPage />}>
              <Route
                path="edit/:subProjectId"
                element={<EditSubProjectPage />}
              />
            </Route>
            <Route path="widgetconfigurations" element={<WidgetConfigPage />} />
            <Route path="deployment" element={<DeploymentPage />} />
            <Route path="pricing" element={<PricingPage />} />
            <Route path="accountsettings" element={<SettingsPage />} />
          </Route>
          <Route path="register" element={<RegisterPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
