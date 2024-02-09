import { Github, Linkedin } from 'lucide-react';

export default function Home() {
  var image = "https://www.equip-tecnologia.com/wp-content/uploads/2019/11/produtos-equip-tecnologia.png"

  return (
    <main className="flex flex-col items-center justify-between p-14 min-h-52">
        <div className="flex flex-row justify-between items-center gap-60">
            <div className="flex flex-col justify-between items-center min-w-86 max-w-96 mb-40">
              <h1 className="text-7xl py-3">Hi there 👋</h1>
              <h1 className="text-gray text-center">Welcome to my portfolio, here you will find some projects developed by me</h1>
              <div className="flex flex-row gap-5 mt-5">
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                      <Github className='text-white hover:text-purple transition 2.5s' />
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      <Linkedin className='text-white hover:text-purple transition 2.5s' />
                  </a> 
              </div>  
            </div>
            <div>
                <img width={500} src={image} alt="legend foto" className="rounded-full" />
            </div>
        </div>
    </main>
  );
}