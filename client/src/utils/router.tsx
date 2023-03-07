
import {createBrowserRouter } from 'react-router-dom' ;

//compoent 
import App from '../App';
import Home from '../components/Home';
import Login from '../components/Login';
import ErrorPage from '../pages/error-page';


const router = createBrowserRouter([
    { 
        path: '/',
        element: <App/>,
        errorElement: <ErrorPage />,
        children: [
          {
            path: 'home',
            errorElement: <ErrorPage />,
            element: <Home/>
          },
          {
            path: 'login',
            element: <Login />
          }
        ]
    },
    
  ] , {
    basename:'/'
  }) 

  export default router ;

