import {createContext,useState,useEffect} from 'react'
import {events as data} from '../data/events'

export const EventContext=createContext()

export function EventContextProvider(props)
{
    const [events,setEvents] = useState([]);


    useEffect(()=>{
        setEvents(data);
    },[])

    return(
        <EventContext.Provider value={{
            events:events
        }}>{props.children}
        </EventContext.Provider>
    )   
}