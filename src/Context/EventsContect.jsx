import {createContext,useState,useEffect} from 'react'
import {events as data} from '../data/events'
import {bands as bandas} from '../data/events'

export const EventContext=createContext()

export function EventContextProvider(props)
{
    const [events,setEvents] = useState([]);
    const [bands,setBands]=useState([]);

    useEffect(()=>{
        setEvents(data);
        setBands(bandas);
    },[])

    return(
        <EventContext.Provider value={{
            events:events,
            bands:bands
        }}>{props.children}
        </EventContext.Provider>
    )   
}