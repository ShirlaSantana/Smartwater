import { useState } from "react"
import {Link, Outlet } from "react-router-dom"
export default function Menu(){

    const [isActive, setIsActive] = useState(0)

    return(
        <>
    <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
    <div className="h-full px-3 pb-10 bg-[#1A3D7D] grid grid-rows-[100px,_1fr,_130px] ">
        <div className="flex justify-center my-5">
            <span className="text-[#4D8CD3] font-bold text-2xl">Smart</span><span className="text-2xl font-bold text-[#FEFDFF]">water</span>
        </div>
        <ul className="space-y-1 font-medium ">
            <li>
                <Link to="/" onClick={() => setIsActive(0)} className={` flex items-center p-2 rounded-lg hover:bg-gray-100 group ${isActive==0 ? 'bg-gray-100' : '' }`}>
                <svg  className={`w-7 h-7 text-[#FEFDFF] transition duration-75 group-hover:text-gray-900 ${isActive==0 ? 'text-gray-900' : ''}`} aria-hidden="true" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1"/></svg>
                <span className={`flex-1 ms-3 group-hover:text-gray-900 text-[#FEFDFF] ${isActive==0 ? 'text-gray-900' : ''}`}>Inicio</span>
                </Link>
            </li>
            <li>
                <a href="#"  onClick={() => setIsActive(1)} className={` flex items-center p-2 rounded-lg hover:bg-gray-100 group ${isActive==1 ? 'bg-gray-100' : '' }`}>
                <svg className={`flex-shrink-0 w-6 h-6  text-[#FEFDFF] transition duration-75 group-hover:text-gray-900 ${isActive==1  ? 'text-gray-900' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
                </svg>
                <span className={`flex-1 ms-3 whitespace-nowrap group-hover:text-gray-900 text-[#FEFDFF] ${isActive==1  ? 'text-gray-900' : ''}`}>Clientes</span>
                </a>
            </li>
            <li>
                <a href="#" onClick={() => setIsActive(2)} className={` flex items-center p-2 rounded-lg hover:bg-gray-100 group ${isActive==2 ? 'bg-gray-100' : '' }`}>
                <svg className={`w-7 h-7 text-[#FEFDFF] transition duration-75 group-hover:text-gray-900 ${isActive==2  ? 'text-gray-900' : ''}`} aria-hidden="true"  width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"/></svg>
                <span className={`flex-1 ms-3 whitespace-nowrap group-hover:text-gray-900 text-[#FEFDFF] ${isActive==2  ? 'text-gray-900' : ''}`}>Mapa de clientes</span>
                </a>
            </li>
            <li>
                <a href="#" onClick={() => setIsActive(3)} className={` flex items-center p-2 rounded-lg hover:bg-gray-100 group ${isActive==3 ? 'bg-gray-100' : '' }`}>
                <svg className={`flex-shrink-0 w-7 h-7  text-[#FEFDFF] ${isActive==3 ? 'text-gray-900' : ''} transition duration-75 group-hover:text-gray-900`} aria-hidden="true" width="24" height="24" viewBox="0 0 24 24"><g fill="currentColor"><path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75z"/><path d="M8.25 19.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m7.5-12.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104a1.837 1.837 0 0 0-1.47-.725z"/><path d="M19.5 19.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0"/></g></svg>
                <span className={`flex-1 ms-3 group-hover:text-gray-900 text-[#FEFDFF] ${isActive==3 ? 'text-gray-900' : ''}`}>Monitoreo de distribuciones</span>
                </a>
            </li>
            <li>
                <a href="#" onClick={() => setIsActive(4)} className={` flex items-center p-2 rounded-lg hover:bg-gray-100 group ${isActive==4 ? 'bg-gray-100' : '' }`}>
                <svg className={`flex-shrink-0 w-7 h-7  text-[#FEFDFF] ${isActive==4 ? 'text-gray-900' : ''} transition duration-75 group-hover:text-gray-900`} aria-hidden="true"  width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7 8q-.825 0-1.412-.587T5 6V4q0-.825.588-1.412T7 2h10q.825 0 1.413.588T19 4v2q0 .825-.587 1.413T17 8zm0-2h10V4H7zM4 22q-.825 0-1.412-.587T2 20v-1h20v1q0 .825-.587 1.413T20 22zm-2-4l3.475-7.825q.25-.55.75-.862T7.3 9h9.4q.575 0 1.075.313t.75.862L22 18zm6.5-2h1q.2 0 .35-.15t.15-.35q0-.2-.15-.35T9.5 15h-1q-.2 0-.35.15T8 15.5q0 .2.15.35t.35.15m0-2h1q.2 0 .35-.15t.15-.35q0-.2-.15-.35T9.5 13h-1q-.2 0-.35.15T8 13.5q0 .2.15.35t.35.15m0-2h1q.2 0 .35-.15t.15-.35q0-.2-.15-.35T9.5 11h-1q-.2 0-.35.15T8 11.5q0 .2.15.35t.35.15m3 4h1q.2 0 .35-.15t.15-.35q0-.2-.15-.35T12.5 15h-1q-.2 0-.35.15t-.15.35q0 .2.15.35t.35.15m0-2h1q.2 0 .35-.15t.15-.35q0-.2-.15-.35T12.5 13h-1q-.2 0-.35.15t-.15.35q0 .2.15.35t.35.15m0-2h1q.2 0 .35-.15t.15-.35q0-.2-.15-.35T12.5 11h-1q-.2 0-.35.15t-.15.35q0 .2.15.35t.35.15m3 4h1q.2 0 .35-.15t.15-.35q0-.2-.15-.35T15.5 15h-1q-.2 0-.35.15t-.15.35q0 .2.15.35t.35.15m0-2h1q.2 0 .35-.15t.15-.35q0-.2-.15-.35T15.5 13h-1q-.2 0-.35.15t-.15.35q0 .2.15.35t.35.15m0-2h1q.2 0 .35-.15t.15-.35q0-.2-.15-.35T15.5 11h-1q-.2 0-.35.15t-.15.35q0 .2.15.35t.35.15"/></svg>
                <span className={`flex-1 ms-3 group-hover:text-gray-900 text-[#FEFDFF] ${isActive==4 ? 'text-gray-900' : ''}`}>Ventas</span>
                </a>
            </li>
            <li>
                <a href="#" onClick={() => setIsActive(5)} className={` flex items-center p-2 rounded-lg hover:bg-gray-100 group ${isActive==5 ? 'bg-gray-100' : '' }`}>
                <svg className={`flex-shrink-0 w-7 h-7  text-[#FEFDFF] ${isActive==5 ? 'text-gray-900' : ''} transition duration-75 group-hover:text-gray-900`} aria-hidden="true" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M5.586 4.586C5 5.172 5 6.114 5 8v9c0 1.886 0 2.828.586 3.414C6.172 21 7.114 21 9 21h6c1.886 0 2.828 0 3.414-.586C19 19.828 19 18.886 19 17V8c0-1.886 0-2.828-.586-3.414C17.828 4 16.886 4 15 4H9c-1.886 0-2.828 0-3.414.586M9 8a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z" clipRule="evenodd"/></svg>
                <span className={`flex-1 ms-3 group-hover:text-gray-900 text-[#FEFDFF] ${isActive==5 ? 'text-gray-900' : ''}`}>Pedidos</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-[#FEFDFF] bg-[#327DFE] rounded-md">1</span>
                </a>
            </li>
            <li>
                <a href="#" onClick={() => setIsActive(6)} className={` flex items-center p-2 rounded-lg hover:bg-gray-100 group ${isActive==6 ? 'bg-gray-100' : '' }`}>
                <svg className={`flex-shrink-0 w-7 h-7  text-[#FEFDFF] ${isActive==6 ? 'text-gray-900' : ''} transition duration-75 group-hover:text-gray-900`} aria-hidden="true" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 4.25A2.25 2.25 0 0 1 6.25 2h11.5A2.25 2.25 0 0 1 20 4.25v7.248a6.48 6.48 0 0 0-3.439-.43a.748.748 0 0 0-.311-.068h-8.5a.75.75 0 0 0 0 1.5h5.596a6.487 6.487 0 0 0-2.346 5c0 1.747.689 3.332 1.81 4.5H6.25A2.25 2.25 0 0 1 4 19.75zM16.25 6h-8.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5M23 17.5a5.5 5.5 0 1 0-11 0a5.5 5.5 0 0 0 11 0m-5 .5l.001 2.503a.5.5 0 1 1-1 0V18h-2.505a.5.5 0 0 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.497a.5.5 0 0 1 0 1z"/></svg>
                <span className={`flex-1 ms-3 group-hover:text-gray-900 text-[#FEFDFF] ${isActive==6 ? 'text-gray-900' : ''}`}>Pr&eacute;stamos</span>
                </a>
            </li>
            <li>
                <a href="#" onClick={() => setIsActive(7)} className={` flex items-center p-2 rounded-lg hover:bg-gray-100 group ${isActive==7 ? 'bg-gray-100' : '' }`}>
                <svg className={`flex-shrink-0 w-7 h-7  text-[#FEFDFF] ${isActive==7 ? 'text-gray-900' : ''} transition duration-75 group-hover:text-gray-900`} aria-hidden="true" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M8 13.65V6h3v7.65l-1.5-1.4zm5 1.5V2h3v10.15zM3 18.6V10h3v5.6zm0 2.45l6.45-6.45L13 17.65l5.6-5.6H17v-2h5v5h-2v-1.6l-6.9 6.9l-3.55-3.05l-3.75 3.75z"/></svg>
                <span className={`flex-1 ms-3 group-hover:text-gray-900 text-[#FEFDFF] ${isActive==7 ? 'text-gray-900' : ''}`}>Finanzas</span>
                </a>
            </li>
            <li>
                <a href="#" onClick={() => setIsActive(8)} className={` flex items-center p-2 rounded-lg hover:bg-gray-100 group ${isActive==8 ? 'bg-gray-100' : '' }`}>
                <svg className={`flex-shrink-0 w-7 h-7  text-[#FEFDFF] ${isActive==8  ? 'text-gray-900' : ''} transition duration-75 group-hover:text-gray-900`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                </svg>
                <span className={`flex-1 ms-3 group-hover:text-gray-900 text-[#FEFDFF] ${isActive==8  ? 'text-gray-900' : ''}`}>Reportes</span>
                </a>
            </li>
            <li>
                <a href="#" onClick={() => setIsActive(9)} className={` flex items-center p-2 rounded-lg hover:bg-gray-100 group ${isActive==9 ? 'bg-gray-100' : '' }`}>
                <svg className={`flex-shrink-0 w-7 h-7  text-[#FEFDFF] ${isActive==9  ? 'text-gray-900' : ''} transition duration-75 group-hover:text-gray-900`} aria-hidden="true" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19.5 12c0-.23-.01-.45-.03-.68l1.86-1.41c.4-.3.51-.86.26-1.3l-1.87-3.23a.987.987 0 0 0-1.25-.42l-2.15.91c-.37-.26-.76-.49-1.17-.68l-.29-2.31c-.06-.5-.49-.88-.99-.88h-3.73c-.51 0-.94.38-1 .88l-.29 2.31c-.41.19-.8.42-1.17.68l-2.15-.91c-.46-.2-1-.02-1.25.42L2.41 8.62c-.25.44-.14.99.26 1.3l1.86 1.41a7.343 7.343 0 0 0 0 1.35l-1.86 1.41c-.4.3-.51.86-.26 1.3l1.87 3.23c.25.44.79.62 1.25.42l2.15-.91c.37.26.76.49 1.17.68l.29 2.31c.06.5.49.88.99.88h3.73c.5 0 .93-.38.99-.88l.29-2.31c.41-.19.8-.42 1.17-.68l2.15.91c.46.2 1 .02 1.25-.42l1.87-3.23c.25-.44.14-.99-.26-1.3l-1.86-1.41c.03-.23.04-.45.04-.68m-7.46 3.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5"/></svg>
                <span className={`flex-1 ms-3 group-hover:text-gray-900 text-[#FEFDFF] ${isActive==9  ? 'text-gray-900' : ''}`}>Configuraci&oacute;n</span>
                </a>
            </li>
        </ul>
        <div className="exit place-self-center">
            <a href="/" className=" flex items-center justify-around bg-gray-100 p-2 rounded-2xl ">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M12 2.5a1.5 1.5 0 0 1 0 3H7a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h4.5a1.5 1.5 0 0 1 0 3H7A3.5 3.5 0 0 1 3.5 18V6A3.5 3.5 0 0 1 7 2.5Zm6.06 5.61l2.829 2.83a1.5 1.5 0 0 1 0 2.12l-2.828 2.83a1.5 1.5 0 1 1-2.122-2.122l.268-.268H12a1.5 1.5 0 0 1 0-3h4.207l-.268-.268a1.5 1.5 0 1 1 2.122-2.121Z"/></g></svg>
            <span className="ms-3 whitespace-nowrap font-medium ">Salir</span>
            </a>
        </div>
    </div>
    </aside>
    <Outlet/>
    </>
    )
}