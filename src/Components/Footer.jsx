
import { Link } from "react-router-dom";

function Footer()
{
    return(
        < >
        <div class="  bg-gray-700 mt-20">
        <div class="h-32 max-w-screen-lg px-4 sm:px-2 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
            <div class="p-5">
            <Link to='/' className="text-5xl text-white uppercase font-bold ">FestiMex</Link>
            </div>
            <div class="p-5 text-white">
                <div class="text-sm uppercase text-gray-50 font-bold">Si te interesa...</div>
                <a class="my-3 block" href="/#">Inicio <span class="text-teal-600 text-xs p-1"></span></a><a
                    class="my-3 block" href="/#">Eventos <span class="text-teal-600 text-xs p-1"></span></a><a
                    class="my-3 block" href="/#">Bandas<span class="text-teal-600 text-xs p-1">Nuevo!</span></a>
            </div>
            <div class="p-5 text-white">
                <div class="text-sm uppercase text-gray-50 font-bold">Contacto</div>
                <a class="my-3 block" href="https:/www.linkedin.com/in/luis-angel-sanchez-ocegueda">Linkedin <span class="text-teal- text-xs p-1"></span></a><a
                    class="my-3 block" href="/#">Github <span class="text-teal-600 text-xs p-1"></span></a><a
                    class="my-3 block" href="/#">Gmail <span class="text-teal-600 text-xs p-1"></span></a>
            </div>
           
        </div>
    </div>
    
    <div class="bg-gray-700 pt-2">
        <div class="flex pb-5 px-3 m-auto pt-5   text-white text-sm flex-col
          max-w-screen-lg items-center mt-0 ">
          
            <div class="my-5 text-2xl text-center"> Todos los derechos reservados. © Copyright 2024.  <br></br> Luis Angel Sanchez Ocegueda <br /> </div>

        </div>
    </div>
    
 


    </>
    )
}

export default Footer