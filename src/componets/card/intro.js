import { Box, Button, IconButton, Typography } from "@mui/material";
// import { easeInOut, motion, useAnimate } from "framer-motion";
import Fab from '@mui/material/Fab';
// import { Facebook, FacebookRounded, Instagram, WhatsApp, YouTube } from "@mui/icons-material";
import { useState } from "react";
// import Aos from 'aos';
// import 'aos/dist/aos.css';
// import animationData from './Animation - 1711693276801.json';
import animationData from './R3VYtxKiYZ (1).json';
// import Lottie from 'lottie-react';
import Lottie from 'lottie-react';
import Typewriter from 'typewriter-effect';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(useGSAP);
function Intro(){
    useGSAP(() => {
        gsap.to("#home ",{
            opacity: 1,
            ease:"power1.inOut",
            delay: 0.5,
        })
    }, []);
    const [send1, setSend1] = useState("");
    //  const send = () => {

    //         window.location.href = 'https://www.google.com';
    
    //  }
    return(
        <div id="home " className="  grid  place-content-center mx-1 gap-0 mt-0 lg:h-screen ">
        <div
        id="home"
         className=" flex  lg:flex md:flex-row flex-col-reverse   opacity-0  ">
            <div  className="  flex-col w-full   text-center items-center my-2 lg:my-36 ">
                <h1 data-aos='flip' className=" bg-gradient-to-r from-rose-900 to-rose-400 text-transparent bg-clip-text"> 
                    We are 
                    
                </h1>
                <h1 id="intro" className="  my-2 lg:my-10 font-bold t- text-4xl sm:text-6xl lg:text-8xl tracking-wide text-center text-white">
                    Badehe <br/> <span className=" bg-gradient-to-r from-rose-900 to-rose-400 text-transparent bg-clip-text">Enterprises</span> <span>LTD</span>
                </h1>
                <p data-aos='flip' className=" font-light  text-1xl sm:text-1xl lg:text-4xl text-white mt-9">
                    <Typewriter
                    options={{
                        autoStart: true,
                        loop:true,
                        delay:50,
                        strings:['The best creative Enteprise, comprising of many skills, many servics get connected to our website hit follow button to subscribe']
                    }}
                    /> 
                </p>
                <div  className=" my-3 lg:my-24 ">
                    <Button variant="contained" color='secondary'>Follow</Button>
                </div>
            </div>
            <div  className="">
                <Lottie animationData={animationData}/>
                {/* <img
                    // animate={{ transform: "translateX(100px)" }}
                    src={ceo} alt="logo"
                    className=" rounded-lg w-full mx-1  rounded-e-lg "
                    data-aos='fade-down'
                    />         */}
            </div>
        </div>         
        </div>
    );

}

export default Intro;
