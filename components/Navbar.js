import React, { useState,useEffect } from 'react'
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
    <div  className={`fixed top-0 left-0 right-0 z-50 bg-[#364795] flex flex-col items-center p-6 pb-2 ${scrolltopdata ? 'pt-2' : 'p-6'}`}>
      {router.pathname === '/' && (
      <div className={`font-bold text-3xl transition-100 ${scrolltopdata ? "hidden" : ""}`}>
        {/* Logo section */}
        <div className="flex items-center">
          <Link href='/'>
            <img
              src='/mkhs.png'
              alt='MKHS Logo'
              className='cursor-pointer w-24 h-24 lg:w-32 lg:h-32'
            />
          </Link>
          <img
            src='/schoolname.png'
            alt='School Name'
            className='w-auto h-24 lg:h-32 ml-4'
          />
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
        <Link href='/Committee'>
          <span className={`${router.pathname == "/Committee" ? "text-orange-400" : "text-white"} cursor-pointer w-32 px-4 text-center py-2 hover:font-bold border-b-2 border-black hover:border-b-2 hover:text-orange-400 hover:border-orange-400`}>
            Our Team
          </span>
        </Link>
      </div>

      <span className='block lg:hidden' onClick={() => setIsOpenSidebar(prev => !prev)}>
        <GiHamburgerMenu className='w-6 h-6 text-white' />
      </span>
      <AnimatePresence>
        {isOpenSidebar && <Sidebar setIsOpenSidebar={setIsOpenSidebar} />}
      </AnimatePresence>
    </div>
  )
}

export default Navbar;
