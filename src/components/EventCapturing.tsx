import { useState } from 'react'
import CustomButton from "./CustomButton"

export default function EventCapturing(){
    const [count, setCount] = useState(0)

    const exercises = Array.from({length: 9}, (_, i) => i)
    
    return (
        <div
        className="flex flex-col items-center gap-5"
        >
            <ul
            className="flex justify-center"
            >
                <li><a href="#"
                className="text-blue-600 decoration underline hover:cursor-pointer visited:text-purple-800"
                >Home</a><span className="text-blue-600 mx-2"> | </span></li>
                {exercises.map((e) => (
                    <li><a href="#"
                    className="text-blue-600 decoration underline visited:text-purple-800 hover:cursor-pointer"
                    >Exercise {e + 1} </a> <span className="text-blue-600 mx-2"> | </span></li>
                ))}
            </ul>

            {/* <button
            onClick={() => alert("Clicked!")}
            className="px-1 border bg-gray-100 hover:cursor-pointer"
            >
                Click Me
            </button> */}


            {/* <div 
            className="flex gap-5"
            >
                <CustomButton num={1}>Button</CustomButton>
                <CustomButton num={2}>Button</CustomButton>
                <CustomButton num={3}>Button</CustomButton>
            </div> */}

            <div 
            className='text-center my-3 space-y-3'
            >
                <p>Button has been clicked: {count} times</p>
                <button
                onClick={() => setCount(count => count + 1)}
                className="px-1 border bg-gray-100 hover:cursor-pointer"
                >
                    Click Me
                </button>
            </div>
        </div>
    )
}