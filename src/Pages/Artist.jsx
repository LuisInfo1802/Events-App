import React, { useContext,useEffect,useState } from "react";
import { EventContext } from "../Context/EventsContect";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";

function Artist() {

  const location = useLocation();
  const name = location.state.name;
  const img = location.state.img;
  const description=location.state.description
 
  return(
      <>
       <div className="focus md:mx-auto md:h-max mt-20 md:w-max px-10 dark:bg-gray-700">
    <div className="pt-10 ">
        <div className="container mx-auto">
            <div className="flex flex-wrap items-center pb-12">
                <div className="md:w-1/2 lg:w-2/3 w-full xl:pr-20 md:pr-6">
                    <div className="py-2 text-color">
                        <h1 role="heading"
                            className="mt-0 text-center text-white text-5xl font-bold dark:text-white  lg:text-6xl md:leading-snug tracking-tighter f-f-l 
        ">
                           {name}</h1>
                       <p className="text-md tracking-tight text-justify dark:text-white lg:text-3xl lg:leading-10 md:leading-normal f-f-r py-4 md:py-8">


                         {description}
                       
                       </p>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                    <img className="absolute w-full h-full inset-0 object-cover object-center rounded-md" src={img} alt="A girl enjoying in sunlight" role="img" />
                  
                </div>
            </div>
        </div>
    </div>

</div>
  
      </>
  ) ;
}

export default Artist;
