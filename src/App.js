import * as React from 'react';
import ResponsiveAppBar from './componets/nav';
import Divider from '@mui/material/Divider';
import Sidebarrr from './componets/sidebar1/sidebar';
import { Outlet} from 'react-router-dom';
import  { useState } from 'react';

function App() {

  // admin password
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Replace 'yourAdminPassword' with your actual password
    if (password === 'badehe12') {
      setLoggedIn(true);
    } else {
      alert('Incorrect password');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  if (loggedIn) {
  return (
   <div>
     <ResponsiveAppBar/>
     <div className='flex'>
        <div className='  w-1/3 h-full'>
          <Sidebarrr/>
        </div>
        <Divider/>
        <div className='  w-3/5 grid place-content-center'>
          <Outlet/>
        </div>
       
        
        {/* <Card/> */}
     </div>
   </div>
  );
}  else {
  return (
    <div className='grid place-content-center '>
      <h1 className='text-5xl font-extrabold mt-16 text-center'>Admin Login</h1>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='mt-10 justify-between w-96 rounded-lg'
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
}
export default App;
