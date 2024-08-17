
import { useContext } from 'react'
import {EventContext} from '../Context/EventsContect'
import CardsArtist from './CardsArtist'

function CardsList()
{
    const {bands} = useContext(EventContext)
    if(bands.length===0)
    {
        return(
            <h1>No hay eventos proximos!</h1>
        )
    }
    return(
        <>
         <p className="text-center text-white text-5xl font-bold">
        Sobre nuestros artistas..
      </p>

      <div className="w-full h-screenpx-10 pt-10 text-white">
      
        {bands.map((banda)=>(
              <div className="relative   max-w-sm mx-auto mt-24 ">

              <div className="rounded overflow-hidden shadow-md bg-gray-700">
      
            
            <CardsArtist key={banda.id} banda={banda}></CardsArtist>
            </div>   </div>
            
        ))}
        
      </div>
        
        
        </>
    )



}


export default CardsList