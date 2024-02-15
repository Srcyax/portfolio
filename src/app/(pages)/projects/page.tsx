import CardProject from "./card"

export default function Projects(){
    const projects = [
        {
            image: "/images/projects/luiz_selfie.png",
            title: "Portifolio",
            desc: "My portifolio project",
            technologies: ["nextjs", "tailwindcss", "javascript", "react"],
            github: "https://github.com/Srcyax/portfolio",
            site: "https://portfolio-srcyaxs-projects.vercel.app/"
        },
        {
            image: "/images/projects/quizz.png",
            title: "Quizz Hub",
            desc: "Test your knowledge on QuizzHub",
            technologies: ["nextjs", "tailwindcss", "javascript", "react"],
            github: "https://github.com/Srcyax/quizz",
            site: "https://quizz-hub-srcyax.vercel.app/"
        },
        {
            image: "/images/projects/vision_store.png",
            title: "Vision store",
            desc: "A small project for a sales website",
            technologies: ["html5", "css3", "javascript", "php"],
            github: "https://github.com/Srcyax/vision-site",
            site: "https://vision-store-srcyax.vercel.app/"
        },
        {
            image: "/images/projects/new_era.png",
            title: "New era",
            desc: "A small LAN multi-player FPS game project",
            technologies: ["unity", "c#"],
            github: "https://github.com/Srcyax/new-era",
            site: ""
        },
        {
            image: "/images/projects/the_carlos.png",
            title: "The Carlos",
            desc: "A small old LAN multi-player FPS horror game project",
            technologies: ["unity", "c#"],
            github: "https://github.com/Srcyax/TheCarlosMirror",
            site: ""
        },
        {
            image: "/images/projects/place_holder.png",
            title: "Coming soon",
            desc: "empty...",
            technologies: ["none"],
            github: "https://github.com/Srcyax/coming-soon",
            site: ""
        }
    ];

    return (
        <main>
            <div className="flex flex-col items-center">
                <h1 className="text-3xl mt-10">Projects</h1>
                <div className="grid grid-cols-3 grid-rows-none max-[766px]:grid-cols-1 max-[925px]:grid-cols-2">
                    {projects.map((project, index) => (
                        <CardProject
                            key={index}
                            image={project.image}
                            title={project.title}
                            desc={project.desc}
                            technologies={project.technologies}
                            github={project.github}
                            site={project.site}
                        />
                    ))}
                </div>
                
            </div>
        </main>                             
    )
}