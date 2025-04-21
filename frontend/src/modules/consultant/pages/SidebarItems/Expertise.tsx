import { Clock4, EllipsisVertical, FileText, MessageCircleMore, Pencil, Plus, Video } from "lucide-react";
import { Switch } from "@/components/ui/switch";


export default function Expertise() {
    return (
        <section className="flex flex-col border rounded-2xl font-poppins p-8 mt-20 bg-white">
            <div className="space-y-8">
                <div className="flex justify-between items-center">
                    <div className="flex rounded-full bg-white p-1 text-[#898989]">
                        <h1 className="px-4 py-1 text-sm border border-[#898989] rounded-l-3xl text-[16px]">Consulting</h1>
                        <h1 className="px-4 py-1 text-sm border rounded-r-3xl border-[#898989] text-[16px]">Mentorship</h1>
                    </div>
                    <button className="bg-[var(--color-purple)] text-white rounded-[6px] px-6 py-2.5 text-[16px]">
                        Add Expertise
                    </button>
                </div>

                {/* Main title */}
                <div className="flex justify-center items-center space-x-4">
                    <h1 className="text-[28px] min-w-[350px]">Manage Your Expertise</h1>
                    <span className="flex-1 h-[2px] bg-[#FFCB07]"></span>
                </div>

                {/* Doubt Pucho section */}
                <div className="border border-gray-200 rounded-lg">
                    <div className="flex justify-between items-center p-4">
                        <div className="flex items-center gap-3">
                            <h1 className="text-[32px] font-bold">Doubt Pucho</h1>
                            <ActiveTag />
                        </div>
                        <div className="flex items-center gap-3">
                            <EllipsisVertical className="text-[var(--color-purple)]" />
                            <Pencil className="text-[var(--color-purple)]" />
                        </div>
                    </div>
                    <div className="border-t p-4 flex items-center gap-5">
                        <div className="bg-[#D8D8D833] rounded-lg p-2">
                            <MessageCircleMore size={60} className="text-[var(--color-purple)]" />
                        </div>
                        <div>
                            <div>
                                <h1 className="text-[20px]"> Ask Query</h1>
                                <h2 className="text-[16px] text-[#747677]">Some Query</h2>
                            </div>
                            <div>
                                <span className="text-[16px]"> Query Response Time</span>
                                <span className="text-[16px]"> Follow Up</span>
                                <span className="text-[16px] inline-flex gap-2">
                                    <span>Price</span>
                                    <span>Discounted Price</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Resources section */}
                <div className="border border-gray-200 rounded-lg">
                    <div className="flex justify-between items-center p-4">
                        <h1 className="text-[32px] font-bold">Resources</h1>
                        <Plus className="text-[var(--color-purple)]" />
                    </div>
                    <div className="border-t p-4 flex items-center gap-5">
                        <div className="bg-[#D8D8D833] rounded-lg p-2">
                            <FileText size={60} className="text-[var(--color-purple)]" />
                        </div>
                        <div className="flex-1">
                            <div className="mb-2">
                                <div className="flex justify-between items-center">
                                    <h1 className="text-[20px]">Resource Title</h1>
                                    <div className="flex items-center gap-3">
                                        <EllipsisVertical className="text-[var(--color-purple)]" />
                                        <Pencil className="text-[var(--color-purple)]" />
                                    </div>
                                </div>
                                <h2 className="text-[16px] text-[#747677]">Resource Description</h2>
                            </div>
                            <div className="flex gap-4 text-[16px]">
                                <span>Price: $XX.XX</span>
                                <span>Discounted: $XX.XX</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Academic consultant section */}
                <div className="border border-gray-200 rounded-lg">
                    <div className="flex justify-between items-center p-4">
                        <div className="flex items-center gap-3">
                            <h1 className="text-[32px] font-bold">Academic Consultant</h1>
                            <ActiveTag />
                        </div>
                        <Plus className="text-[var(--color-purple)]" />
                    </div>
                    <div className="p-4 space-y-4">
                        <p>Help with Educational Planning</p>

                        <div className="border rounded-lg p-2">
                            <div className="">
                                <h2 className="text-[20px]">LOrem ipsum</h2>
                                <p className="text-[#747677] text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute </p>
                            </div>

                            <div className="mt-2">
                                <h2 className="text-[20px]">Area of Expertise</h2>
                                <p className="text-[#747677] text-[16px]">Stream Selection  |  Career Path Guidance  |  College Selection  |  Exam Preparation  |  Study Skills  |  Interview Prep  |  Study Abroad  |  Peer & Parental Pressure
                                    Work-Life Balance  |  Confidence Building  |  Resume Help</p>
                            </div>

                            <div className="mt-2">
                                <h2 className="text-[20px]">Target Group</h2>
                                <p className="text-[#747677] text-[16px]">Class 5th-8th  |  Class 9th-10th  |  Class 11th-12th  |  College & Graduates  |  Postgraduates  |  Entrepreneurs  |  Career Changers  |  Peer & Parental Pressure</p>
                            </div>
                        </div>

                        <div className="border rounded-lg p-2 flex items-center gap-5">
                            <div className="inline-flex items-center gap-2">
                                <Switch />
                            </div>
                            <div className="flex items-center gap-5">
                                <div className="flex items-center gap-2">
                                    <Video />
                                    <span>1:1 Call</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock4 />
                                    <span>30 mins</span>
                                </div>
                                <span>Price: $XX.XX</span>
                            </div>
                        </div>

                        <div className="border rounded-lg p-2 flex items-center gap-5">
                            <div>
                                <Switch />
                            </div>
                            <div className="flex items-center gap-5">
                                <div className="flex items-center gap-2">
                                    <Video />
                                    <span>In-Person</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock4 />
                                    <span>1:1 Call</span>
                                </div>
                                <div>
                                    <span>Price: $XX.XX</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Career counselling section */}
                <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-[32px] font-bold">Career Consultation</h1>
                            <h3 className="text-[16px] text-[#747677]">Assist with Career Choices</h3>
                        </div>
                        <div className="flex items-center gap-3">
                            <EllipsisVertical className="text-[var(--color-purple)]" />
                            <Pencil className="text-[var(--color-purple)]" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}



