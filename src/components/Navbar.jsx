import { useState } from "react"

export default function Navbar({title, icon}){

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

    return(
        <div className="flex w-full justify-between items-start">
            <div className="flex gap-2 items-center">
                <img src={icon} alt={title} width={40} />
                <h1 className="text-gray-900 font-bold text-xl">{title}</h1>
            </div>
            <button onClick={handleOpen} className="relative rounded-full p-2 bg-[#1C3C7D] text-[#FEFDFF] flex-end">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21 19v1H3v-1l2-2v-6c0-3.1 2.03-5.83 5-6.71V4a2 2 0 0 1 2-2a2 2 0 0 1 2 2v.29c2.97.88 5 3.61 5 6.71v6zm-7 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2"/></svg>
            </button>
            {open?(
                <div className="absolute top-16 right-0 border rounded-xl flex flex-col gap-4 bg-white w-80 p-4">
                    <h3 className="font-bold text-gray-900">Notificaciones</h3>
                    <div className="flex flex-col gap-2">
                        <span className="text-gray-500 m-1 text-left w-full border-b hover:bg-gray-100">Notificacion 1</span>
                        <span className="text-gray-500 m-1 text-left w-full border-b hover:bg-gray-100">Notificacion 2</span>
                    </div>
                </div>
            ): null}
        </div>
    )
}