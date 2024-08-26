import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
     <header className="  lg:px-16 px-4 bg-gray-900 flex flex-wrap items-center py-4 shadow-md ">
    <div className="font-bold text-center flex-1 md:flex md:justify-between items-center ">
        <Link to='/' className="text-5xl text-white uppercase  ">FestiMex</Link>
    </div>

    
    

    <div className="text-center md:flex md:items-center md:w-auto w-full" id="menu">
        <nav>
            <ul className="md:flex items-center justify-between  text-2xl text-white pt-4 md:pt-0">
                <li><Link to='/' className="md:p-4 py-3 px-0 block hover:bg-slate-700 rounded-md " >Inicio</Link></li>
                <li><Link to='/casita' className="md:p-4 py-3 px-0 block  hover:bg-slate-700 rounded-md" >Evento</Link></li>
                <li><Link to='/artistas' className="md:p-4 py-3 px-0 block  hover:bg-slate-700 rounded-md" >Artistas</Link></li>
                <li><Link className="md:p-4 py-3 px-0 block md:mb-0 mb-2  hover:bg-slate-700 rounded-md" >Contacto </Link></li>
            </ul>
        </nav>
    </div>
</header>
    </>
  );
}
export default Navigation;
