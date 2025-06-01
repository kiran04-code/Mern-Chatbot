export const Headers =()=>{
    const chat = [{chat:"pl"}]
    return(
       <div>
          <h1 className=" font-bold text-2xl text-center">
  👋   <span  style={{ color: "rgb(252, 124, 104)" }}>Hello</span>,How can I help you today? </h1>
       {
        chat && chat.length === 0 &&(
            <h1 className="font-bold text-2xl text-center"><span  style={{ color: "rgb(252, 124, 104)" }}>create</span> New Chat to Continue?</h1>
        )
       }
     
       </div>
    )
}