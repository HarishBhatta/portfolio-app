import FooterSection from "./footer";
import NavBar from "./navbar";
import mobile from "../assets/mobile.png"
import john from "../assets/John.png"
import photo2 from "../assets/photo2.png"
import photo3 from "../assets/photo3.png"
let SecondPage = () => {
    return(
        <>
            <div className = "h-1154 w-full">
                <div className= "bg-grad-image h-600 w-full bg-cover">
                <NavBar />
                </div>
                <div className= "w-10/12 h-979 absolute top-175 left-110">
                    <img src={mobile} alt="image" className="w-800 h-600 ml-202"/>
                    <div className= "mt-60px w-1200 h-319 flex gap-0 border-black border-b-3 ">
                        <div className= "w-600 h-64">
                            <h1 className="font-sans font-normal text-tm">01 / CINEMA SEAT BOOKING APP</h1>
                            <p className="font-sans font-normal text-im">This is a sentence about the project. This is a <br /> sentence about the project. This is a sentence <br /> about the project. </p>
                        </div>
                        <div className= "h-150 w-302 mt-106">
                            <p className="font-sans font-normal text-sm">SOFTWARES </p>
                            <p className="font-sans font-normal text-mm">Figma, Adobe After Effects</p>
                            <br /><br />
                            <p className="font-sans font-normal text-sm">Duration</p>
                            <p className="font-sans font-normal text-mm">16 Hours</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-1610 pt-100 pb-12 font-sans font-normal  border-black border-b-3">
                <div className="w-900 ml-270">
                <h1 className="text-3xl">CHALLENGE</h1>
                <p className="text-mm">This is a sentence about the project. This is a sentence about the project. This is a sentence about the project. This is a sentence about the project. This is a sentence about the project. This is a sentence about the project. This is a sentence about the project. This is a sentence about the project. </p>
                </div>
                <div className=" w-900 ml-270 mt-60px">
                <h1 className="text-3xl">SOLUTIONS</h1>
                <p className="text-mm">This is a sentence about the project. This is a sentence about the project. This is a sentence about the project. This is a sentence about the project. This is a sentence about the project. This is a sentence about the project. This is a sentence about the project. This is a sentence about the project. This is a sentence about the project. 
                <br /><br />
                This is a sentence about the project. This is a sentence about the project. This is a sentence about the project. This is a sentence about the project. This is a sentence about the project.</p>
                </div>
                <div className="w-900 ml-270 mt-60px">
                <h1 className="text-3xl">LEARNINGS</h1>
                <p className="text-mm ">This is a sentence about the project. This is a sentence about the project. This is a sentence about the project. This is a sentence about the project. This is a sentence about the project. This is a sentence about the project. 
                <br /><br />
                This is a sentence about the project. This is a sentence about the project. This is a sentence about the project. This is a sentence about the project.</p>
                </div> 
                <div className="mt-60px ml-325 h-597 w-796 ">
                <img src={john} alt="" className="h-597 w-796" />
            </div>              
            </div>
            <div className="h-534 w-full ">
                <div className="h-96 w-900 ml-270 mt-11">
                    <h1 className="font-sans font-normal text-3xl ">OTHER PROJECTS</h1>
                    <div className="mt-4 flex gap-24 h-335">
                        <div className="w-405">
                            <img src={photo2} alt="image" />
                            <h1 className="mt-4 font-sans font-normal text-sm">02 / SUN SHINE FEATURE</h1>
                        </div>
                        <div className=" w-405">
                            <img src={photo3} alt="image" />
                            <h1 className="mt-4 font-sans font-normal text-sm">03 / BEACH RESORT WEBSITE</h1>
                        </div>
                    </div>
                </div>
            </div>
            
            <FooterSection />
            
        </>
        

    );
}
export default SecondPage