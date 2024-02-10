import CardProject from "./card"

export default function Projects(){

    return (
        <main>
            <div className="flex flex-col items-center">
                <h1 className="text-3xl mt-10">Projects</h1>
                <div className="grid grid-cols-3 grid-rows-none max-[766px]:grid-cols-1 max-[925px]:grid-cols-2">
                    <CardProject 
                        image="https://cdn.discordapp.com/attachments/826103334153879614/1205562573798248448/IMG_20240103_004200_061.jpg?ex=65d8d2a3&is=65c65da3&hm=377deb82d3672e379a354477834b030af7d92261cd876ec196c70f67858d4554&" 
                        title = "Portfolio"
                        desc="My portfolio project" 
                        technologies={
                            ["nextjs", "tailwindcss", "nodejs", "javascript", "react"]
                        }
                    />
                    <CardProject 
                        image="https://cdn.discordapp.com/icons/1167103676528205905/4e3a7390553c66162256f2f5a9714e71.png" 
                        title = "Vision store"
                        desc="A small project for a sales website" 
                        technologies={
                            ["html5", "css3", "javascript", "php"]
                        }
                    />
                    <CardProject 
                        image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRvfQSPGA9awNjg9S7JXF-EiL36WwfrQQ4qyKNtqYR_uGbEsBxM" 
                        title = "New era"
                        desc="A small LAN multi-player FPS game project" 
                        technologies={
                            ["unity", "c#"]
                        }
                    />
                    <CardProject 
                        image="https://cdn.discordapp.com/icons/804451834214219797/62bd5c0be3686cbf4d441aee480c0641.png" 
                        title = "The Carlos"
                        desc="A small old LAN multi-player FPS horror game project" 
                        technologies={
                            ["unity", "c#"]
                        }
                    />
                    <CardProject 
                        image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXp7vG6vsG3u77s8fTCxsnn7O/f5OfFyczP09bM0dO8wMPk6ezY3eDd4uXR1tnJzdBvAX/cAAACVElEQVR4nO3b23KDIBRA0ShGU0n0//+2KmO94gWZ8Zxmr7fmwWEHJsJUHw8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwO1MHHdn+L3rIoK6eshsNJ8kTaJI07fERPOO1Nc1vgQm2oiBTWJ+d8+CqV1heplLzMRNonED+4mg7L6p591FC+133/xCRNCtd3nL9BlxWP++MOaXFdEXFjZ7r8D9l45C8y6aG0cWtP/SUGhs2d8dA/ZfGgrzYX+TVqcTNRRO9l+fS5eSYzQs85psUcuzk6igcLoHPz2J8gvzWaH/JLS+95RfOD8o1p5CU5R7l5LkfKEp0mQ1UX7hsVXqDpRrifILD/3S9CfmlUQFhQfuFu0STTyJ8gsP3PH7GVxN1FC4t2sbBy4TNRTu7LyHJbqaqKFw+/Q0ncFloo7CjRPwMnCWqKXQZ75El4nKC9dmcJaou9AXOE5UXbi+RGeJygrz8Uf+GewSn9uXuplnWDZJ7d8f24F/s6iq0LYf9olbS3Q8i5oKrRu4S9ybwaQ/aCkqtP3I28QDgeoK7TBya/aXqL5COx67PTCD2grtdOwH+pQV2r0a7YVBgZoKwwIVFQYG6ikMDVRTGByopjD8ATcKb0UhhRTe77sKs2DV7FKSjId18TUEBYVyLhUThWfILHTDqmI85/2RWWjcE/bhP6OD7maT3h20MHsA47JC3PsW0wcwLhv9t0OOPOIkCn21y2bXXwlyylxiYMPk1SuCSmpfK8bNQvIrpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwNX4BCbAju9/X67UAAAAASUVORK5CYII=" 
                        title = "Coming soon"
                        desc="empty..." 
                        technologies={
                            ["none"]
                        }
                    />
                    <CardProject 
                        image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXp7vG6vsG3u77s8fTCxsnn7O/f5OfFyczP09bM0dO8wMPk6ezY3eDd4uXR1tnJzdBvAX/cAAACVElEQVR4nO3b23KDIBRA0ShGU0n0//+2KmO94gWZ8Zxmr7fmwWEHJsJUHw8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwO1MHHdn+L3rIoK6eshsNJ8kTaJI07fERPOO1Nc1vgQm2oiBTWJ+d8+CqV1heplLzMRNonED+4mg7L6p591FC+133/xCRNCtd3nL9BlxWP++MOaXFdEXFjZ7r8D9l45C8y6aG0cWtP/SUGhs2d8dA/ZfGgrzYX+TVqcTNRRO9l+fS5eSYzQs85psUcuzk6igcLoHPz2J8gvzWaH/JLS+95RfOD8o1p5CU5R7l5LkfKEp0mQ1UX7hsVXqDpRrifILD/3S9CfmlUQFhQfuFu0STTyJ8gsP3PH7GVxN1FC4t2sbBy4TNRTu7LyHJbqaqKFw+/Q0ncFloo7CjRPwMnCWqKXQZ75El4nKC9dmcJaou9AXOE5UXbi+RGeJygrz8Uf+GewSn9uXuplnWDZJ7d8f24F/s6iq0LYf9olbS3Q8i5oKrRu4S9ybwaQ/aCkqtP3I28QDgeoK7TBya/aXqL5COx67PTCD2grtdOwH+pQV2r0a7YVBgZoKwwIVFQYG6ikMDVRTGByopjD8ATcKb0UhhRTe77sKs2DV7FKSjId18TUEBYVyLhUThWfILHTDqmI85/2RWWjcE/bhP6OD7maT3h20MHsA47JC3PsW0wcwLhv9t0OOPOIkCn21y2bXXwlyylxiYMPk1SuCSmpfK8bNQvIrpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwNX4BCbAju9/X67UAAAAASUVORK5CYII=" 
                        title = "Coming soon"
                        desc="empty..." 
                        technologies={
                            ["none"]
                        }
                    />
                </div>
                
            </div>
        </main>                             
    )
}