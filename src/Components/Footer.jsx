
import { Link } from "react-router-dom";

function Footer()
{
    return(
        < >
        <div class="bg-gray-700 mt-20">
        <div class="max-w-screen-lg px-4 sm:px-2 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
            <div class="p-5">
            <Link to='/' className="text-5xl text-white uppercase font-bold ">FestiMex</Link>
            </div>
            <div class="p-5">
                <div class="text-sm uppercase text-gray-50 font-bold">Si te interesa...</div>
                <a class="my-3 block" href="/#">Documentation <span class="text-teal-600 text-xs p-1"></span></a><a
                    class="my-3 block" href="/#">Tutorials <span class="text-teal-600 text-xs p-1"></span></a><a
                    class="my-3 block" href="/#">Support <span class="text-teal-600 text-xs p-1">New</span></a>
            </div>
            <div class="p-5">
                <div class="text-sm uppercase text-gray-50 font-bold">Contacto</div>
                <a class="my-3 block" href="/#">Linkedin <span class="text-teal- text-xs p-1"></span></a><a
                    class="my-3 block" href="/#">Github <span class="text-teal-600 text-xs p-1"></span></a><a
                    class="my-3 block" href="/#">Gmail <span class="text-teal-600 text-xs p-1"></span></a>
            </div>
            <div class="p-5">
                <div class="text-sm uppercase text-gray-50 font-bold">Contact us</div>
                <a class="my-3 block" href="/#">XXX XXXX, Floor 4 San Francisco, CA
                    <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">contact@company.com
                    <span class="text-teal-600 text-xs p-1"></span></a>
            </div>
        </div>
    </div>
    
    <div class="bg-gray-700 pt-2">
        <div class="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col
          max-w-screen-lg items-center">
            <div class="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                <a href="/#" class="w-6 mx-1">
                  
                </a>
                <a href="/#" class="w-6 mx-1">
                    

                </a>
                <a href="/#" class="w-6 mx-1">
                    






                </a>
                <a href="/#" class="w-6 mx-1">
                   





                </a>
                <a href="/#" class="w-6 mx-1">
                  





                </a>
            </div>
            <div class="my-5">© Copyright 2020. All Rights Reserved.</div>
        </div>
    </div>
    
 


    </>
    )
}

export default Footer