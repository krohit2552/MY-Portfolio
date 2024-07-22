import {useState,Suspense, useEffect,useRef} from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Island from '../models/Island';
import Sky from '../models/Sky';
import Bird from '../models/Bird';
import Plane from '../models/Plane';
import HomeInfo from '../components/HomeInfo';
import sarkura from '../assets/sakura.mp3';
import { soundoff, soundon } from '../assets/icons';




const Home = () => {
        const audioRef=useRef(new Audio(sarkura));
        audioRef.current.volume=0.3;
        audioRef.current.loop=true;
    const [isRotating ,setIsRotating]=useState(false);
    const [currentStage, setCurrentStage] = useState(1);

        const [isPlayingMusic, setIsPlayingMusic] = useState(false);
        useEffect(() => {
         if(isPlayingMusic){
            audioRef.current.play();
         }

         return()=>{
            audioRef.current.pause();
         }
          
        }, [isPlayingMusic])
        




    const adjustIslandForScreenSize=()=>{
        let screenScale=null;
        let screenPosition=[0,-6.5,-43];
        let rotation=[0.1,4.7,0];
        if(window.innerWidth<768){
            screenScale=[0.51,0.51,0.51];
        }else if(window.innerWidth>=768&&window.innerWidth<=1024){
            screenScale=[0.65,0.65,0.65];
        }else{
            screenScale=[0.95,0.95,0.95];
        }
        return [screenScale,screenPosition,rotation];

    }
    const adjustPlaneForScreenSize=()=>{
        let screenScale, screenPosition;
        
        if(window.innerWidth<768){
            screenScale=[0.95,0.95,0.95];
            screenPosition=[0,-1.5,0]
        }else if(window.innerWidth>=768&&window.innerWidth<=1024){
            screenScale=[1.25,1.25,1.25];
            screenPosition=[0,-1.5,0]
        }else{
            screenScale=[2.7,2.7,2.7];
            screenPosition=[0,-3,-4];
        }
        return [screenScale,screenPosition];

    }
    const [islandScale, islandPosition, islandRotation]=adjustIslandForScreenSize();
    const [planeScale, planePosition]=adjustPlaneForScreenSize();
  return (
    <section className='w-full h-screen relative'>

     <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
            {currentStage && <HomeInfo currentStage={currentStage}/>}

        </div>


       <Canvas 
       className={`w-full h-screen bg-transparent ${isRotating ?'cursor-grabbing':'cursor-grab'}`}
       camera={{near:0.1, far:1000}}
       >
       <Suspense fallback={<Loader/>}>
            <directionalLight position={[1,1,1]} intensity={2} />
            <ambientLight intensity={0.5} />
            <hemisphereLight skycolor='#b1e1ff' groundcolor='#000000'/>
            <Bird/>
            <Sky
                isRotating={isRotating}
            />
            <Island
                isRotating={isRotating}
                setIsRotating={setIsRotating}
                setCurrentStage={setCurrentStage}
                 position={islandPosition}
                rotation={islandRotation}
                 scale={islandScale}
                
            />
            <Plane
                isRotating={isRotating}
                scale={planeScale}
                position={planePosition}
                rotation={[0,20,0]}
            />
       </Suspense>

       </Canvas>
       <div className={`absolute ${screen.width<=768?'bottom-24 left-4':'bottom-4 left-2'}`}>
        <img src={!isPlayingMusic ? soundoff:soundon}
            alt="sound"
            className='w-10 h-10 cursor-pointer object-contain'
            onClick={()=>setIsPlayingMusic(!isPlayingMusic)}
        />
       </div>
    </section>
  )
}

export default Home;
