import Navbar from "../Navbar";
import AccionesRapidas from "./Acciones";
import Datos from "./Datos";
import Graphics from "./Graphics";

export default function Inicio(){
    return(
        <div className="py-4 px-6 flex flex-col gap-5">
            <Navbar title='Inicio' icon='round-home.svg'/>
            <Datos/>
            <AccionesRapidas/>
            <Graphics/>
        </div>
    )
}