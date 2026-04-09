import type { Joke } from "../types/Joke";

export default function JokeCard({setup, punchline}: Partial<Joke>){
    return (
        <div
        className="flex flex-col items-center justify-center gap-3 bg-white shadow-xl rounded-xl"
        >
            <h1 className="font-bold text-2xl">{setup}</h1>
            <p className="text-gray-600">{punchline}</p>
        </div>
    )
}