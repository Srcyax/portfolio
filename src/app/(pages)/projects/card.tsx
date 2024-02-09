export default function CardProject({image, title} : {image : string, title : string}){
    return (
        <div className="border-2 border-indigo-600 rounded-lg border-purple opacity-50 hover:opacity-100 transition 1.5s w-60 h-auto p-5 flex flex-col items-center">
            <img className="p-5" width={200} src={image} alt="" />
            <h1 className="text-2xl relative right-20">{title}</h1>
            <p className="text-center text-wrap text-gray">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum adipisci ut aliquam mollitia totam nam fugit illo esse minima ex vel, maiores quo repellat, et voluptas perspiciatis repellendus.</p>
        </div>
    )
}