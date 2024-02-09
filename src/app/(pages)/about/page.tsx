
export default function About(){
    var image = "https://cdn.discordapp.com/attachments/793491028762034186/812386679477370910/unknown.png?ex=65cfa60d&is=65bd310d&hm=7ca0fde9706098ac555f06e437e747d1d5332732e4db68532330effcf3144aca&"

    const technologies = [
        ["java", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-plain.svg"],
        ["c#", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"],
        ["c++", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"],
        ["javascript", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"],
        ["react", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"],
        ["typescript", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"],
        ["html5", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"],
        ["css3", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"],
        ["tailwindcss", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"]
    ]
        
    return (
        <div className="flex flex-col justify-center py-16 text-center">
            <h1 className="text-4xl">About me</h1>
            <div className="flex flex-row justify-center py-10 gap-48">
                <div className="flex flex-col py-16 min-w-96 max-w-96 ml-16">
                    <h1 className="text-2xl text-center">Hello, I'm <strong className="text-purple hover:animate-pulse">Gabriel Guedes</strong> and I'm a developer!
                    I currently intend to work in the Web developer area.
                    </h1>
                    <div className="flex flex-col items-center">
                        <h1 className="text-3xl mt-10">Technologies</h1>
                        <div className="flex flex-row gap-3 p-5 items-center">             
                            {
                            technologies.map((element, index) => (
                                <div key={index}>
                                    <img className="opacity-70 hover:opacity-100 hover:w-12 transition-all duration-500 ease" width={30} src={element[1]} title={element[0]}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <img src={image} alt="" className="rounded-full transition 1.5s hover:animate-pulse" />
            </div>
        </div>
    )
}