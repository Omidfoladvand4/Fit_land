import { Route, Routes } from "react-router-dom";
import { lazy, Suspense, memo } from "react";
import Loading from "../features/shared/Loading/Loading";
import ScrollToTop from "../features/shared/ScrollToTop/ScrollToTop";
import ProtectedRoute from "../features/shared/ProtectedRoute/ProtectedRoute";

const Home = lazy(() => import("../features/home/pages/Home"));
const SignIn = lazy(() => import("../features/sign-in/pages/SignIn"));
const SignUp = lazy(() => import("../features/sign-up/pages/SignUp"));
const VerifyCode = lazy(() => import("../features/sign-in/pages/VerifyCode"));
const NotFound = lazy(() => import('../features/NotFound/pages/NotFound'));
const Products = lazy(() => import('../features/products/pages/Products'));
const UserProfile = lazy(() => import('../features/userProfile/pages/UserProfile'));
const ProductDetail = lazy(() => import('../features/productDetail/pages/ProductDetail'));

export const ROUTES = {
  HOME: "/",
  SIGNIN: '/Sign-in',
  NOTFOUND: '*',
  VERIFYCODE: '/Verify-Code',
  SIGNUP: '/Sign-up',
  PRODUCTS: '/Products/:category',
  USERPROFILE: '/User-profile' ,
  PRODUCTDETAIL : '/Product-detail/:productId'
};

const routes = [
  { path: ROUTES.HOME, element: <Home /> },
  { path: ROUTES.SIGNIN, element: <SignIn /> },
  { path: ROUTES.SIGNUP, element: <SignUp /> },
  { path: ROUTES.VERIFYCODE, element: <VerifyCode /> },
  { path: ROUTES.PRODUCTS, element: <Products /> },
  { path: ROUTES.PRODUCTDETAIL, element: <ProductDetail /> },
  {
    path: ROUTES.USERPROFILE,
    element: (
      <ProtectedRoute>
        <UserProfile />
      </ProtectedRoute>
    ),
  },
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