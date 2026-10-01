import { Button } from "@/components/ui/button";
import Header from "@/lib/components/public/Header"
import { Houses, UsersRound , Wallet, CardSim, Home, Clock} from "lucide-react";
export default function Rooms(){
    return (
        <div className="w-full">
            <Header />
            <div className="flex flex-col p-3 sm:p-4 md:p-5 gap-y-4">

                <div className="flex flex-col gap-y-3">
                    <div className="flex items-center justify-between">
                        <h1 className="text-black text-lg md:text-xl font-bold">Xin Chào, Kẻ thống trị</h1>
                        <Button className="bg-blue-600 text-white font-bold hover:bg-blue-500">+ Thêm phòng</Button>
                    </div>
                    
                   <div className="grid grid-cols-2 md:grid-cols-5 gap-4">

                    {/* Tổng số phòng */}
                    <div className="bg-blue-100 flex items-center rounded-xl border p-2 gap-2 ring-2 ring-blue-500 shadow-lg">
                        <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-blue-200 shrink-0">
                            <Houses size={18} className="text-blue-600" />
                        </div>

                        <div className="flex flex-col flex-1 min-w-0">
                            <p className="text-[10px] sm:text-xs text-gray-700 truncate">
                                Tổng số phòng
                            </p>
                            <p className="font-bold text-lg leading-5">
                                20
                            </p>
                        </div>

                        <p className="text-blue-500 text-[9px] shrink-0">
                            Chi tiết
                        </p>
                    </div>


                    {/* Phòng trống */}
                    <div className="bg-green-100 flex items-center rounded-xl border p-2 gap-2 opacity-70 hover:opacity-100">
                        <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-green-200 shrink-0">
                            <Houses size={18} className="text-green-600" />
                        </div>

                        <div className="flex flex-col flex-1 min-w-0">
                            <p className="text-[10px] sm:text-xs text-gray-700 truncate">
                                Phòng trống
                            </p>
                            <p className="font-bold text-lg leading-5">
                                5
                            </p>
                        </div>

                        <p className="text-green-500 text-[9px] shrink-0">
                            Chi tiết
                        </p>
                    </div>


                    {/* Đang cho thuê */}
                    <div className="bg-orange-100 flex items-center rounded-xl border p-2 gap-2 opacity-70 hover:opacity-100">
                        <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-orange-200 shrink-0">
                            <Houses size={18} className="text-orange-600" />
                        </div>

                        <div className="flex flex-col flex-1 min-w-0">
                            <p className="text-[10px] sm:text-xs text-gray-700 truncate">
                                Đang cho thuê
                            </p>
                            <p className="font-bold text-lg leading-5">
                                15
                            </p>
                        </div>

                        <p className="text-orange-500 text-[9px] shrink-0">
                            Chi tiết
                        </p>
                    </div>


                    {/* Đang sửa chữa */}
                    <div className="bg-violet-100 flex items-center rounded-xl border p-2 gap-2 opacity-70 hover:opacity-100">
                        <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-violet-200 shrink-0">
                            <Houses size={18} className="text-violet-600" />
                        </div>

                        <div className="flex flex-col flex-1 min-w-0">
                            <p className="text-[10px] sm:text-xs text-gray-700 truncate">
                                Đang sửa chữa
                            </p>
                            <p className="font-bold text-lg leading-5">
                                3
                            </p>
                        </div>

                        <p className="text-violet-500 text-[9px] shrink-0">
                            Chi tiết
                        </p>
                    </div>


                    {/* Cảnh báo */}
                    <div className="bg-red-100 flex items-center rounded-xl border p-2 gap-2 opacity-70 hover:opacity-100">
                        <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-red-200 shrink-0">
                            <Houses size={18} className="text-red-600" />
                        </div>

                        <div className="flex flex-col flex-1 min-w-0">
                            <p className="text-[10px] sm:text-xs text-gray-700 truncate">
                                Cảnh báo
                            </p>
                            <p className="font-bold text-lg leading-5">
                                6
                            </p>
                        </div>

                        <p className="text-red-500 text-[9px] shrink-0">
                            Chi tiết
                        </p>
                    </div>

                </div>
                </div>
            </div>
            
        </div>
    );
}