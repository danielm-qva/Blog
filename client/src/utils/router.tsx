
import {createBrowserRouter } from 'react-router-dom' ;

//compoent 
import App from '../App';
import Home from '../components/Home';
import Login from '../components/Login';
import ErrorPage from '../pages/error-page';
import Register from "../components/Register";
import AppPost from '../components/AddPost';
import ProtectRouter from '../pages/ProtectRouter';

const router = createBrowserRouter([
    { 
        path: '/',
        element:  <App/>,
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
          },
            {
                path: 'register',
                element: <Register/>
            },
            {path: 'addpost' ,
              element: <ProtectRouter children={<AppPost />}/>  
          }
        ]
    },    
  ] , {
    basename:'/'
  }) 

  export default router ;

