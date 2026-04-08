interface ListProps{
    list: string[];
    children?: React.ReactNode;
}

export default function CustomList({list}: ListProps){
    return(
        <>
            {list.map(item => (
                <li className="border-b p-1 text-center">{item}</li>
            ))}
        </>
    )
}