// Components
const ActiveTag = () => {
    return (
        <span className="bg-green-200 text-green-700 rounded-full px-2 py-1 text-xs">Active</span>
    );
}

const DeactiveTag = () => {
    return (
        <span className="bg-red-200 text-red-700 rounded-full px-2 py-1 text-xs">Deactivated</span>
    );
}





// import { useState } from "react";
// import { Clock4, EllipsisVertical, FileText, MessageCircleMore, Pencil, Plus, Video } from "lucide-react";
// import { Switch } from "@/components/ui/switch";

// type ExpertiseSection = {
//     id: string;
//     title: string;
//     description?: string;
//     active: boolean;
//     type: 'doubt' | 'resources' | 'consulting' | 'mentorship';
//     items: ExpertiseItem[];
// };

// type ExpertiseItem = {
//     id: string;
//     title: string;
//     description?: string;
//     price?: string;
//     discountedPrice?: string;
//     duration?: string;
//     type?: 'call' | 'in-person' | 'resource';
//     active?: boolean;
// };

// export default function Expertise() {
//     const [expertiseSections, setExpertiseSections] = useState<ExpertiseSection[]>([
//         {
//             id: '1',
//             title: 'Doubt Pucho',
//             active: true,
//             type: 'doubt',
//             items: [
//                 {
//                     id: '1-1',
//                     title: 'Ask Query',
//                     description: 'Some Query',
//                     price: '$10.00',
//                     discountedPrice: '$8.00',
//                     type: 'call'
//                 }
//             ]
//         },
//         {
//             id: '2',
//             title: 'Resources',
//             active: true,
//             type: 'resources',
//             items: [
//                 {
//                     id: '2-1',
//                     title: 'Resource Title',
//                     description: 'Resource Description',
//                     price: '$15.00',
//                     discountedPrice: '$12.00',
//                     type: 'resource'
//                 }
//             ]
//         },
//         {
//             id: '3',
//             title: 'Academic Consultant',
//             description: 'Help with Educational Planning',
//             active: true,
//             type: 'consulting',
//             items: [
//                 {
//                     id: '3-1',
//                     title: '1:1 Call',
//                     duration: '30 mins',
//                     price: '$25.00',
//                     type: 'call',
//                     active: true
//                 },
//                 {
//                     id: '3-2',
//                     title: 'In-Person',
//                     duration: '1 hour',
//                     price: '$50.00',
//                     type: 'in-person',
//                     active: true
//                 }
//             ]
//         },
//         {
//             id: '4',
//             title: 'Career Consultation',
//             description: 'Assist with Career Choices',
//             active: false,
//             type: 'mentorship',
//             items: []
//         }
//     ]);

