import CardProject from "./card"

export default function Projects(){
    return (
        <main>
            <div className="flex flex-col items-center">
                <h1 className="text-3xl mt-10">Projects</h1>
                <CardProject image="https://placehold.jp/150x150.png" title = "Test"/>
            </div>
        </main>                             
    )
}