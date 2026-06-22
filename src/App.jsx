import {Canvas} from "@react-three/fiber";
import React, { Suspense } from 'react';
import "./index.css";
import { OrbitControls, Environment, ScrollControls } from "@react-three/drei";
import MacContainer from "./MacContainer";

const App=()=>{
  return(
    <div className='w-full h-screen font-[regular] text-white'>
      {/* navbar */}
      <div>
        <div className="navbar line pt-5 pb-3 flex gap-10 absolute top-0 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <a href="#" className="flex items-center font-[300] text-sm">
            <svg fill="white" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-auto mr-2">
              <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
            </svg>
          </a>
          {['Store','Mac','iPad','iPhone','Watch','AirPods','TV & Home', 'Entertainment','Accessories','Support'].map((e)=>(
            <a key={e} href="#" className="font-[300] text-sm">{e}</a>
          ))}
          <a href="#" className="flex items-center font-[300] text-sm">
            <svg fill="white" width="15" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="h-4 w-auto mr-2">
              <path d="M15.7 14.3l-4.2-4.2c-0.2-0.2-0.5-0.3-0.8-0.3 0.8-1 1.3-2.4 1.3-3.8 0-3.3-2.7-6-6-6s-6 2.7-6 6 2.7 6 6 6c1.4 0 2.8-0.5 3.8-1.4 0 0.3 0 0.6 0.3 0.8l4.2 4.2c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.3 0.4-0.9 0-1.3zM6 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"/>
            </svg>
          </a>
          <a href="#" className="flex items-center font-[300] text-sm">
            <svg fill="white" width="20" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" className="h-5 w-auto">
              <path d="M832 312H696v-16c0-101.6-82.4-184-184-184s-184 82.4-184 184v16H192c-17.7 0-32 14.3-32 32v536c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V344c0-17.7-14.3-32-32-32zm-432-16c0-61.9 50.1-112 112-112s112 50.1 112 112v16H400v-16zm392 544H232V384h96v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h224v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h96v456z"/>
            </svg>
          </a>
        </div>
      </div>

      <div className="absolute flex flex-col items-center top-32 left-1/2 -translate-x-1/2">
        <h3 className="text-4xl font-[600] tracking-tight">MacBook Pro</h3>
        <h5 className="mt-2 masked text-7xl tracking-tighter font-[900] whitespace-nowrap">Fast runs in the family.</h5>
        <h5 className="mt-4 text-2xl font-[400] tracking-tight">Now with M5, M5 Pro and M5 Max</h5>
      </div>

      <Canvas key={Math.random()} camera={{fov:12, position:[0,-10,220]}}>
      <OrbitControls/>
      <Environment files={['https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/4k/studio_small_09_4k.hdr']} />
      <Suspense fallback={null}>
        {/* forcing remount during dev so GLTF changes show without manual refresh */}

        <ScrollControls pages={3}>
          <MacContainer />
        </ScrollControls>
      </Suspense>
    </Canvas>
    </div>
  )
}

export default App;
