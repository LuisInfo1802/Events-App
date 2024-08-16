import Carrousel from "../Components/Carrousel";
import CardsEvents from "../Components/CardsEvents";
import EventList from "../Components/EventsList";
import ShowEvents from "../Components/ShowEvents";
import CardArtist from "../Components/CardsArtist";

function HomePage() {
  return (
    <>
    <div className="">
   
      <Carrousel></Carrousel>
      <EventList></EventList>
      <ShowEvents></ShowEvents>
      <CardArtist></CardArtist>
    </div>
    </>
  );
}

export default HomePage;
