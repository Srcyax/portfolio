"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react";
import { technologiesUrl } from "@/components/ui/technologies";

export default function About() {
	const [imageLoaded, setImageLoaded] = useState({
		aboutImage: false,
	});

	const handleImageLoad = (imageType: string) => {
		setImageLoaded((prevState) => ({
			...prevState,
			[imageType]: true,
		}));
	};

	return (
		<div className="flex flex-col justify-center py-11 text-center">
			<h1 className="text-4xl">About me</h1>
			<div className="flex flex-col md:flex-row justify-center my-24 gap-0 md:gap-48 items-center h-96 ">
				<div className="flex flex-col py-16 md:min-w-96 md:max-w-96">
					<h1 className="text-2xl text-center">
						Hello, I&apos;m <strong className="text-purple hover:animate-pulse">Luiz Philipe</strong> and
						I&apos;m a developer! I currently intend to work in the Web developer area.
					</h1>
					<div className="flex flex-col items-center">
						<h1 className="text-3xl mt-10">Technologies</h1>
						<div className="grid grid-cols-5 grid-rows-2 gap-5 p-5 h-40">
							{technologiesUrl.map((element, index) => (
								<div key={index} className="w-24 -mx-8 ">
									<div
										key={index}
										className="group grid place-items-center transition-all duration-200 ease"
									>
										<img
											key={index}
											className="opacity-70 group-hover:opacity-100 group-hover:p-1 transition-all duration-200 ease"
											width={30}
											src={element[1]}
										/>
										<p
											key={index}
											className="text-[1px] group-hover:text-[11px] opacity-0 group-hover:opacity-100 transition-all duration-200 ease"
										>
											{element[0]}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<div>
					{!imageLoaded.aboutImage ? (
						<Skeleton className="w-56 h-56 rounded-tl-[120px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[120px] md:w-96 md:h-96" />
					) : null}
					<LazyLoadImage
						className={
							imageLoaded.aboutImage
								? "w-56 h-56 shadow-lg shadow-purple rounded-tl-[120px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[120px] transition 1.5s hover:animate-pulse md:w-96 md:h-96"
								: ""
						}
						src="images/about/luiz_selfie.png"
						beforeLoad={() => handleImageLoad("aboutImage")}
					/>
				</div>
			</div>
		</div>
	);
}
