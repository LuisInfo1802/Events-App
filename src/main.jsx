import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navigation from './Components/Navigation.jsx'
import { EventContextProvider } from './Context/EventsContect.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <EventContextProvider>
    <App />
    </EventContextProvider>
  </StrictMode>,
)
