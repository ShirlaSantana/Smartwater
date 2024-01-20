export default function Data({title}){
    return(
        <div className="p-4 border rounded-3xl grid gap-4">
            <h2 className="font-bold text-gray-900">{title}</h2>
            <span className="text-[#1C3C7D] font-bold text-4xl">18</span>
            <div className="text-balance">
                <span className="px-2 py-1 bg-[#D6FFD7] text-[#4EB856] rounded-xl">+8.2%</span> <span className="text-gray-400">En el &uacute;ltimo mes</span>
            </div>
        </div>
    )
}