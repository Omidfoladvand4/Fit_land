import { Route, Routes } from "react-router-dom";
import { lazy, Suspense, memo } from "react";
import Loading from "../features/shared/Loading/Loading";

const Home = lazy(() => import("../features/home/pages/Home"));
const NotFound = lazy(() => import('../features/NotFound/pages/NotFound'))
export const ROUTES = {
  HOME: "/",
  NOTFOUND : '*'

} 

const routes = [
  { path: ROUTES.HOME, element: <Home /> },
  { path: ROUTES.NOTFOUND, element: <NotFound /> },
];

const AppRoutes = memo(() => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
});

AppRoutes.displayName = "AppRoutes";

export default AppRoutes;