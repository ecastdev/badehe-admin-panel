import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { orange, purple } from '@mui/material/colors';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './error';
import Web from './explore/web';
import Card from './componets/card/card';
import All from './explore/all';
import Buscard from './explore/buscard';
import Buslogo from './explore/buslogo';
import Calendar from './explore/calendar';
import Food from './explore/food';
import Oil from './explore/oil';
import Other from './explore/other';
import Poster from './explore/poster';
import Finacial from './explore/finacial';
import Electrical from './explore/electrical';
import Cv from './explore/cv';
import Cctv from './explore/cctv';
import Adve from './explore/adve';
import Plumbing from './explore/plumbing';
import Network from './explore/network';
import Digital from './explore/digital';
// import { NextUIProvider } from '@nextui-org/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
// theme
const theme = createTheme({
  palette:{
    primary:{
      main: 'rgb(52, 11, 44)',
    },
    secondary:{
      main: 'rgb(142, 36, 203)', 
    }
  }
}

)
 const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Card/> ,
      },
      {
        path: 'web',
        element: <Web/> 
      },
      {
        path: 'all',
        element: <All/>
      },
      {
        path: 'buscard',
        element: <Buscard/>
      },
      {
        path: 'buslogo',
        element: <Buslogo/> 
      },
      {
        path: 'calendar',
        element: <Calendar/>, 
      },
      {
        path: 'food',
        element: <Food/>
      },
      {
        path: 'oil',
        element: <Oil/>
      },
      {
        path: 'other',
        element: <Other/>
      },
      {
        path: 'plumbing',
        element: <Plumbing/>
      },
      {
        path: 'poster',
        element: <Poster/> 
      },
      {
        path: 'finacial',
        element: <Finacial/>
      },
      {
        path: 'electrical',
        element: <Electrical/>
      },
      {
        path: 'cv',
        element: <Cv/>
      },
      {
        path: 'cctv',
        element: <Cctv/>
      },
      {
        path: 'adve',
        element: <Adve/>,
      },
      {
        path: 'network',
        element: <Network/>
      },
      {
        path: 'digital',
        element: <Digital/>
      },
    
    ]
  },

 ])
root.render(

  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
