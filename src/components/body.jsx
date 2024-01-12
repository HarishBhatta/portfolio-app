import BodySection from "./body-section";
import BottomSection from "./bottom-section";
import photo from "../assets/photo.png";
import photo2 from "../assets/photo2.png";
import photo3 from "../assets/photo3.png";
import FooterSection from "./footer";
const firstString = "01 / CINEMA SEAT BOOKING APP";
const secondString = "02 / SUNSHINE FEATURE";
const thirdString = "03 / BEACH RESORT WEBSITE";
let Body= () => {
    return(
        <>  
            <div className="pb-24">
                <BodySection title= {firstString} site="/detail" image= {photo}/>
                <BodySection title= {secondString} site= "#" image={photo2}/>
                <BodySection title= {thirdString} site= "#" image={photo3}/>
            </div>        
            <BottomSection />
            <FooterSection />               
        </>
    )
}
export default Body