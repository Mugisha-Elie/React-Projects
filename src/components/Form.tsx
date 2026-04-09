export default function Form(){
    function handleSubmit(event: React.SubmitEvent<HTMLFormElement>){
        const formData = new FormData(event.currentTarget)
        alert(`Hello ${formData.get("firstname")} ${formData.get("lastname")}`)
    }
    return(
        <div
        className="flex justify-center items-center mt-10"
        >
            <form action=""
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-3 w-[35%] p-5"
            >
                <input 
                type="text" 
                name="firstname"
                placeholder="Firstname"
                className="border border-gray-400 rounded-lg px-3 py-1 w-full"
                />

                <input 
                type="text"
                name="lastname"
                placeholder="LastName"
                className="border border-gray-400 rounded-lg px-3 py-1 w-full"
                />

                <button
                className="bg-red-600 w-full text-white font-bold text-3xl rounded-lg px-3 py-1 cursor-pointer"
                >Greet me</button>
            </form>
        </div>
    )
}