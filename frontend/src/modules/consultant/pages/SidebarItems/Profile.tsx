// import profile from "@/assets/Profile-1.png"
// import { Facebook, Linkedin, Pencil, Forward } from "lucide-react"
// import cover from "@/assets/cover.png"
// export default function Profile() {
//     return (
//         <section>
//             <div className="mt-20 border rounded-2xl font-poppins">
//                 <div className="relative bg-white">
//                     <img src={cover} alt="profile img" className="h-[200px] w-full object-cover rounded-t-xl" />
//                     <div className="absolute top-25 left-5">
//                         <img src={profile} alt="" className=" w-[170px] h-[170px]" />
//                     </div>
//                     <div className="flex gap-2 absolute right-0 top-35 m-3">
//                         <div className="w-[40px] h-[40px] bg-white p-2 inline-flex justify-center items-center rounded-xl">
//                             <Linkedin />
//                         </div>
//                         <div className="w-[40px] h-[40px] bg-white p-2 inline-flex justify-center items-center rounded-xl">
//                             <Facebook />
//                         </div>
//                         <div className="w-[40px] h-[40px] bg-white p-2 inline-flex justify-center items-center rounded-xl">
//                             <Forward /> 
//                         </div>
//                         <div className="absolute top-2 lg:right-340">
//                             <button className="inline-flex justify-center items-center gap-3 p-4 w-[190px] bg-white focus:bg-[var(--color-bg-purple] rounded-[70px] shadow-2xl h-[70px] text-[20px]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12 text-[#93268F]">
//                                 <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clipRule="evenodd" />
//                             </svg>
//                                 Play Intro</button>
//                         </div>
//                     </div>

//                     <div className="mt-20 inline-flex justify-center items-center gap-3 m-5">
//                         <span className="text-[24px] font-semibold">John doe</span>
//                         <div className="inline-flex justify-center items-center gap-2">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-yellow-400">
//                                 <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
//                             </svg>
//                             <span>4.5</span>
//                         </div>
//                         <div className="inline-flex items-center gap-2 p-2 border-2 border-dashed rounded-4xl bg-[#93268F1A] border-[#93268F]">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-[#93268F]">
//                                 <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
//                             </svg>
//                             <span className="text-[16px] text-[#93268F]">Verified</span>
//                         </div>
//                         <div>
//                             <Pencil className="text-[#93268F]" />
//                         </div>
//                     </div>

//                     {/* Experience */}
//                     <div className="m-4">
//                         <div className="text-[#787878] text-[16px]">
//                             <span>Flipkart | Bain & Co.| Gold Medalist, IIT Madras | XLRI Jamshedpur-BM' 24 | Accenture, Wipro (PPI) </span>
//                         </div>
//                     </div>

//                     {/* Experience */}
//                     <div className="m-4">
//                         <div className="text-[#787878] text-[16px]">
//                             <span></span>
//                         </div>
//                     </div>

//                     {/* Location */}
//                     <div className="m-4">
//                         <div className="inline-flex items-center gap-4 text-[#787878] text-[16px]">
//                             <span>Ambala, Haryana, India</span>
//                             <button className="text-[#93268F]">Contact Info</button>
//                         </div>
//                     </div>

//                     <h3 className="m-4 text-[16px]">Skills</h3>
//                     {/* Skills */}
//                     <div className="m-4">
//                         <div className="text-[#787878] text-[16px]">
//                             <span>Stream Selection  |  Career Path Guidance  |  College Selection  |  Exam Preparation  |  Study Skills  |  Interview Prep  |  International Studies  </span>
//                         </div>
//                     </div>

//                     {/*Description  */}
//                     <div className="m-4">
//                         <div className="text-[#787878] text-[16px]">
//                             <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute </span>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="border rounded-2xl p-2 m-2 bg-white">
//                 <div className="inline-flex justify-center items-center gap-4 ml-2">
//                     <span className="text-[#787878] text-[20px]">About</span>
//                     <span className="text-[#787878] text-[20px]">Specialties </span>
//                     <span className="text-[#787878] text-[20px]">Resources</span>
//                     <span className="text-[#787878] text-[20px]">Career Feeds</span>
//                     <span className="text-[#787878] text-[20px]">Reviews</span>
//                 </div>
//             </div>
//         </section>
//     )
// }

import { useState, useRef, useEffect, ChangeEvent } from "react";
import {
    Facebook,
    Linkedin,
    Pencil,
    Forward,
    Camera,
} from "lucide-react";

import profileFallback from "@/assets/Profile-1.png";
import coverFallback from "@/assets/cover.png";

