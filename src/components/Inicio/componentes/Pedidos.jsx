import { useState } from "react";

export default function Pedidos(){
    const [openClientes, setOpenClientes] = useState(false);
    const [openBotellones, setOpenBotellones] = useState(false); 
    const [clientes, SetClientes] = useState('Cliente')
    const [botellones, setBotellones] = useState('Botellon de 20 Lts')
    const [cant, setCant] = useState(1)
    const [count, setCount] = useState(15)

    const cliente = clientes;
    const botellon = botellones;
    

    const handleOpenClientes = () => {
        setOpenClientes(!openClientes);
    };
    const handleOpenBotellones = () => {
        setOpenBotellones(!openBotellones);
    };
    const handleCant = () => {
        if(cant == 1){
            setCant(1)
        }else{
            setCant(cant-1)
            setCount(count-15)
        }        
    };

    return(
        <section className="relative border rounded-2xl p-6 flex flex-col gap-5 w-full">
            <h3 className="font-bold text-lg">Realizar pedido</h3>
                <div>
                    <button onClick={handleOpenClientes} className="relative hover:bg-gray-100 w-full flex items-center justify-between gap-3 border-2 rounded-md px-4 py-1 text-gray-500 font-medium">
                        <span>{cliente}</span>
                        <svg className={`w-3 h-3 ${openClientes? 'iconDropdownLess' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                        </svg>
                    </button>
                    {openClientes ? (
                        <ul style={{zIndex:'99'}} className="absolute w-[90%] bg-white border rounded-md">
                            <li className="menu-item hover:bg-gray-100 ">
                                <button className=" text-gray-500 m-1 text-left w-full" onClick={()=>{SetClientes('Cliente 1'),setOpenClientes(false)}}>Cliente 1</button>
                            </li>
                            <li className="menu-item hover:bg-gray-100 ">
                                <button className="text-gray-500 m-1 text-left w-full" onClick={()=>{SetClientes('Cliente 2'),setOpenClientes(false)}}>Cliente 2</button>
                            </li>
                        </ul>
                    ) : null}
                </div>
                <div>
                    <button onClick={handleOpenBotellones} className="relative hover:bg-gray-100 w-full flex items-center justify-between gap-3 border-2 rounded-md px-4 py-1 text-gray-500 font-medium">
                        <span>{botellon}</span>
                        <svg className={`w-3 h-3 ${openBotellones? 'iconDropdownLess' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                        </svg>
                    </button>
                    {openBotellones ? (
                        <ul className="absolute w-[90%] bg-white border rounded-md">
                            <li className="menu-item hover:bg-gray-100 ">
                                <button className=" text-gray-500 m-1 text-left w-full" onClick={()=>{setBotellones('Botellon de 20 Lts'), setOpenBotellones(false)}}>Botellon de 20 Lts</button>
                            </li>
                            <li className="menu-item hover:bg-gray-100 ">
                                <button className="text-gray-500 m-1 text-left w-full" onClick={()=>{setBotellones('Botellon de 10 Lts') , setOpenBotellones(false), setCount(10)}}>Botellon de 10 Lts</button>
                            </li>
                        </ul>
                    ) : null}
                </div>
                <div className="flex gap-2">
                    <div className=" w-full border-2 rounded-md px-4 py-1 flex items-center justify-between text-gray-500 font-medium">
                        <span>Cantidad</span>
                        <div className="flex gap-2 items-center">
                            <button className="border-2 border-gray-500 rounded-full text-gray-500 text-xl w-8 flex justify-center items-center" onClick={handleCant} > - </button>                       
                            <span className="border-2 rounded-md w-10 flex justify-center items-center"> {cant} </span>
                            <button className="border-2 border-gray-500 rounded-full text-gray-500 text-xl w-8 flex justify-center items-center" onClick={() => {setCant(cant + 1), setCount(count+15)}}> + </button>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 border-2 rounded-md text-gray-500 font-medium">
                        <span className="px-3">{count}</span>
                        <span className="border-l h-full flex items-center justify-center px-2">Bs</span>
                    </div>
                </div>
                    <button className="self-end hover:bg-[#1A54FF] drop-shadow-lg bg-[#357CFF] text-[#FEFDFF] rounded-full px-4 py-1">Realizar pedido</button>
        </section>
    )
}