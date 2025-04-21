// import { Home, History, Users, Calendar, DollarSign, Star, Gift, Briefcase, MessageCircleQuestion, LayoutDashboard, HandCoins, Laptop } from "lucide-react";
// import profile from "@/assets/profile.png"

// const sidebarItems = [
//     { icon: <LayoutDashboard />, item: "Consultant" },
//     { icon: <HandCoins />, item: "Expertise" },
//     { icon: <History />, item: "Sessions" },
//     { icon: <Laptop />, item: "Master Class" },
//     { icon: <Home />, item: "Resources" },
//     { icon: <Users />, item: "Community" },
//     { icon: <Calendar />, item: "Calendar" },
//     { icon: <DollarSign />, item: "Payments" },
//     { icon: <DollarSign />, item: "Subscription" },
//     { icon: <Star />, item: "Reviews" },
//     { icon: <Gift />, item: "Refer & Earn" },
//     { icon: <Briefcase />, item: "Business Profile" },
// ];

// export default function Sidebar() {
//     return (
//         <nav className="hidden lg:block w-64 bg-white py-2 px-2 border shadow-2xs border-gray-200 rounded-lg m-2 font-poppins mt-20">
//             <ul className="space-y-2">
//                 {sidebarItems.map((item, key) => (
//                     <li key={key} className="group flex items-center space-x-2 p-2 rounded-md hover:bg-[#93268F]/10 transition">
//                         {item.icon}
//                         <a href="#" className="text-[#666666] group-hover:text-[#93268F]">{item.item}</a>
//                     </li>
//                 ))}
//             </ul>
//             <div className="mt-4 p-2 bg-white rounded-md flex items-center space-x-2 border border-gray-200 shadow-md">
//                 <img src={profile} alt="" className="rounded-full w-[36px] h-[36px]" />
//                 <div>
//                     <p className="text-[16px] font-semibold text-[var(--color-purple)]">Vikramjeet Singh</p>
//                     <a href="#" className="text-[var(--color-purple)] text-[14px] flex justify-center items-center">View Profile</a>
//                 </div>
//             </div>
//             <div className="mt-4 p-2 bg-white flex items-center space-x-2 justify-center border-t border-gray-200">
//                 <MessageCircleQuestion className="text-[#0FBBC3]"/>   
//                 <p className="text-[12px] font-semibold text-[#0FBBC3] inline-flex items-center justify-center">Questions? Learn more</p>
//             </div>
//         </nav>
//     );
// }


import {
    Home, History, Users, Calendar, DollarSign, Star, Gift,
    Briefcase, MessageCircleQuestion, LayoutDashboard, HandCoins, Laptop
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import profile from "@/assets/profile.png";

const sidebarItems = [
    { icon: <LayoutDashboard />, item: "Consultant", path: "/consultant" },
    { icon: <HandCoins />, item: "Expertise", path: "/consultant/expertise" },
    { icon: <History />, item: "Sessions", path: "/consultant/sessions" },
    { icon: <Laptop />, item: "Master Class", path: "/consultant/masterclass" },
    { icon: <Home />, item: "Resources", path: "/consultant/resources" },
    { icon: <Users />, item: "Community", path: "/consultant/community" },
    { icon: <Calendar />, item: "Calendar", path: "/consultant/calendar" },
    { icon: <DollarSign />, item: "Payments", path: "/consultant/payments" },
    { icon: <DollarSign />, item: "Subscription", path: "/consultant/subscription" },
    { icon: <Star />, item: "Reviews", path: "/consultant/reviews" },
    { icon: <Gift />, item: "Refer & Earn", path: "/consultant/refer" },
    { icon: <Briefcase />, item: "Business Profile", path: "/consultant/business-profile" },
];

export default function Sidebar() {
    const location = useLocation();

    return (
        <nav className="hidden lg:block w-64 bg-white py-2 px-2 border shadow-2xs border-gray-200 rounded-lg m-2 font-poppins mt-20">
            <ul className="space-y-2">
                {sidebarItems.map((item, key) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <li key={key}>
                            <Link
                                to={item.path}
                                className={`group flex items-center space-x-2 p-2 rounded-md transition ${isActive ? "bg-[#93268F]/10 text-[#93268F]" : "hover:bg-[#93268F]/10"
                                    }`}
                            >
                                <span className={`text-[18px] ${isActive ? "text-[#93268F]" : "text-[#666666]"}`}>
                                    {item.icon}
                                </span>
                                <span className={`${isActive ? "text-[#93268F]" : "text-[#666666]"} group-hover:text-[#93268F]`}>
                                    {item.item}
                                </span>
                            </Link>
                        </li>
                    );
                })}
            </ul>

            {/* Profile */}
            <div className="mt-4 p-2 bg-white rounded-md flex items-center space-x-2 border border-gray-200 shadow-md">
                <img src={profile} alt="Profile" className="rounded-full w-[36px] h-[36px]" />
                <div>
                    <p className="text-[16px] font-semibold text-[var(--color-purple)]">Vikramjeet Singh</p>
                    <Link to="/consultant/profile" className="text-[var(--color-purple)] text-[14px]">View Profile</Link>
                </div>
            </div>

            {/* Help */}
            <div className="mt-4 p-2 bg-white flex items-center space-x-2 justify-center border-t border-gray-200">
                <MessageCircleQuestion className="text-[#0FBBC3]" />
                <p className="text-[12px] font-semibold text-[#0FBBC3]">Questions? Learn more</p>
            </div>
        </nav>
    );
}
