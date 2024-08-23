
import { Link } from "react-router-dom";

function Footer()
{
    return(
        < >
        <div className="  bg-gray-700 mt-20">
        <div className="h-32 max-w-screen-lg px-4 sm:px-2 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
            <div className="p-5">
            <Link to='/' className="text-5xl text-white uppercase font-bold ">FestiMex</Link>
            </div>
            <div className="p-5 text-white">
                <div className="text-sm uppercase text-gray-50 font-bold">Si te interesa...</div>
                <a className="my-3 block" href="/#">Inicio <span className="text-teal-600 text-xs p-1"></span></a><a
                    className="my-3 block" href="/#">Eventos <span className="text-teal-600 text-xs p-1"></span></a><a
                    className="my-3 block" href="/#">Bandas<span className="text-teal-600 text-xs p-1">Nuevo!</span></a>
            </div>
            <div className="p-5 text-white">
                <div className="text-sm uppercase text-gray-50 font-bold">Contacto</div>
                <a className="my-3 block" href="https:/www.linkedin.com/in/luis-angel-sanchez-ocegueda">Linkedin <span className="text-teal- text-xs p-1"></span></a><a
                    className="my-3 block" href="/#">Github <span className="text-teal-600 text-xs p-1"></span></a><a
                    className="my-3 block" href="/#">Gmail <span className="text-teal-600 text-xs p-1"></span></a>
            </div>
           
        </div>
    </div>
    
    <div className="bg-gray-700 pt-2">
        <div className="flex pb-5 px-3 m-auto pt-5   text-white text-sm flex-col
          max-w-screen-lg items-center mt-0 ">
          
            <div className="my-5 text-2xl text-center"> Todos los derechos reservados. © Copyright 2024.  <br></br> Luis Angel Sanchez Ocegueda <br /> </div>

        </div>
    </div>
    
 


    </>
    )
}

export default Footer