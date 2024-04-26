
import { PauseCircleFilledSharp, PlayArrowRounded } from '@mui/icons-material';
import { Fab } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from "react"; 
import useSound from "use-sound";
import { collection, getDocs, onSnapshot } from "firebase/firestore"; 
import fstore from '../../firebase';


function Nextlist(){
    
    const [isPlaying, setIsPlaying] = useState(false);
    // const [play, { pause, duration, sound }] = useSound();


    const playingSong = () => {
      
        if (isPlaying) {
          pause(); // this will pause the audio
          setIsPlaying(false);
        } else {
          play(); 
          // this will play the audio
          setIsPlaying(true);
        }
        
      };
    //   fetching  data
    const [datafire, setdatafire] = useState([]);
    const [audioUrl, setAudioUrl] = useState(""); // State to hold audio URL
    const [play, { pause }] = useSound(audioUrl);
 
    //  const fstor = fstore;
     useEffect(() => {
        const fetchData = async () => {
            // const dataRef = firestore.collection("your_collection");
            const querySnapshot = await getDocs(collection(fstore, "toplist_cacious"));
            // const snapshot = await dataRef.get();
            const items = querySnapshot.docs.map((doc) => doc.data());
            setdatafire(items);
            setAudioUrl(items[0]?.song_audio);
          };
      
          fetchData();
      }, []);


    return(
        <div className='my-6 grid grid-flow-row'>
             <Typography gutterBottom variant="h5" component="div">
                    Songs made for you
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    play and listen to songs in cacious musi app
                  </Typography>
            <div className='grid grid-cols-6 my-6 gap-5'>
                {datafire.map((musdata) =>(
                    <div className='rounded-xl relative'>
                    {/* overlay */}
                    <div className='absolute w-full h-full  bg-red rounded-xl text-red'>
                        <p className='font-bold text-2xl px-2 pt-4'>{}</p>
                        <p className='px-2'>{}</p>
                        {/* floating button */}
                        <div className='mx-2 absolute bottom-2'>
                            <Fab size="small" color="primary" aria-label="add">
                                {!isPlaying ?(
                                    <PlayArrowRounded onClick={playingSong}/>
                                ) : (
                                    <PauseCircleFilledSharp onClick={playingSong}/>
                                )}
                                
                                
                            </Fab>

                        </div>
                        
                        
                    </div>
                    <img
                    className='max-h-[160px md:max-h-[200px] w-full object-cover' 
                    alt='splash copy.jpg'
                    src={musdata.song_image}
                    />
                </div>
                ))}

            </div>
        </div>
    );
}
 export default Nextlist;