"use client";

import { Github, Globe, Key } from "lucide-react";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function CardProject({
	image,
	title,
	desc,
	technologies,
	github,
	site,
}: {
	image: string;
	title: string;
	desc: string;
	technologies: string[];
	github: string;
	site: string;
}) {
	const [imageLoaded, setImageLoaded] = useState({
		projectImage: false,
		techImage: false,
	});

	const handleImageLoad = (imageType: string) => {
		setImageLoaded((prevState) => ({
			...prevState,
			[imageType]: true,
		}));
	};

	const technologiesUrl = [
		[
			"c#",
			"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
		],
		[
			"unity",
			"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg",
		],
		[
			"javascript",
			"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
		],
		[
			"typescript",
			"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
		],
		[
			"php",
			"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
		],
		[
			"react",
			"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
		],
		[
			"html5",
			"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
		],
		[
			"css3",
			"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
		],
		[
			"nextjs",
			"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
		],
		[
			"nodejs",
			"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
		],
		[
			"tailwindcss",
			"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
		],
		["none", "https://img.icons8.com/color/48/cancel-2--v1.png"],
	];

	return (
		<div className="m-12 border-2 border-indigo-600 rounded-lg border-purple hover:shadow-neon opacity-50 hover:opacity-100 w-60 h-auto p-5 flex flex-col items-center transition-all duration-200 ease">
			{!imageLoaded.projectImage ? (
				<Skeleton className="w-40 h-40 rounded-full" />
			) : null}
			<LazyLoadImage
				className={imageLoaded.projectImage ? "w-40 h-40 rounded-full" : ""}
				src={image}
				beforeLoad={() => handleImageLoad("projectImage")}
			/>
			<div className="flex flex-col items-center justify-between gap-1">
				<h1 className="text-2xl">{title}</h1>
				<div className="flex flex-row gap-1 w-40 h-6 justify-center">
					{technologies.map((tech, index) => (
						<div key={index}>
							{technologiesUrl
								.filter((t) => t[0] === tech)
								.map((filteredTech, index) => (
									<div key={index} className="group grid place-items-center">
										{!imageLoaded.techImage ? (
											<Skeleton className="w-6 h-6 rounded-full" />
										) : null}
										<LazyLoadImage
											className={
												imageLoaded.techImage
													? "opacity-70 hover:opacity-100 hover:w-5 transition-all duration-200 ease"
													: ""
											}
											width={22}
											src={filteredTech[1]}
											beforeLoad={() => handleImageLoad("techImage")}
										/>
										<p
											key={index}
											className="text-[1px] group-hover:text-[10px] opacity-0 group-hover:opacity-100 transition-all duration-200 ease"
										>
											{filteredTech[0]}
										</p>
									</div>
								))}
						</div>
					))}
				</div>
			</div>
			<p className="text-center break-words  text-gray py-5">{desc}</p>
			<div className="flex flex-row mt-auto gap-3">
				<a
					className="group/github text-center p-2 text-[12px] hover:text-[13px] border-2 border-indigo-600 border-purple bg-transparent hover:bg-purple hover:border-transparent rounded-lg transition-all duration-500 ease"
					href={github}
					target="_blank"
				>
					<Github width={20} />
				</a>
				<a
					className="group/site text-center p-2 text-[12px] hover:text-[13px] border-2 border-indigo-600 border-purple bg-transparent hover:bg-purple hover:border-transparent rounded-lg transition-all duration-500 ease"
					href={site}
					target="_blank"
				>
					<Globe width={20} />
				</a>
			</div>
		</div>
	);
}
