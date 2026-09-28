import { Bell } from "lucide-react"
import { User, LogOut } from "lucide-react"

export default function Header() {
    return(
        <div className="bg-white h-16 flex items-center justify-between border-b p-5">
            <div className="flex items-start flex-col whitespace-nowrap justify-center leading-tight">
                <p className="text-blue-600 text-xl font-bold">Người dùng</p>
                <p className="text-gray-500 text-xs">Danh sách người dùng</p>
            </div>
            <div className="flex items-center gap-x-4">
                <div className="flex p-0.5 rounded-xl ring-1 ring-blue-600 text-bue-500 relative">
                    <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-sm font-bold text-white">3</span>
                    <Bell size={22} className="text-blue-600" />
                </div>
                <div className=" h-9 border-2 border-blue-600 text-gray-500 rounded-2xl flex whitespace-nowrap text-sm items-center gap-x-2 p-3">
                    <p>Kẻ thống trị</p>
                    <User size={20}/>
                    <LogOut size={20}/>
                </div>
            </div>
        </div>
    )
}