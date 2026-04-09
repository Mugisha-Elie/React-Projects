import type { User } from "../types/User"
import { useState, useEffect } from 'react'


export default function APIFetching(){
    const [users, setUsers] = useState<User[]>([])
    const [isFetching, setIsFetching] = useState(false)
    const [isLoading, setIsLoading] = useState(false);

    function handleFetch(){
        setIsFetching(prev => !prev)
    }

    useEffect(() => {
        const controller = new AbortController()

        async function fetchUsers(){
            if(!isFetching) return;
            setIsLoading(true)
            try{
                const response = await fetch("https://randomuser.me/api/0.8/?results=10", {
                    signal: controller.signal
                })

                if(!response.ok){
                    throw new Error(`An HTTP Error occurred ${response.status} ${response.statusText}`)
                }

                const userObj = await response.json()
                
                const users: User[] = userObj.results
                console.log(users)
                setUsers(users)

            }catch(error){
                setIsLoading(false)
                const message = error instanceof Error && error.name === "AbortError" 
                ? "Fetch Successfully Aborted" 
                : error instanceof Error ? error.message : "Fetch Failed please try again later"

                console.log(message);
            }finally{
                setIsLoading(false)
                setIsFetching(false)
            }
        }

        fetchUsers()

        return () => {
            controller.abort();
        }
    }, [isFetching])

    return (
        <div
        className="flex justify-center items-center mt-10"
        >
            <div
            className="flex flex-col items-center gap-10"
            >
                <button
                onClick={handleFetch}
                className="px-5 py-2 bg-red-500 text-white font-bold text-2xl rounded cursor-pointer"
                >
                    Fetch Random
                </button>

                {isLoading 
                ? ( <p className="text-lg">Loading...</p> ) 
                : users.length > 0 && (
                    <div
                    className="bg-[#E1F6DC] p-10 grid grid-cols-2 gap-5"
                    >
                        {users.map(user => (
                            <div
                            key={user.user.email}
                            className="cursor-pointer group relative"
                            >
                                <div
                                className="bg-slate-100 p-3 rounded-lg flex flex-col items-center gap-5 transition-all duration-500 group-hover:invisible group-hover:opacity-0"
                                >
                            
                                    <img className="rounded-full" src={user.user.picture.large} alt="profile picture" />
                                

                                    <div>
                                        <h2 className="flex gap-1">
                                            <span className="text-gray-500 italic">Name:</span>
                                            <span>
                                                {user.user.name.title[0].toUpperCase() + user.user.name.title.slice(1)} 
                                            </span> 
                                            <span>{user.user.name.first[0].toUpperCase() + user.user.name.first.slice(1)}</span> 
                                            <span>{user.user.name.last.toUpperCase()}</span>
                                        </h2>

                                        <p className="flex gap-1">
                                            <span className="text-gray-500 italic">Username:</span>
                                            <span>{user.user.username}</span>
                                        </p>

                                        <p className="flex gap-1">
                                            <span className="text-gray-500 italic">Email:</span>
                                            <span>{user.user.email}</span>
                                        </p>
                                    </div>
                                </div>

                                <div
                                className="absolute inset-0 p-5 flex flex-col items-start text-justif opacity-0 transition-all duration-500 group-hover:opacity-100 bg-slate-100"
                                >
                                    <h2 className="font-bold">More Information</h2>
                                    <p className="">Date Of Birth: {new Date(user.user.dob).toDateString()}</p>
                                    <p
                                    className="flex flex-col p-2"
                                    >
                                        <span className="font-semibold">Home Address:</span>

                                        <span 
                                        className="text-gray-500 italic">State: {user.user.location.state}</span>

                                        <span
                                        className="text-gray-500 italic"
                                        >City: {user.user.location.city}</span>

                                        <span
                                        className="text-gray-500 italic"
                                        >Street: {user.user.location.street}</span>
                                    </p>
                                </div>
                            </div>
                            
                        ))}
                    </div>
                )}

                
            </div>
        </div>
    )
}