import NavBar from "./navbar"
import HeaderContent from "./headercontent"
let Header = () =>
{
    return(
        <>
        
        <div className= "bg-grad-image h-37 w-full bg-cover">
            <NavBar className= "mt-60px" />
            <HeaderContent />
        </div>    
        </>
    )
}
export default Header