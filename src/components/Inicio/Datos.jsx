import Data from "./componentes/DataCard";

export default function Datos(){
    return(
        <section className="flex gap-8">
            <Data title={'Clientes nuevos'}/>
            <Data title={'Préstamos activos'}/>
            <Data title={'Pedidos totales'}/>
            <Data title={'Ingresos totales'}/>
        </section>
    )
}