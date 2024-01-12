import MakeLogo from "../assets/MakeLogo.svg"
let HeaderContent = () => {
    return(
        <>
        <div className= "text-center w-38 h-40 mt-64 items-center flex gap-x-72 ml-120px gap-187">
            <div className=" h-40 w-328 flex flex-col gap-2">
                <div className=" flex gap-1">
                    <h1 className="font-sans font-normal text-6xl grow w1/2 ">Hello,</h1>
                    <img src= {MakeLogo} alt="logo" className="w-1/2" />
                </div>
                <h1 className="font-sans font-normal text-6xl w-97 text-start h-40"> I'm JP Dionsio.  </h1>                    
            </div>
            <div className="h-76 w-30">
                <p className="font-sans font-normal text-3xl h-76 text-start">A senior-year design student who is
                <br />trying to specialize in UI design.</p>
            </div>
        </div>
        </>
    )
}
export default HeaderContent