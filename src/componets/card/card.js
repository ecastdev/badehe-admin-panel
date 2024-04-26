// import { BarChart } from '@mui/x-charts/BarChart';
import User from '../user/user';
import animateImg from './Animation - 1711693276801.json';
import Lottie from 'lottie-react';


export default function Card(){
    const cardData = [
            {
                bacImg : animateImg,
                tite:""

            },
            {
                bacImg : animateImg,
                tite:""

            }
            
        ] 
    return(
        <section className='grid my-16'>
        <div className=" flex justify-between">   
            { cardData.map((card) => (
                <div className=" rounded-2xl  max-w-lg max-h-lg">
                <Lottie animationData={card.bacImg}/>
                <h2 className="text-4xl text-slate-900">{card.tite}</h2>
            </div>
            ))}    
        </div>
        <User/>
        </section>

    );
}