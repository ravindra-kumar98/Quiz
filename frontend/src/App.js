import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { ROUTES } from './pages/routes';
import PrivateRoute from './components/common/PrivateRoute';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import { useSelector } from 'react-redux';
import Register from './pages/register/Register';
import Layout from './layouts/Layout';

function App() {
  // const { isAuthenticated } = useSelector(state=>state.isAuthenticated); 
  return (
    <>
      <Routes>
      <Route path={ROUTES.LOGIN} element={ <Login />} />
        {/* Public Routes */}
        {/* <Route path={ROUTES.LOGIN} element={ isAuthenticated ?<Navigate to={ROUTES.HOME} /> : <Login />} />
        <Route path={ROUTES.REGISTER} element={ isAuthenticated ?<Navigate to={ROUTES.HOME} /> : <Register />} /> */}

        {/* Private Routes */}
        {/* <Route element={<Layout />}>
          <Route 
          path={ROUTES.HOME} 
          element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
          } />
        </Route> */}
      </Routes>
    </>
  );
}

export default App;
