export const LoadingButtonSpinner = ()=>{
    return(
        <div className="inline-block w-5 h-5 border-2 border-t-2  border-r-transparent border-white rounded-full animate-spin" ></div>
    )
}

export const  Loadingsmall = () =>{
    return(
        <div className="flex space-x-2 justify-center items-center">
            <div className="h-4 w-4 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="h-4 w-4 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="h-4 w-4 rounded-full animate-bounce "></div>
        </div>
    )
}