//     const [activeTab, setActiveTab] = useState<'Consulting' | 'Mentorship'>('Consulting');

//     const addNewSection = () => {
//         const newSection: ExpertiseSection = {
//             id: Date.now().toString(),
//             title: 'New Expertise',
//             active: false,
//             type: 'consulting',
//             items: []
//         };
//         setExpertiseSections([...expertiseSections, newSection]);
//     };

//     const toggleSectionActive = (id: string) => {
//         setExpertiseSections(expertiseSections.map(section =>
//             section.id === id ? { ...section, active: !section.active } : section
//         ));
//     };

//     const addItemToSection = (sectionId: string) => {
//         setExpertiseSections(expertiseSections.map(section => {
//             if (section.id === sectionId) {
//                 const newItem: ExpertiseItem = {
//                     id: Date.now().toString(),
//                     title: 'New Item',
//                     type: section.type === 'resources' ? 'resource' : 'call',
//                     active: true
//                 };
//                 return { ...section, items: [...section.items, newItem] };
//             }
//             return section;
//         }));
//     };

//     return (
//         <section className="flex flex-col border rounded-2xl font-poppins p-6">
//             <div className="border rounded-xl p-3 mt-20">
//                 <div className="">
//                     <div className="flex justify-between w-full">
//                         <div className="flex rounded-full bg-white p-1 text-[#898989]">
//                             <button
//                                 className={`px-4 py-1 text-sm border border-[#898989] rounded-l-3xl text-[16px] ${activeTab === 'Consulting' ? 'bg-[#FFCB07] text-black' : ''}`}
//                                 onClick={() => setActiveTab('Consulting')}
//                             >
//                                 Consulting
//                             </button>
//                             <button
//                                 className={`px-4 py-1 text-sm border rounded-r-3xl border-[#898989] text-[16px] ${activeTab === 'Mentorship' ? 'bg-[#FFCB07] text-black' : ''}`}
//                                 onClick={() => setActiveTab('Mentorship')}
//                             >
//                                 Mentorship
//                             </button>
//                         </div>
//                         <div>
//                             <button
//                                 className="bg-[var(--color-purple)] text-white rounded-[6px] px-4 py-2 text-[16px]"
//                                 onClick={addNewSection}
//                             >
//                                 Add Expertise
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Main title */}
//                 <div className="mt-6 flex justify-center items-center">
//                     <h1 className="text-[28px] min-w-[350px]">Manage Your Expertise</h1>
//                     <span className="w-full h-[2px] bg-[#FFCB07] mr-2"></span>
//                 </div>

//                 {/* Render sections dynamically */}
//                 {expertiseSections.map((section) => (
//                     <div key={section.id} className="mt-6 border border-gray-200 rounded-lg">
//                         <div className="p-3">
//                             <div className="flex justify-between items-center">
//                                 <div className="flex items-center gap-3">
//                                     <h1 className="text-[32px] font-bold">{section.title}</h1>
//                                     {section.active ? <ActiveTag /> : <DeactiveTag />}
//                                 </div>
//                                 <div className="flex items-center gap-3">
//                                     <EllipsisVertical className="text-[var(--color-purple)] cursor-pointer" />
//                                     <Pencil className="text-[var(--color-purple)] cursor-pointer" />
//                                     {section.type !== 'doubt' && (
//                                         <Plus
//                                             className="text-[var(--color-purple)] cursor-pointer"
//                                             onClick={() => addItemToSection(section.id)}
//                                         />
//                                     )}
//                                 </div>
//                             </div>

//                             {section.description && (
//                                 <p className="text-[16px] text-[#747677] mt-1">{section.description}</p>
//                             )}
//                         </div>

