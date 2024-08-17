import { IoLogoYoutube } from "react-icons/io";
import { FiInstagram } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";

function CardArtist({banda}) {
  return (
   
     

        
        <div className="flex  flex-col  sm:flex-row sm:justify-center ">

      {/*Aqui comienza el card */}
    
          <div className="absolute -mt-20 w-full flex justify-center">
            <div className="h-32 w-32">
              <img
                src={banda.img}
                className="rounded-full object-cover h-full w-full shadow-md"
              />
            </div>
          </div>
          <div className="px-6 mt-16">
            <h1 className="font-bold text-3xl text-center mb-1">{banda.name}</h1>
            <p className="text-gray-200 text-sm text-center">
              {banda.idBandType}
            </p>
            <p className="text-center text-gray-300 text-base pt-3 font-normal text-ju">
                {banda.decription}
            </p>
            <div className="w-full flex justify-center pt-5 pb-5">
              <a href="#" className="mx-5">
                <div aria-label="Youtube">
                  <IoLogoYoutube />
                </div>
              </a>
              <a href="#" className="mx-5">
                <div aria-label="Twitter">
                  <BsTwitterX />
                </div>
              </a>
              <a href="#" className="mx-5">
                <div aria-label="Instagram">
                  <FiInstagram />
                </div>
              </a>
            </div>
          </div>















        
      </div>



        
  );
}

export default CardArtist;
