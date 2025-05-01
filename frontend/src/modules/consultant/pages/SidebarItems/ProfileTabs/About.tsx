import Eduction from "@/assets/Icons/ConsultantProfile/img1.png";
import Honors from "@/assets/Icons/ConsultantProfile/img2.png";
import Awards from "@/assets/Icons/ConsultantProfile/img3.png";
import Licenses from "@/assets/Icons/ConsultantProfile/img4.png";
import Skill from "@/assets/Icons/ConsultantProfile/img5.png";
import Languages from "@/assets/Icons/ConsultantProfile/img6.png";
import Project from "@/assets/Icons/ConsultantProfile/img7.png";
import Courses from "@/assets/Icons/ConsultantProfile/img8.png";
import Volunteer from "@/assets/Icons/ConsultantProfile/img9.png";
import Publications from "@/assets/Icons/ConsultantProfile/img10.png";
import { CirclePlus, Plus } from "lucide-react";

export default function About() {
    return (
        <main className="min-h-screen py-6 font-poppins">

            <div className="grid grid-cols-1 gap-4 mt-4 rounded-2xl relative">
                <div className="relative border rounded-xl p-4 bg-white">
                    <h3 className="text-[18px] font-semibold mb-2 text-[#93268F]">
                        Education
                    </h3>

                    <div className="flex flex-col items-center justify-center text-center">
                        <img
                            src={Eduction}
                            alt="Education icon"
                            className="w-[64px] h-[64px] mb-2 object-contain"
                        />
                        <p className="text-[#767477] text-[16px] mb-1">
                            No education records. Add your qualifications here.
                        </p>
                        <button className="font-medium w-auto h-[30px] rounded-[6px] text-[20px] text-[#0FBBC3] hover:text-[#6b1c68] flex items-center justify-center gap-3 mt-4">
                            Add Now
                            <Plus size={20} className="text-[#0FBBC3]" />
                        </button>
                    </div>

                    <button className="absolute top-2 right-2 p-2">
                        <CirclePlus className="w-[31.43px] h-[31.43px] border-[#93268F] rounded-full text-[#93268F]" />
                    </button>
                </div>

                {/* Honors & Awards 1 */}
                <div className="relative border rounded-xl p-4 bg-white">
                    <h3 className="text-[18px] font-semibold mb-2 text-[#93268F] ">Honors & Awards</h3>
                    <div className="flex flex-col items-center justify-center text-center">
                        <img src={Honors} alt="Honors icon" className="w-[64px] h-[64px] mb-2 object-contain" />
                        <p className="text-[#767477] text-[16px] mb-1">No experience records. List your professional experiences here.</p>
                        <button className="font-medium w-auto h-[30px] rounded-[6px] text-[20px] text-[#0FBBC3] hover:text-[#6b1c68] flex items-center justify-center gap-3 mt-4">
                            Add Now
                            <Plus size={20} className="text-[#0FBBC3]" />
                        </button>
                    </div>
                    <button className="absolute top-2 right-2 p-2">
                        <CirclePlus className="w-[31.43px] h-[31.43px] border-[#93268F] rounded-full text-[#93268F]" />
                    </button>
                </div>

                {/* Honors & Awards 2 */}
                <div className="relative border rounded-xl p-4 bg-white">
                    <h3 className="text-[18px] font-semibold mb-2 text-[#93268F]">Honors & Awards</h3>
                    <div className="flex flex-col items-center justify-center text-center">
                        <img src={Awards} alt="Honors icon" className="w-[64px] h-[64px] mb-2 object-contain" />
                        <p className="text-[#767477] text-[16px] mb-1">No honors or awards. Share your recognitions here.</p>
                        <button className="font-medium w-auto h-[30px] rounded-[6px] text-[20px] text-[#0FBBC3] hover:text-[#6b1c68] flex items-center justify-center gap-3 mt-4">
                            Add Now
                            <Plus size={20} className="text-[#0FBBC3]" />
                        </button>
                    </div>
                    <button className="absolute top-2 right-2 p-2">
                        <CirclePlus className="w-[31.43px] h-[31.43px] border-[#93268F] rounded-full text-[#93268F]" />
                    </button>
                </div>

                {/* Licenses & Certifications */}
                <div className="relative border rounded-xl p-4 bg-white">
                    <h3 className="text-[18px] font-semibold mb-2 text-[#93268F]">Licenses & Certifications</h3>
                    <div className="flex flex-col items-center justify-center text-center">
                        <img src={Licenses} alt="License icon" className="w-[64px] h-[64px] mb-2 object-contain" />
                        <p className="text-[#767477] text-[16px] mb-1">No licenses or certifications. Display your credentials here.</p>
                        <button className="font-medium w-auto h-[30px] rounded-[6px] text-[20px] text-[#0FBBC3] hover:text-[#6b1c68] flex items-center justify-center gap-3 mt-4">
                            Add Now
                            <Plus size={20} className="text-[#0FBBC3]" />
                        </button>
                    </div>
                    <button className="absolute top-2 right-2 p-2">
                        <CirclePlus className="w-[31.43px] h-[31.43px] border-[#93268F] rounded-full text-[#93268F]" />
                    </button>
                </div>

                {/* Skills */}
                <div className="relative border rounded-xl p-4 bg-white">
                    <h3 className="text-[18px] font-semibold mb-2 text-[#93268F]">Skills</h3>
                    <div className="flex flex-col items-center justify-center text-center">
                        <img src={Skill} alt="Skills icon" className="w-[64px] h-[64px] mb-2 object-contain" />
                        <p className="text-[#767477] text-[16px] mb-1">No skills added. Showcase your skills here.</p>
                        <button className="font-medium w-auto h-[30px] rounded-[6px] text-[20px] text-[#0FBBC3] hover:text-[#6b1c68] flex items-center justify-center gap-3 mt-4">
                            Add Now
                            <Plus size={20} className="text-[#0FBBC3]" />
                        </button>
                    </div>
                    <button className="absolute top-2 right-2 p-2">
                        <CirclePlus className="w-[31.43px] h-[31.43px] border-[#93268F] rounded-full text-[#93268F]" />
                    </button>
                </div>

                {/* Languages */}
                <div className="relative border rounded-xl p-4 bg-white">
                    <h3 className="text-[18px] font-semibold mb-2 text-[#93268F]">Languages</h3>
                    <div className="flex flex-col items-center justify-center text-center">
                        <img src={Languages} alt="Languages icon" className="w-[64px] h-[64px] mb-2 object-contain" />
                        <p className="text-[#767477] text-[16px] mb-1">No languages added. List languages you speak here.</p>
                        <button className="font-medium w-auto h-[30px] rounded-[6px] text-[20px] text-[#0FBBC3] hover:text-[#6b1c68] flex items-center justify-center gap-3 mt-4">
                            Add Now
                            <Plus size={20} className="text-[#0FBBC3]" />
                        </button>
                    </div>
                    <button className="absolute top-2 right-2 p-2">
                        <CirclePlus className="w-[31.43px] h-[31.43px] border-[#93268F] rounded-full text-[#93268F]" />
                    </button>
                </div>

                {/* Projects */}
                <div className="relative border rounded-xl p-4 bg-white ">
                    <h3 className="text-[18px] font-semibold mb-2 text-[#93268F]">Projects</h3>
                    <div className="flex flex-col items-center justify-center text-center">
                        <img src={Project} alt="Projects icon" className="w-[64px] h-[64px] mb-2 object-contain" />
                        <p className="text-[#767477] text-[16px] mb-1">No projects added. Showcase your projects here.</p>
                        <button className="font-medium w-auto h-[30px] rounded-[6px] text-[20px] text-[#0FBBC3] hover:text-[#6b1c68] flex items-center justify-center gap-3 mt-4">
                            Add Now
                            <Plus size={20} className="text-[#0FBBC3]" />
                        </button>
                    </div>
                    <button className="absolute top-2 right-2 p-2">
                        <CirclePlus className="w-[31.43px] h-[31.43px] border-[#93268F] rounded-full text-[#93268F]" />
                    </button>
                </div>

                {/* Courses */}
                <div className="relative border rounded-xl p-4 bg-white">
                    <h3 className="text-[18px] font-semibold mb-2 text-[#93268F]">Courses</h3>
                    <div className="flex flex-col items-center justify-center text-center">
                        <img src={Courses} alt="Courses icon" className="w-[64px] h-[64px] mb-2 object-contain" />
                        <p className="text-[#767477] text-[16px] mb-1">No courses added. List relevant courses here.</p>
                        <button className="font-medium w-auto h-[30px] rounded-[6px] text-[20px] text-[#0FBBC3] hover:text-[#6b1c68] flex items-center justify-center gap-3 mt-4">
                            Add Now
                            <Plus size={20} className="text-[#0FBBC3]" />
                        </button>
                    </div>
                    <button className="absolute top-2 right-2 p-2">
                        <CirclePlus className="w-[31.43px] h-[31.43px] border-[#93268F] rounded-full text-[#93268F]" />
                    </button>
                </div>

                {/* Volunteer Experiences */}
                <div className="relative border rounded-xl p-4 bg-white ">
                    <h3 className="text-[18px] font-semibold mb-2 text-[#93268F]">Volunteer Experiences</h3>
                    <div className="flex flex-col items-center justify-center text-center">
                        <img src={Volunteer} alt="Volunteer icon" className="w-[64px] h-[64px] mb-2 object-contain" />
                        <p className="text-[#767477] text-[16px] mb-1">No volunteer experiences. Share your volunteer work here.</p>
                        <button className="font-medium w-auto h-[30px] rounded-[6px] text-[20px] text-[#0FBBC3] hover:text-[#6b1c68] flex items-center justify-center gap-3 mt-4">
                            Add Now
                            <Plus size={20} className="text-[#0FBBC3]" />
                        </button>
                    </div>
                    <button className="absolute top-2 right-2 p-2">
                        <CirclePlus className="w-[31.43px] h-[31.43px] border-[#93268F] rounded-full text-[#93268F]" />
                    </button>
                </div>

                {/* Publications */}
                <div className="relative border rounded-xl p-4 bg-white">
                    <h3 className="text-[18px] font-semibold mb-2 text-[#93268F]">Publications</h3>
                    <div className="flex flex-col items-center justify-center text-center">
                        <img src={Publications} alt="Publications icon" className="w-[64px] h-[64px] mb-2 object-contain" />
                        <p className="text-[#767477] text-[16px] mb-1">No publications added. Add your published works here.</p>
                        <button className="font-medium w-auto h-[30px] rounded-[6px] text-[20px] text-[#0FBBC3] hover:text-[#6b1c68] flex items-center justify-center gap-3 mt-4">
                            Add Now
                            <Plus size={20} className="text-[#0FBBC3]" />
                        </button>
                    </div>
                    <button className="absolute top-2 right-2 p-2">
                        <CirclePlus className="w-[31.43px] h-[31.43px] border-[#93268F] rounded-full text-[#93268F]" />
                    </button>
                </div>
            </div>
        </main>
    );
}