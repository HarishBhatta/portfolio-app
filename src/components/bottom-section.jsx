import photo4 from "../assets/photo4.png"
let BottomSection = () => {
    return(
        <>
            <div className="h-650 w-full flex px-24 gap-10">
                <div className="w-600 h-561 mt-4">
                    <h1 className="font-sans font-normal text-nm w-580 h-58">UI Designer / Student</h1>
                    <div>
                        <p className=" py-40 font-sans font-normal italic text-im">
                        Design is my passion; mainly focused on,<br />designing visual interfaces.<br/><br/>
                        I like solving user problems with a design thinking<br/> methodology.<br/><br/>
                        Now I’m in my 4th year of Bachelor of Fine Arts<br/> Major in Information Design in Ateneo de Manila<br/> ⏤ currently seeking internship opportunities.
                        </p>
                        <p className="font-sans font-normal text-sm h-24">Main SoftwareS </p>
                        <p className="font-sans font-normal text-im h-29 pb-40">Adobe CC, Figma, Webflow,<br /><br /></p>
                        <p className="font-sans font-normal text-sm h-24">Main Skills</p>
                        <p className="font-sans font-normal text-im h-29">Prototyping, Project Management, Art Direction</p>
                    </div>
                   
                </div>
                <div className="h-600 w-600">
                    <img src={photo4} alt="" />
                </div>
            </div>
        </>
    )
}
export default BottomSection