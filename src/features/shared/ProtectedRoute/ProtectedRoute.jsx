// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ children }) => {
//   const token = localStorage.getItem('authToken');
//   const user = JSON.parse(localStorage.getItem('user') || 'null');

//   if (!token || !user) {
//     return <Navigate to="/Sign-in" replace />;
//   }

//   return children;
// };

// export default ProtectedRoute;


 const ProtectedRoute = ({ children }) => {
 

  return children };

 export default ProtectedRoute;