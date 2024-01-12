import { Link } from "react-router-dom";

let BodySection=(props) => {
return(
    <>
        <div className="flex gap-60 mt-100 ml-120px w-1200 h-493 border-black border-b-3" >
            <div className="w-540 h-450">
                <p className="font-sans font-normal text-sm w-326 h-19">{props.title}</p>
                <p className="font-sans font-normal text-mm w-540 h-87 mt-38 mb-284">This is a sentence about the project. This is a sentence about the project. This is a sentence about the project. </p>
                <Link to={props.site} className="h-24 w-204 font-sans font-normal text-sm underline underline-offset-4 visited:font-sans visited:font-normal visited:text-sm ">More about this project</Link>

             </div>
             <div className="w-600 h-450">
                <img src={props.image} alt=""/>
            </div>
        </div>
        
    </>
);
}
export default BodySection