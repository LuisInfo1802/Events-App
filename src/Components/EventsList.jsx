
import { useContext } from 'react'
import {EventContext} from '../Context/EventsContect'
import CardsEvents from './CardsEvents'

function EventList()
{
    const {events} = useContext(EventContext)
    if(events.length===0)
    {
        return(
            <h1>No hay eventos proximos!</h1>
        )
    }
    return(
        <>
     
         <h2 className=" mt-10 font-sans font-bold text-white text-center text-3xl gap-8 sm:text-6xl mb-10 border-l-4 md:border-l-0 border-teal-950">
        Agenda de Conciertos
      </h2>

      
      <div className="flex  flex-col  sm:flex-row sm:justify-center rounded">
        {events.map((evento)=>(
           
             <div key={evento.id} className="w-[380px] h-[424px] mt-10 first:mt-0 bg-gray-900 sm:mt-0 sm:mr-10 last:mr-0 rounded mb-10">  
            <CardsEvents key={evento.id} event={evento}></CardsEvents>
            </div>
          
        ))}
          </div>  
    
     
      </>
       
    )
}

export default EventList