import { Route, Routes } from "react-router-dom";
import ROUTES from "./routes";
import ErrorPage from "../layout/pages/ErrorPage";
// import HomePage from "../../general/pages/homePage";

const Router = () => {
  return (
    <Routes>
      {/* <Route path={ROUTES.HOME} element={<HomePage />} /> */}
      <Route path={ROUTES.VOLUNTEER} element={<div>Volunteer</div>} />
      <Route path={ROUTES.VOLUNTEERS} element={<div>Volunteers</div>} />
      <Route path={ROUTES.ORGANIZATIONS} element={<div>Organizations</div>} />
      <Route
        path={ROUTES.DETAILS_VOLUNTEER}
        element={<div>Details Volunteer</div>}
      />
      <Route
        path={ROUTES.DETAILS_ORGANIZATION}
        element={<div>Details Organization</div>}
      />
      <Route path={ROUTES.LOGIN} element={<div>Login</div>} />
      <Route path={ROUTES.REGISTER} element={<div>Register</div>} />
      <Route path="error" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
