import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import './index.css'

import  { RouterProvider } from 'react-router-dom'

import { store } from './redux/store'
import router  from './utils/router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <React.StrictMode>
    <Provider store= {store} >
       <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
