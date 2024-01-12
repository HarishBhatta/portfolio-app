import arrow from "../assets/arrow.png"
let FooterSection = () => {
    return(
        <>
             <div className="bg-grad-image w-full h-310 bg-cover pt-60">
                <div className="w-1200 h-150 border-black border-t-3 ml-60px flex gap-315">
                    <div className="w-405 h-107 mt-40">
                        <p className="font-sans font-normal text-bm ">I would be thrilled to be part <br /> of your internship program</p>
                        <img src={arrow} alt="arrow" className="mt-2" />
                    </div>
                    <div className="w-405 h-107 mt-40">
                    <p className="font-sans font-normal text-bm ">
                    hey@jpthedio.com <br />
                    0999-9999-999
                    </p>
                    <ul className="h-10 w-355 mt-2 flex gap-10">
                        <li className="font sans font-normal text-sm underline underline-offset-2"><a href="">View Resume</a></li>
                        <li className="font sans font-normal text-sm underline underline-offset-2"><a href="">Linkedin</a></li>
                        <li className="font sans font-normal text-sm underline underline-offset-2"><a href="">Dribble</a></li>
                    </ul>
                    </div>
                </div>
        
        </div>
        </>
    )
   
}
export default FooterSection