import React, { useState, useEffect } from 'react'
import fonts from "../styles/customFont.module.css"
import Sidebar from './Sidebar'
import { GiHamburgerMenu } from "react-icons/gi"
import Link from "next/link";
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';


const Navbar = () => {
 const router = useRouter();
 const [isOpenSidebar, setIsOpenSidebar] = useState(false);
 const [scrolltopdata, setscrolltopdata] = useState(false);


 useEffect(() => {
   window.addEventListener('scroll', () => {
     if (window.scrollY < 30) {
       setscrolltopdata(false);
     } else {
       setscrolltopdata(true);
     }
   });
 }, [])


 return (
   <div className={`fixed top-0 left-0 right-0 z-50 bg-[#364795] flex flex-col items-center p-3 pb-2 ${scrolltopdata ? 'pt-2' : 'p-6'}`}>
     {router.pathname === '/' && (
      <div
      className={`font-bold text-3xl transition-100 ${
        scrolltopdata ? "hidden" : ""
      }`}
    >
    
     <div className="flex items-center gap-4">
 {/* Logo */}
 <Link href="/">
   <img
     src="/mkhs1.png"
     alt="MKHS Logo"
     className="cursor-pointer w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32"
   />
 </Link>


 {/* School Name */}
 <div className="flex-1 min-w-0">
 <h1
 className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-4xl font-serif text-[#e8d6a6] whitespace-normal leading-tight"
>
 Mahamana Knowledge Heritage School
</h1>
   <p
     className="text-[11px] leading-[10px] sm:text-sm md:text-base lg:text-lg text-white"
   >
     AFFILIATED TO C.B.S.E. NEW DELHI, AFFILIATION NO. 331247, SCHOOL CODE - 67069 | NURSERY TO 10+2
   </p>

 </div>


 </div>






    </div>
     )}


     <div className='hidden lg:flex pt-0.1 lg:gap-2 text-lg font-semibold'>
       <Link href='/'>
         <span className={`${router.pathname == "/" ? "text-orange-400" : "text-white"} cursor-pointer w-32 px-4 text-center py-2 hover:font-bold border-b-2 border-black hover:border-b-2 hover:text-orange-400 hover:border-orange-400`}>
           About
         </span>
       </Link>
       <Link href='/admission'>
         <span className={`${router.pathname == "/admission" ? "text-orange-400" : "text-white"} cursor-pointer w-32 px-4 text-center py-2 hover:font-bold border-b-2 border-black hover:border-b-2 hover:text-orange-400 hover:border-orange-400`}>
           Admission
         </span>
       </Link>
       <Link href='/facilities'>
         <span className={`${router.pathname == "/facilities" ? "text-orange-400" : "text-white"} cursor-pointer w-32 px-4 text-center py-2 hover:font-bold border-b-2 border-black hover:border-b-2 hover:text-orange-400 hover:border-orange-400`}>
           Qualities
         </span>
       </Link>
       <span className={`text-orange-400 hover:border-orange-400 dropdown dropdown-hover dropdown-end cursor-pointer w-32 px-4 text-center py-2 hover:font-bold border-b-2 border-black hover:border-b-2`}>
         <label tabIndex={0} className='hover:text-orange-400 m-1 relative text-white'>
         <Link href='/tracks'>
         <span className={`${router.pathname == "/tracks" ? "text-orange-400" : "text-white"}`}>
           Campus
         </span>
       </Link>
         </label>
         <div className='absolute top-[42px] -left-10 dropdown-content p-4'>
           <ul tabIndex={0} className="text-white text-[17px] font-semibold menu p-2 shadow bg-stone-800 rounded-xl w-52 flex flex-col items-start">
             <Link href='/tracks#Classroom'>
               <li className={`${router.pathname == "/tracks#Classroom" ? "hover-border-orange-400 text-orange-400" : ""} hover-bg-orange-300 hover-text-black rounded-lg w-full text-left p-2`}>
                 Classrooms
               </li>
             </Link>
             <Link href='/tracks#Playground'>
               <li className={`${router.pathname == "/tracks#Playground" ? "hover-border-orange-400 text-orange-400" : ""} hover-bg-orange-300 hover-text-black rounded-lg w-full text-left p-2`}>
                 Playground
               </li>
             </Link>
             <Link href='/tracks#complab' scroll={false}>
               <li className={`${router.pathname == "/tracks#complab" ? "hover-border-orange-400 text-orange-400" : ""} hover-bg-orange-300 hover-text-black rounded-lg w-full text-left p-2`}>
                 Computer Lab
                 </li>
             </Link>
             <Link href='/tracks#complab' scroll={false}>
               <li className={`${router.pathname == "/tracks#complab" ? "hover-border-orange-400 text-orange-400" : ""} hover-bg-orange-300 hover-text-black rounded-lg w-full text-left p-2`}>
                 Science Lab & Tinkering lab
                 </li>
             </Link>
           </ul>
         </div>
       </span>
       <span className={`text-orange-400 hover:border-orange-400 dropdown dropdown-hover dropdown-end cursor-pointer w-32 px-4 text-center py-2 hover:font-bold border-b-2 border-black hover:border-b-2`}>
         <label tabIndex={0} className='hover:text-orange-400 m-1 relative text-white'>
         <Link href='/more'>
         <span className={`${router.pathname == "/more" ? "text-orange-400" : "text-white"}`}>
           More
         </span>
       </Link>
         </label>
         <div className='absolute top-[42px] -left-10 dropdown-content p-4'>
           <ul tabIndex={0} className="text-white text-[17px] font-semibold menu p-2 shadow bg-stone-800 rounded-xl w-52 flex flex-col items-start">
             <Link href='/more#activities'>
               <li className={`${router.pathname == "/more#activities" ? "hover-border-orange-400 text-orange-400" : ""} hover-bg-orange-300 hover-text-black rounded-lg w-full text-left p-2`}>
                 Activities
               </li>
             </Link>
             <Link href='/more#achievements'>
               <li className={`${router.pathname == "/more#achievements" ? "hover-border-orange-400 text-orange-400" : ""} hover-bg-orange-300 hover-text-black rounded-lg w-full text-left p-2`}>
                 Achievements
               </li>
             </Link>
             <Link href='/more#media' scroll={false}>
               <li className={`${router.pathname == "/more#media" ? "hover-border-orange-400 text-orange-400" : ""} hover-bg-orange-300 hover-text-black rounded-lg w-full text-left p-2`}>
                 In the Media
                 </li>
             </Link>
           </ul>
         </div>
       </span>
       <span className={`text-orange-400 hover:border-orange-400 dropdown dropdown-hover dropdown-end cursor-pointer w-32 px-4 text-center py-2 hover:font-bold border-b-2 border-black hover:border-b-2`}>
         <label tabIndex={0} className='hover:text-orange-400 m-1 relative text-white'>
           <Link href='/'>
             <span className={"text-white"}>
               Disclosures
             </span>
           </Link>
         </label>
         <div className='absolute top-[42px] -left-10 dropdown-content p-4'>
           <div className="text-white text-[17px] font-semibold menu p-2 shadow bg-stone-800 rounded-xl w-52 max-h-[60vh] overflow-y-auto custom-scrollbar">
             <ul>
               <Link href='/TrustCertificate'>
                 <li className="hover:bg-orange-300 hover:text-black rounded-lg w-full text-left p-2">
                   Trust Certificate
                 </li>
               </Link>
               <Link href='/NOC'>
                 <li className="hover:bg-orange-300 hover:text-black rounded-lg w-full text-left p-2">
                   NOC
                 </li>
               </Link>
               <Link href='/RecognitionCertificate'>
                 <li className="hover:bg-orange-300 hover:text-black rounded-lg w-full text-left p-2">
                   Recognition Certificate
                 </li>
               </Link>
               <Link href='/BuildingCertificate'>
                 <li className="hover:bg-orange-300 hover:text-black rounded-lg w-full text-left p-2">
                   Building Certificate
                 </li>
               </Link>
               <Link href='/FireCertificate'>
                 <li className="hover:bg-orange-300 hover:text-black rounded-lg w-full text-left p-2">
                   Fire Certificate
                 </li>
               </Link>
               <Link href='/selfdeclarationcertificate'>
                 <li className="hover:bg-orange-300 hover:text-black rounded-lg w-full text-left p-2">
                   Self Declaration Certificate
                 </li>
               </Link>
               <Link href='/WaterHealthCertificate'>
                 <li className="hover:bg-orange-300 hover:text-black rounded-lg w-full text-left p-2">
                   Water Health Certificate
                 </li>
               </Link>
               <Link href='/LandCertificate'>
                 <li className="hover:bg-orange-300 hover:text-black rounded-lg w-full text-left p-2">
                   Land Certificate
                 </li>
               </Link>
               <Link href='/FeeStructure'>
                 <li className="hover:bg-orange-300 hover:text-black rounded-lg w-full text-left p-2">
                   Fee Structure
                 </li>
               </Link>
               <Link href='/AcademicCalender'>
                 <li className="hover:bg-orange-300 hover:text-black rounded-lg w-full text-left p-2">
                   Academic Calendar
                 </li>
               </Link>
               <Link href='/SMC'>
                 <li className="hover:bg-orange-300 hover:text-black rounded-lg w-full text-left p-2">
                   List of SMC
                 </li>
               </Link>
               <Link href='/PTA'>
                 <li className="hover:bg-orange-300 hover:text-black rounded-lg w-full text-left p-2">
                   List of PTA
                 </li>
               </Link>
               <Link href='/ThreeYearResult'>
                 <li className="hover:bg-orange-300 hover:text-black rounded-lg w-full text-left p-2">
                   3 Year Results
                 </li>
               </Link>
               <Link href='/MandatoryPublicDisclosures'>
                 <li className="hover:bg-orange-300 hover:text-black rounded-lg w-full text-left p-2">
                   Mandatory Public Disclosures
                 </li>
               </Link>
             </ul>
           </div>
         </div>
       </span>
       <Link href='/Committee'>
         <span className={`${router.pathname == "/Committee" ? "text-orange-400" : "text-white"} cursor-pointer w-32 px-4 text-center py-2 hover:font-bold border-b-2 border-black hover:border-b-2 hover:text-orange-400 hover:border-orange-400`}>
           Our Team
         </span>
       </Link>
     </div>


     <span
   className="block lg:hidden ml-auto"
   onClick={() => setIsOpenSidebar((prev) => !prev)}
 >
   <GiHamburgerMenu className="w-6 h-6 text-white" />
 </span>
     <AnimatePresence>
       {isOpenSidebar && <Sidebar setIsOpenSidebar={setIsOpenSidebar} />}
     </AnimatePresence>


     <style jsx>{`
       .custom-scrollbar::-webkit-scrollbar {
         width: 8px;
       }
       .custom-scrollbar::-webkit-scrollbar-track {
         background: #2d3748;
       }
       .custom-scrollbar::-webkit-scrollbar-thumb {
         background-color: #4a5568;
         border-radius: 20px;
       }
     `}</style>
   </div>
 )
}


export default Navbar;