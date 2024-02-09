export default function About(){
    var image = "https://cdn.discordapp.com/attachments/826103334153879614/1205562573798248448/IMG_20240103_004200_061.jpg?ex=65d8d2a3&is=65c65da3&hm=377deb82d3672e379a354477834b030af7d92261cd876ec196c70f67858d4554&"

    const technologies = [
        ["c#", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"],
        ["unity", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg"],
        ["javascript", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"],
        ["php", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"],
        ["react", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"],
        ["html5", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"],
        ["css3", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"],
        ["nextjs", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"],
        ["nodejs", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"],
        ["tailwindcss", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"]
    ]
        
    return (
        <div className="flex flex-col justify-center py-16 text-center">
            <h1 className="text-4xl">About me</h1>
            <div className="flex flex-row justify-center py-10 gap-48">
                <div className="flex flex-col py-16 min-w-96 max-w-96 ml-16">
                    <h1 className="text-2xl text-center">Hello, I'm <strong className="text-purple hover:animate-pulse">Luiz Philipe</strong> and I'm a developer!
                    I currently intend to work in the Web developer area.
                    </h1>
                    <div className="flex flex-col items-center">
                        <h1 className="text-3xl mt-10">Technologies</h1>
                        <div className="grid grid-cols-5 grid-rows-none gap-5 p-5 ">             
                            {
                            technologies.map((element, index) => (
                                <div key={index}>
                                    <img className="opacity-70 hover:opacity-100 hover:w-7 transition-all duration-200 ease" width={30} src={element[1]} title={element[0]}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <img src={image} alt="" className="w-96 h-96 rounded-full transition 1.5s hover:animate-pulse" />
            </div>
        </div>
    )
}