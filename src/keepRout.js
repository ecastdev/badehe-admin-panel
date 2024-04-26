import Card from "./componets/card/card";
import Sidebarrr from "./componets/sidebar1/sidebar";
import Divider from '@mui/material/Divider';

export default  function KeepRout(){
    return(
        <>
         <div className='flex'>
        <div className='  w-1/6  h-full'>
            <Sidebarrr/>
   
        </div>
        <Divider/>
        <Card/>
       
     </div>
        </>
    );
}