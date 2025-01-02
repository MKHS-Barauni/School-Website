import React from 'react';
import { IoMdClose } from "react-icons/io";
import { useRouter } from 'next/router';
import { motion } from "framer-motion";
import Link from "next/link";
import classes from "../styles/sidebar.module.css";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.06
    }
  }
};

const item = {
  hidden: { opacity: 0, x: 100 },
  show: { opacity: 1, x: 0 }
};

const Sidebar = ({ setIsOpenSidebar }) => {
  const router = useRouter();

  const navigate = (dest) => {
    setIsOpenSidebar(false);
    router.push(dest);
  };

  return (
    <div className="fixed top-0 right-0 h-full w-full flex z-50">
      <motion.div
        initial={{ opacity: 0, scaleX: 3 }}
        animate={{ opacity: 1, scaleX: 1 }}
        exit={{ opacity: 0, scaleX: 3 }}
        transition={{ type: 'linear', duration: 0.2 }}
        className="h-full w-[50%] md:w-[70%] backdrop-brightness-50"
        onClick={() => setIsOpenSidebar(false)}>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ type: 'linear', duration: 0.2 }}
        className="bg-black w-[50%] md:w-[30%] h-full overflow-y-auto">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          exit="close"
          className="flex flex-col gap-2 mt-16 font-semibold text-lg md:text-xl px-4">
          <motion.div variants={item}
            onClick={() => navigate('/')}
            className={`text-stone-300 hover:text-white cursor-pointer p-2 my-2 rounded-xl ${classes.sidebar}`}>
            About
          </motion.div>
          <motion.div variants={item}
            onClick={() => navigate('/admission')}
            className={`text-stone-300 hover:text-white cursor-pointer p-2 my-2 rounded-xl ${classes.sidebar}`}>
            Admission
          </motion.div>
          <motion.div variants={item}
            onClick={() => navigate('/facilities')}
            className={`text-stone-300 hover:text-white cursor-pointer p-2 my-2 rounded-xl ${classes.sidebar}`}>
            Qualities
          </motion.div>

          {/* Dropdown: Campus */}
          <motion.div variants={item}
            className={`relative dropdown dropdown-hover text-stone-300 hover:text-white cursor-pointer p-2 my-2 rounded-xl ${classes.sidebar}`}>
            <div className="">
              <label tabIndex={0} className="m-1">Campus</label>
              <ul tabIndex={0} className="absolute left-0 sm:left-auto sm:right-[2px] text-sm sm:text-md dropdown-content menu p-2 shadow bg-stone-800 rounded-box w-screen sm:w-56">
                <li onClick={() => navigate('/tracks#Classroom')} className="py-2 px-4 hover:bg-white hover:text-black rounded-lg">Classrooms</li>
                <li onClick={() => navigate('/tracks#Playground')} className="py-2 px-4 hover:bg-white hover:text-black rounded-lg">Playground</li>
                <li onClick={() => navigate('/tracks#complab')} className="py-2 px-4 hover:bg-white hover:text-black rounded-lg">Computer Lab</li>
                <li onClick={() => navigate('/tracks#tinkerlab')} className="py-2 px-4 hover:bg-white hover:text-black rounded-lg">Science Lab & Tinkering Lab</li>
              </ul>
            </div>
          </motion.div>

          {/* Dropdown: More */}
          <motion.div variants={item}
            className={`relative dropdown dropdown-hover text-stone-300 hover:text-white cursor-pointer p-2 my-2 rounded-xl ${classes.sidebar}`}>
            <div className="">
              <label tabIndex={0} className="m-1">More</label>
              <ul tabIndex={0} className="absolute left-0 sm:left-auto sm:right-[2px] text-sm sm:text-md dropdown-content menu p-2 shadow bg-stone-800 rounded-box w-screen sm:w-56">
                <li onClick={() => navigate('/more#activities')} className="py-2 px-4 hover:bg-white hover:text-black rounded-lg">Activities</li>
                <li onClick={() => navigate('/more#achievements')} className="py-2 px-4 hover:bg-white hover:text-black rounded-lg">Achievements</li>
                <li onClick={() => navigate('/more#media')} className="py-2 px-4 hover:bg-white hover:text-black rounded-lg">In the Media</li>
              </ul>
            </div>
          </motion.div>

          {/* Dropdown: Disclosures */}
          <motion.div variants={item}
            className={`relative dropdown dropdown-hover text-stone-300 hover:text-white cursor-pointer p-2 my-2 rounded-xl ${classes.sidebar}`}>
            <div className="">
              <label tabIndex={0} className="m-1">Disclosures</label>
              <ul tabIndex={0} className="absolute left-0 sm:left-auto sm:right-[2px] text-sm sm:text-md dropdown-content menu p-2 shadow bg-stone-800 rounded-box w-screen sm:w-56">
                <li onClick={() => navigate('/TrustCertificate')} className="py-2 px-4 hover:bg-white hover:text-black rounded-lg">Trust Certificate</li>
                <li onClick={() => navigate('/NOC')} className="py-2 px-4 hover:bg-white hover:text-black rounded-lg">NOC</li>
                <li onClick={() => navigate('/RecognitionCertificate')} className="py-2 px-4 hover:bg-white hover:text-black rounded-lg">Recognition Certificate</li>
                <li onClick={() => navigate('/BuildingCertificate')} className="py-2 px-4 hover:bg-white hover:text-black rounded-lg">Building Certificate</li>
                <li onClick={() => navigate('/FireCertificate')} className="py-2 px-4 hover:bg-white hover:text-black rounded-lg">Fire Certificate</li>
                <li onClick={() => navigate('/selfdeclarationcertificate')} className="py-2 px-4 hover:bg-white hover:text-black rounded-lg">Self Declaration Certificate</li>
                <li onClick={() => navigate('/WaterHealthCertificate')} className="py-2 px-4 hover:bg-white hover:text-black rounded-lg">Water Health Certificate</li>
                <li onClick={() => navigate('/LandCertificate')} className="py-2 px-4 hover:bg-white hover:text-black rounded-lg">Land Certificate</li>
              </ul>
            </div>
          </motion.div>

          <motion.div variants={item}
            onClick={() => navigate('/Committee')}
            className={`text-stone-300 hover:text-white cursor-pointer p-2 my-2 rounded-xl ${classes.sidebar}`}>
            Our Team
          </motion.div>
        </motion.div>

        <div className="hover:bg-stone-500 mx-10 rounded-full cursor-pointer my-12 flex justify-center" onClick={() => setIsOpenSidebar(false)}>
          <IoMdClose className="w-14 h-14 text-white" />
        </div>
      </motion.div>
    </div>
  );
};

export default Sidebar;
