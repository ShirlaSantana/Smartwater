import Clientes from "./componentes/Clientes";
import Pedidos from "./componentes/Pedidos";

export default function AccionesRapidas(){
    return(
        <section>
                <h2 className="font-bold text-xl my-4">Acciones r&aacute;pidas</h2>
            <section className="grid grid-cols-[500px,_450px] gap-8">
                <Clientes/>
                <Pedidos/>
            </section>
        </section>
    )
}