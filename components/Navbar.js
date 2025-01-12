import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import Sidebar from './Sidebar';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [scrollTop, setScrollTop] = useState(false);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 bg-[#364795] flex flex-col items-center p-3 pb-2 ${
        scrollTop ? 'pt-2' : 'p-6'
      }`}
    >
      {router.pathname === '/' && (
        <div className={`font-bold text-3xl transition-100 ${scrollTop ? 'hidden' : ''}`}>
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
              <h1 className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-4xl font-serif text-[#FFA500] whitespace-normal leading-tight">
                Mahamana Knowledge Heritage School
              </h1>
              <p className="text-[11px] leading-[11px] sm:text-[10px] md:text-base lg:text-lg text-black">
                AFFILIATED TO C.B.S.E. NEW DELHI, AFFILIATION NO. 331247, SCHOOL CODE - 67069 | NURSERY TO 10+2
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Links for Larger Screens */}
      <div className="hidden lg:flex pt-0.1 lg:gap-2 text-lg font-semibold text-black">
        {[
          { path: '/', label: 'About' },
          { path: '/admission', label: 'Admission' },
          { path: '/facilities', label: 'Qualities' },
        ].map((link) => (
          <Link href={link.path} key={link.label}>
            <span
              className={`${
                router.pathname === link.path ? 'text-black' : 'text-black'
              } cursor-pointer w-32 px-4 text-center py-2 hover:font-bold border-b-2 border-black hover:border-blue-400 hover:text-blue-400`}
            >
              {link.label}
            </span>
          </Link>
        ))}

        {/* Dropdown Links */}
        <DropdownMenu label="Campus" links={campusLinks} style={{ color: "black" }} />
        <DropdownMenu label="More" links={moreLinks} style={{ color: "black" }} />
        <DropdownMenu label="Disclosures" links={disclosureLinks}  style={{ color: "black" }}/>

        <Link href="/Committee">
          <span
            className={`${
              router.pathname === '/Committee' ? 'text-orange-400' : 'text-black'
            } cursor-pointer w-32 px-4 text-center py-2 hover:font-bold border-b-2 border-black hover:border-orange-400 hover:text-orange-400`}
          >
            Our Team
          </span>
        </Link>
      </div>

      {/* Hamburger Menu for Mobile */}
      <span className="block lg:hidden ml-auto" onClick={() => setIsOpenSidebar((prev) => !prev)}>
        <GiHamburgerMenu className="w-6 h-6 text-black" />
      </span>

      {/* Sidebar */}
      <AnimatePresence>{isOpenSidebar && <Sidebar setIsOpenSidebar={setIsOpenSidebar} />}</AnimatePresence>

      {/* Custom Scrollbar Styling */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #2d3748;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #4a5568;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

// Dropdown Menu Component
const DropdownMenu = ({ label, links }) => (
  <span className="dropdown dropdown-hover dropdown-end cursor-pointer w-32 px-4 text-center py-2 hover:font-bold border-b-2 border-black hover:border-orange-400">
    <label tabIndex={0} className="hover:text-blue-400 m-1 relative text-black">
      {label}
    </label>
    <div className="absolute top-[42px] -left-10 dropdown-content p-4">
      <ul className="text-white text-[17px] font-semibold menu p-2 shadow bg-stone-800 rounded-xl w-52 flex flex-col items-start">
        {links.map((link) => (
          <Link href={link.path} key={link.label}>
            <li
              className={`${
                link.active ? 'text-orange-400' : ''
              } hover:bg-orange-300 hover:text-black rounded-lg w-full text-left p-2`}
            >
              {link.label}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  </span>
);

// Links for Dropdowns
const campusLinks = [
  { path: '/tracks#Classroom', label: 'Classrooms' },
  { path: '/tracks#Playground', label: 'Playground' },
  { path: '/tracks#complab', label: 'Computer Lab' },
  { path: '/tracks#complab', label: 'Science Lab & Tinkering Lab' },
];

const moreLinks = [
  { path: '/more#activities', label: 'Activities' },
  { path: '/more#achievements', label: 'Achievements' },
  { path: '/more#media', label: 'In the Media' },
];

const disclosureLinks = [
  { path: '/TrustCertificate', label: 'Trust Certificate' },
  { path: '/NOC', label: 'NOC' },
  { path: '/RecognitionCertificate', label: 'Recognition Certificate' },
  { path: '/BuildingCertificate', label: 'Building Certificate' },
  { path: '/FireCertificate', label: 'Fire Certificate' },
  { path: '/selfdeclarationcertificate', label: 'Self Declaration Certificate' },
  { path: '/WaterHealthCertificate', label: 'Water Health Certificate' },
  { path: '/LandCertificate', label: 'Land Certificate' },
  { path: '/FeeStructure', label: 'Fee Structure' },
  { path: '/AcademicCalender', label: 'Academic Calendar' },
  { path: '/SMC', label: 'List of SMC' },
  { path: '/PTA', label: 'List of PTA' },
  { path: '/ThreeYearResult', label: '3 Year Results' },
  { path: '/MandatoryPublicDisclosures', label: 'Mandatory Public Disclosures' },
];

export default Navbar;
