interface Num{
    num: number;
    children: React.ReactNode
}
export default function CustomButton({num, children}: Num){
    return (
        <button
        onClick={() => alert(`You clicked on Button ${num}`)}
        className="px-1 border bg-gray-100 hover:cursor-pointer"
        >
            {children} {num}
        </button>
    )
}