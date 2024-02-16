"use client"
import { Github, Linkedin } from 'lucide-react';
import { Skeleton } from "@/components/ui/skeleton"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useState } from "react";

export default function Home() {
  const [imageLoaded, setImageLoaded] = useState({
    homeImage: false
  });

  const handleImageLoad = (imageType: string) => {
    setImageLoaded(prevState => ({
      ...prevState,
      [imageType]: true
    }));
  };

  return (
    <main className="flex flex-col items-center justify-between p-14 min-h-52">
        <div className="flex flex-col xl:flex-row justify-between items-center gap-0 xl:gap-60">
            <div className="flex flex-col justify-between items-center min-w-86 max-w-96 mb-40">
              <h1 className="text-5xl md:text-7xl xl:text-6xl py-3">Hi there 👋</h1>
              <h1 className="text-gray text-center">Welcome to my portfolio, here you will find some projects developed by me</h1>
              <div className="flex flex-row gap-5 mt-5">
                  <a href="https://github.com/Srcyax" target="_blank" rel="noopener noreferrer">
                      <Github className="text-white hover:text-purple transition 2.5s" />
                    </a>
                    <a href="https://www.linkedin.com/in/cya-x-5a9262219/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="text-white hover:text-purple transition 2.5s" />
                  </a> 
              </div>
            </div>
            <div>
                {!imageLoaded.homeImage ? <Skeleton className='rounded-full w-96 h-96'/> : null}
                <LazyLoadImage className={imageLoaded.homeImage ? 'rounded-full' : ''} width={500} src="images/home/home_tech.png" beforeLoad={() => handleImageLoad('homeImage')}/>
            </div>
        </div>
    </main>
  );
}