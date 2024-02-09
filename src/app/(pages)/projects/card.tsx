export default function CardProject({image, title, desc, technologies} : {image : string, title : string, desc : string, technologies : string[]}){
    
    const technologiesUrl = [
        ["java", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-plain.svg"],
        ["c#", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"],
        ["c++", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"],
        ["javascript", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"],
        ["react", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"],
        ["typescript", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"],
        ["html5", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"],
        ["mongodb", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"],
        ["css3", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"],
        ["nextjs", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"],
        ["nodejs", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"],
        ["tailwindcss", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"]
    ]

    return (
        <div className="m-12 border-2 border-indigo-600 rounded-lg border-purple opacity-50 hover:opacity-100 w-60 h-auto p-5 flex flex-col items-center transition-all duration-200 ease"> 
            <img className="p-5 w-40 h-40 rounded-full" src={image} alt="" />
            <div className="flex flex-col items-center justify-between gap-1">
                <h1 className="text-2xl">{title}</h1>
                <div className="flex flex-row gap-1">
                {
                    technologies.map((tech, index) => (
                    <div key={index}>
                        {
                        technologiesUrl.filter(t => t[0] === tech).map((filteredTech, index) => (
                            <img key={index} className="opacity-70 hover:opacity-100 hover:w-5 transition-all duration-200 ease" width={22} src={filteredTech[1]} title={filteredTech[0]} />
                        ))}
                    </div>
                ))}
                </div>
            </div>
            <p className="text-center text-wrap text-gray py-5">{desc}</p>
            <div className="flex flex-row mt-auto gap-3">
                <button className="text-[12px] hover:text-[13px] border-2 border-indigo-600 border-purple bg-transparent hover:bg-purple hover:border-transparent w-16 h-8 rounded-lg transition-all duration-500 ease">
                    Site
                </button>
                <button className="text-[12px] hover:text-[13px] border-2 border-indigo-600 border-purple bg-transparent hover:bg-purple hover:border-transparent w-16 h-8 rounded-lg transition-all duration-500 ease">
                    Github
                </button>
            </div>
        </div>
    )
}