//                         {/* Render section content based on type */}
//                         {section.type === 'doubt' && (
//                             <div className="border rounded-lg p-2 flex items-center gap-5 m-2">
//                                 <div className="bg-[#D8D8D833] rounded-lg p-2">
//                                     <MessageCircleMore size={60} className="text-[var(--color-purple)]" />
//                                 </div>
//                                 <div>
//                                     <div>
//                                         <h1 className="text-[20px]">{section.items[0]?.title || 'Ask Query'}</h1>
//                                         <h2 className="text-[16px] text-[#747677]">{section.items[0]?.description || 'Some Query'}</h2>
//                                     </div>
//                                     <div className="mt-2">
//                                         <span className="text-[16px] inline-flex gap-2">
//                                             <span>Price: {section.items[0]?.price || '$XX.XX'}</span>
//                                             <span>Discounted: {section.items[0]?.discountedPrice || '$XX.XX'}</span>
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>
//                         )}

//                         {section.type === 'resources' && section.items.map(item => (
//                             <div key={item.id} className="border rounded-lg p-2 m-2 flex items-center gap-5">
//                                 <div className="bg-[#D8D8D833] rounded-lg p-2">
//                                     <FileText size={60} className="text-[var(--color-purple)]" />
//                                 </div>
//                                 <div className="flex-1">
//                                     <div className="mb-2">
//                                         <div className="flex justify-between items-center">
//                                             <h1 className="text-[20px]">{item.title}</h1>
//                                             <div className="flex items-center gap-3">
//                                                 <EllipsisVertical className="text-[var(--color-purple)] cursor-pointer" />
//                                                 <Pencil className="text-[var(--color-purple)] cursor-pointer" />
//                                             </div>
//                                         </div>
//                                         {item.description && (
//                                             <h2 className="text-[16px] text-[#747677]">{item.description}</h2>
//                                         )}
//                                     </div>
//                                     <div className="flex gap-4 text-[16px]">
//                                         <span>Price: {item.price || '$XX.XX'}</span>
//                                         {item.discountedPrice && (
//                                             <span>Discounted: {item.discountedPrice}</span>
//                                         )}
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}

//                         {(section.type === 'consulting' || section.type === 'mentorship') && (
//                             <>
//                                 {section.items.map(item => (
//                                     <div key={item.id} className="mt-2 border rounded-lg p-2 flex items-center gap-5 m-2">
//                                         <div className="inline-flex items-center gap-2">
//                                             <Switch
//                                                 checked={item.active}
//                                                 onCheckedChange={() => toggleItemActive(section.id, item.id)}
//                                             />
//                                         </div>
//                                         <div className="flex items-center gap-5">
//                                             {item.type === 'call' && (
//                                                 <div className="flex items-center gap-2">
//                                                     <Video />
//                                                     <span>1:1 Call</span>
//                                                 </div>
//                                             )}
//                                             {item.type === 'in-person' && (
//                                                 <div className="flex items-center gap-2">
//                                                     <Video />
//                                                     <span>In-Person</span>
//                                                 </div>
//                                             )}
//                                             {item.duration && (
//                                                 <div className="flex items-center gap-2">
//                                                     <Clock4 />
//                                                     <span>{item.duration}</span>
//                                                 </div>
//                                             )}
//                                             {item.price && (
//                                                 <span>Price: {item.price}</span>
//                                             )}
//                                         </div>
//                                     </div>
//                                 ))}
//                             </>
//                         )}
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// }

// // Helper function to toggle item active state
// const toggleItemActive = (sectionId: string, itemId: string) => {
//     setExpertiseSections(expertiseSections.map(section => {
//         if (section.id === sectionId) {
//             return {
//                 ...section,
//                 items: section.items.map(item =>
//                     item.id === itemId ? { ...item, active: !item.active } : item
//                 )
//             };
//         }
//         return section;
//     }));
// };

// // Components
// const ActiveTag = () => {
//     return (
//         <span className="bg-green-200 text-green-700 rounded-full px-2 py-1 text-xs">Active</span>
//     );
// };

// const DeactiveTag = () => {
//     return (
//         <span className="bg-red-200 text-red-700 rounded-full px-2 py-1 text-xs">Deactivated</span>
//     );
// };