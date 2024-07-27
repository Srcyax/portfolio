import CardProject from "./card";

export default function Projects() {
	const projects = [
		{
			image: "/images/projects/luiz_selfie.png",
			title: "Portifolio",
			desc: "My portifolio project",
			technologies: ["nextjs", "tailwindcss", "react"],
			github: "https://github.com/Srcyax/portfolio",
			site: "https://portfolio-srcyaxs-projects.vercel.app/",
		},
		{
			image: "/images/projects/yamacha-logo.png",
			title: "Yamacha",
			desc: "Proteja seu jogo com Yamacha anti-cheat",
			technologies: ["nextjs", "tailwindcss", "typescript", "react"],
			github: "https://github.com/Srcyax/",
			site: "https://yamacha-site.vercel.app/",
		},
		{
			image: "/images/projects/netflix.png",
			title: "Netflix clone",
			desc: "Netflix website clone",
			technologies: ["nextjs", "tailwindcss", "react"],
			github: "https://github.com/Srcyax/netflix-clone",
			site: "https://netflix-clone-three-mu-85.vercel.app/",
		},
		{
			image: "/images/projects/place_holder.png",
			title: "Coming soon",
			desc: "empty...",
			technologies: ["none"],
			github: "https://github.com/Srcyax/",
			site: "https://github.com/Srcyax/",
		},
		{
			image: "/images/projects/place_holder.png",
			title: "Coming soon",
			desc: "empty...",
			technologies: ["none"],
			github: "https://github.com/Srcyax/",
			site: "https://github.com/Srcyax/",
		},
		{
			image: "/images/projects/place_holder.png",
			title: "Coming soon",
			desc: "empty...",
			technologies: ["none"],
			github: "https://github.com/Srcyax/",
			site: "https://github.com/Srcyax/",
		},
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
	);
}