export default function Profile() {
    const [coverSrc, setCoverSrc] = useState<string>(coverFallback);
    const [profileSrc, setProfileSrc] = useState<string>(profileFallback);

    const coverInputRef = useRef<HTMLInputElement | null>(null);
    const profileInputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        return () => {
            if (coverSrc !== coverFallback) URL.revokeObjectURL(coverSrc);
            if (profileSrc !== profileFallback) URL.revokeObjectURL(profileSrc);
        };
    }, [coverSrc, profileSrc]);

    const handleChange =
        (setter: (url: string) => void) =>
            (e: ChangeEvent<HTMLInputElement>) => {
                const file = e.target.files?.[0];
                if (!file) return;
                setter(URL.createObjectURL(file));
            };

    return (
        <section>
            <div className="mt-20 border rounded-2xl font-poppins relative bg-white">
                {/* ---------- Cover ---------- */}
                <div className="relative">
                    <img
                        src={coverSrc}
                        alt="cover"
                        className="h-[200px] w-full object-cover rounded-t-xl"
                    />

                    {/* cover‑upload button */}
                    <button
                        onClick={() => coverInputRef.current?.click()}
                        className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                        title="Change cover"
                    >
                        <Camera className="w-5 h-5" />
                    </button>
                    <input
                        ref={coverInputRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleChange(setCoverSrc)}
                    />
                </div>

                {/* ---------- Profile ---------- */}
                <div className="absolute top-[140px] left-5">
                    <div className="relative">
                        <img
                            src={profileSrc}
                            alt="profile"
                            className="w-[170px] h-[170px] rounded-full object-cover border-4 border-white shadow-lg"
                        />

                        {/* profile‑upload button */}
                        <button
                            onClick={() => profileInputRef.current?.click()}
                            className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                            title="Change profile"
                        >
                            <Camera className="w-4 h-4" />
                        </button>
                        <input
                            ref={profileInputRef}
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleChange(setProfileSrc)}
                        />
                        <div className="absolute top-2 lg:right-350">
                            <button className="inline-flex justify-center items-center gap-3 p-4 w-[190px] bg-white focus:bg-[var(--color-bg-purple] rounded-[70px] shadow-2xl h-[70px] text-[20px]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12 text-[#93268F]">
                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clipRule="evenodd" />
                            </svg>
                                Play Intro</button>
                        </div>
                    </div>
                </div>

                {/* ---------- Social icons ---------- */}
                <div className="flex gap-2 absolute right-0 top-[160px] m-3">
                    {[Linkedin, Facebook, Forward].map((Icon, i) => (
                        <div
                            key={i}
                            className="w-[40px] h-[40px] bg-white p-2 inline-flex justify-center items-center rounded-xl shadow-md hover:bg-gray-100"
                        >
                            <Icon />
                        </div>
                    ))}
                </div>

                {/* ---------- Name / rating / verified ---------- */}
                <div className="mt-30 ml-5 flex flex-wrap items-center gap-3">
                    <span className="text-[24px] font-semibold">John Doe</span>

                    <div className="inline-flex items-center gap-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="w-5 h-5 text-yellow-400"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            />
                        </svg>
                        <span>4.5</span>
                    </div>

                    <div className="inline-flex items-center gap-2 p-1.5 border border-dashed rounded-full bg-[#93268F1A] border-[#93268F]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="w-5 h-5 text-[#93268F]"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                            />
                        </svg>
                        <span className="text-[14px] text-[#93268F]">Verified</span>
                    </div>
                    <Pencil className="text-[#93268F] cursor-pointer" />
                </div>

                {/* ---------- Headline ---------- */}
                <p className="m-4 text-[#787878] text-[15px]">
                    Flipkart | Bain &amp; Co. | Gold Medalist, IIT Madras | XLRI
                    Jamshedpur ‑ BM '24 | Accenture, Wipro (PPI)
                </p>

                {/* ---------- Location ---------- */}
                <div className="m-4 inline-flex items-center gap-4 text-[#787878] text-[15px]">
                    <span>Ambala, Haryana, India</span>
                    <button className="text-[#93268F] underline">Contact Info</button>
                </div>

                {/* ---------- Skills ---------- */}
                <h3 className="m-4 font-medium">Skills</h3>
                <p className="mx-4 mb-6 text-[#787878] text-[15px]">
                    Stream Selection &nbsp;|&nbsp; Career Path Guidance &nbsp;|&nbsp; College
                    Selection &nbsp;|&nbsp; Exam Preparation &nbsp;|&nbsp; Study Skills
                    &nbsp;|&nbsp; Interview Prep &nbsp;|&nbsp; International Studies
                </p>

                {/* ---------- About ---------- */}
                <p className="m-4 text-[#787878] text-[15px] leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
            </div>

            {/* ===================== Nav Pills ===================== */}
            <div className="border rounded-2xl p-2 m-2 bg-white">
                <nav className="flex flex-wrap gap-6 ml-2 text-[#787878] text-[18px]">
                    {["About", "Specialties", "Resources", "Career Feeds", "Reviews"].map(
                        (label) => (
                            <span key={label} className="cursor-pointer hover:text-[#93268F]">
                                {label}
                            </span>
                        )
                    )}
                </nav>
            </div>
        </section>
    );
}
