import CardProject from "./card"

export default function Projects(){

    return (
        <main>
            <div className="flex flex-col items-center">
                <h1 className="text-3xl mt-10">Projects</h1>
                <div className="grid grid-cols-3 grid-rows-3">
                    <CardProject 
                        image="https://cdn.discordapp.com/attachments/855625092302503946/860960024788074536/unknown.png?ex=65d10401&is=65be8f01&hm=e0aca38d4414e0079f4dead30d5f3dcafa6b443a4ac7bdb8659f358544cb3cc4&" 
                        title = "Calculator"
                        desc="A calculator project" 
                        technologies={
                            ["html5", "css3", "javascript"]
                        }
                    />
                    <CardProject 
                        image="https://cdn.discordapp.com/attachments/855625092302503946/860960024788074536/unknown.png?ex=65d10401&is=65be8f01&hm=e0aca38d4414e0079f4dead30d5f3dcafa6b443a4ac7bdb8659f358544cb3cc4&" 
                        title = "Forum Yamacha"
                        desc="A forum project for my future cheat" 
                        technologies={
                            ["mongodb", "tailwindcss", "nextjs", "react"]
                        }
                    />
                    <CardProject 
                        image="https://cdn.discordapp.com/attachments/855625092302503946/860960024788074536/unknown.png?ex=65d10401&is=65be8f01&hm=e0aca38d4414e0079f4dead30d5f3dcafa6b443a4ac7bdb8659f358544cb3cc4&" 
                        title = "Test"
                        desc="Olá mundo" 
                        technologies={
                            ["react", "c++", "c#"]
                        }
                    />
                </div>
                
            </div>
        </main>                             
    )
}