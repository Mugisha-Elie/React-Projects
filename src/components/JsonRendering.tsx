import { useState, useEffect } from "react"
import type { Joke } from "../types/Joke"
import JokeCard from "./JokeCard"

export default function JsonRendering(){
    const [jokes, setJokes] = useState<Joke[]>([])

    useEffect(() => {
        const controller = new AbortController();

        async function fetchJokes(){
            try{
                const response = await fetch('/data/jokes.json', {signal: controller.signal});
                if(!response.ok){
                    throw new Error("An unknown Server Error ocurred")
                }

                setJokes(await response.json())
            }catch(error){
                const message = error instanceof Error && error.name === "AbortError" 
                ? "Fetch Aborted" 
                : error instanceof Error ? error.message : "An Error Occurred";
                console.log(message);
            }
        }

        fetchJokes()

        return () => {
            controller.abort()
        }

    }, [])
    return(
        <div
        className="p-5 h-screen"
        >
            <div
            className="bg-green-300 p-10 grid grid-cols-2 h-full gap-10"
            >
                {jokes.map(joke => (
                    <JokeCard 
                    key={joke.id}
                    setup={joke.setup}
                    punchline={joke.punchline}
                    />
                ))}
            </div>
        </div>
    )
}