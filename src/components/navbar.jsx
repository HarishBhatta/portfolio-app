import { Link } from "react-router-dom"

const NavBar = () => {
   return(
    <>
        <div className="flex gap-102 justify-start ml-120px pt-60 mr-14 w-101 h-78">
            <div>
                <h1 className="font-sans font-bold text-5xl leading-11"><a href="#">jpdio</a></h1>
            </div>
            <div className="mt-6 w-64 h-24">
                <ul className="flex justify-evenly gap-11 h-full" >
                    <li className="font-sans underline underline-offset-2 font-normal text-xl hover:text-gray-600"><Link to= "/"> Home</Link></li>
                    <li className="font sans underline underline-offset-2 font-normal text-xl hover:text-gray-600"><a href="#">About</a></li>
                    <li className=" font-sans underline underline-offset-2 font-normal text-xl hover:text-gray-600"><a href="#">Contact</a></li>
                </ul>
            </div>
                       
        </div>
           
    </>
        
   ); 
   
}
export default NavBar