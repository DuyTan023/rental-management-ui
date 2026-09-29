import RevenueChart from "@/lib/components/landloard/RevenueChart";
import RoomStatusChart from "@/lib/components/landloard/RoomStatusChart";
import Header from "@/lib/components/public/Header"
import { Houses, UsersRound , Wallet, CardSim} from "lucide-react";
export default function Landloard (){

    const overviewCards = [
        {icon: Houses, title: "Tổng số phòng trọ", vlaue: "12 phòng", info: "10 phòng đang cho thuê", bg1:"bg-blue-50", bg2:"bg-blue-100", text:"text-blue-600" },
        {icon: UsersRound, title: "Tổng số người thuê", vlaue: "10 người", info: "8 người ở | 2 người rời", bg1:"bg-green-50", bg2:"bg-green-100", text:"text-green-600"},
        {icon: Wallet, title: "Doanh thu tháng này", vlaue: "12.500.000đ", info: "Tăng 18% so tháng trước", bg1:"bg-orange-50", bg2:"bg-orange-100", text:"text-orange-600"},
        {icon: CardSim, title: "Hợp đồng sắp hết hạn", vlaue: "2 hợp đồng", info: "Trong 30 ngày tới", bg1:"bg-violet-50", bg2:"bg-violet-100", text:"text-violet-600"},
    ]
    return(
        <div className="w-full">
            <Header />
            <div className="flex flex-col p-3 sm:p-4 md:p-5 gap-y-5">
                <div className="flex flex-col">
                    <h1 className="text-black text-lg md:text-xl font-bold">Xin Chào, Kẻ thống trị</h1>
                    <p className="text-gray-500 text-[10px] sm:text-xs">Chào mừng bạn quay trở lại trang quản lý. Dưới đây là tổng quan tình hình hoạt động của khu trọ.</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
                    {overviewCards.map((item) => {
                        const Icon = item.icon;
                        return(
                            <div key={item.title} className={`flex ${item.bg1} rounded-xl border p-2 gap-1.5`}>
                                <div className={`flex items-center justify-center w-8 h-8 ${item.bg2} rounded-2xl`}>
                                    <Icon size={22} className={`${item.text}`}/>
                                </div>
                            
                                <div className="flex flex-col flex-1 text-gray-700 sm:gap-2">
                                    <p className="text-xs sm:text-[15px]">{item.title}</p>
                                    <p className="font-bold text-xl">{item.vlaue}</p>
                                    <p className="text-[10px] sm:text-xs">{item.info}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-10">
  
                    <div className="col-span-1 min-w-0 sm:col-span-4">
                        <RevenueChart />
                    </div>

                    <div className="col-span-1 min-w-0 sm:col-span-3">
                        <RoomStatusChart />
                    </div>

                    <div className="col-span-1 min-w-0 rounded-xl border bg-white p-4 sm:col-span-3">
                        Phần 3 (Chiếm 3 phần)
                    </div>

                    </div>
            </div>
        </div>
    );
}