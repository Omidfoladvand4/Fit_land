import { Route, Routes } from "react-router-dom";
import { lazy, Suspense, memo } from "react";
import Loading from "../features/shared/Loading/Loading";
import ScrollToTop from "../features/shared/ScrollToTop/ScrollToTop";

const Home = lazy(() => import("../features/home/pages/Home"));
const SignIn = lazy(() => import("../features/sign-in/pages/SignIn"));
const NotFound = lazy(() => import('../features/NotFound/pages/NotFound'))
export const ROUTES = {
  HOME: "/",
  SIGNIN : '/Sign-in' ,
  NOTFOUND : '*'

} 

const routes = [
  { path: ROUTES.HOME, element: <Home /> },
  { path: ROUTES.NOTFOUND, element: <NotFound /> },
  { path: ROUTES.SIGNIN, element: <SignIn /> , layout : null },
];

const AppRoutes = memo(() => {
  return (
    <Suspense fallback={<Loading />}>
          <ScrollToTop />
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