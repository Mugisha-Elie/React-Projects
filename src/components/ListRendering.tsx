import CustomList from "./CustomList";

export default function ListRendering(){
    const animals = ["dog", "cat", "chicken", "cow", "sheep", "horse"];

    return(
        <div
        className="h-screen flex flex-col items-center justify-center"
        >
            <div>
                <h1 className="font-semibold text-xl">A list of animals:</h1>
                {/* <ul
                className="list-disc list-inside"
                >
                    {animals.map(animal => (
                        <li>{animal}</li>
                    ))}
                    
                </ul> */}

                <ul className="border">
                    <CustomList list={animals}/>
                </ul>
            </div>
        </div>
    )
}