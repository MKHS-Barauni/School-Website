import React from 'react';
import HomeImageGallery from './HomeImageGallery';
import { MdLocationOn } from 'react-icons/md';
import { BsFillCalendarCheckFill } from 'react-icons/bs';
import gradients from '../styles/customGradient.module.css';
import Lottie from 'lottie-react';
import research from '../lottieFiles/research.json';
import { useRouter } from 'next/router';
import Map from './Map';
import TechCollabGallery from './TechCollabGallery';
import Link from 'next/link';
import Sponsors from '../components/Sponsors';
import { IoMdNotifications } from 'react-icons/io';

const HomeMain = () => {
  const router = useRouter();

  const navigate = (dest) => {
    router.push(dest);
  };

  return (
    <>
      <div className={`h-[60vh] md:h-[95vh] mt-[55px] relative ${gradients.homePage}`}>
        <HomeImageGallery />
      </div>

      <div className={`w-full text-black ${gradients.homePage}`}>
        <section className="pt-6 w-full">
          <div className="container mx-auto flex md:px-5 py-2 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 px-6 lg:pr-24 md:pr-16 relative flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="relative title-font text-4xl md:text-6xl mb-4 font-bold border-b-4 pb-4 px-8 md:px-0 md:pr-24 border-cyan-600">
                <span className='text-red-400'>Welcome</span>
              </h1>
              <br />
              <p className="md:mb-8 leading-relaxed font-semibold text-lg text-justify">
                {/* Your existing content */}
                Inspired by the unparalleled contribution made by the great visionary, Barat Ratna, Pandit Madan Mohan Malviya in the field of education, we established an Educational Society called &#34;Mahamana Gyan Sanskriti Foundation&#34;, in the year 2013, with the objective of imparting value based quality education and training in Barauni (Bihar) and surrounding areas. We are a group of professionals from various fields like Engineering, Medical, Education, Journalism, desirous to contribute to the society in the areas of education, skill development, healthcare and other social sectors. Our endeavour started in this direction, in August 2010, with the inception of Lifeline Hospital & Research Canter Barauni. With our untiring and persistent efforts, we have been able to establish new mile stones in terms of establishing quality healthcare facilities including critical emergency medical services.
<br/>
It is well-established that unique teaching /learning has most significant impact during a child&#39;s early developmental years. Therefore, it becomes very important that every child is provided an environment that is most conducive to catalyze the child&#39;s physical, cerebral, emotional and social development. Having realized the need for Montessori Education, we established BACHPAN, a well-known brand of play school nationwide, in 2015. To say the least, we have been able to make the parents realize the importance of pre-school education. The inception of Mahamana Knowledge Heritage School (MKHS), aims to provide an excellent ecosystem to budding kids to discover, nurture and display their talents. MKHS Barauni is situated in an attractive, peaceful and pollution-free Mahamana Knowledge Campus, hardly 1 km away from Barauni railway station. We have tried to set-up state-of-the art infrastructure required for innovative and effective learning of the children.
              </p>
            </div>

            <div className="w-full lg:w-[40%] bg-red-100">
              <img className="object-cover object-center" alt="hero" src="/infra1.png" />
            </div>
          </div>
        </section>

        <section id="callforpaper" className="body-font">
          <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font text-2xl md:text-[5vw] lg:text-4xl mb-4 font-bold border-b-4 pb-4 border-cyan-600">
                <span className='pr-6'>
                  Our Vision
                </span>
              </h1>
              <h2 className='text-orange-600 font-bold text-xl mb-6'>
                To become an excellent center for education which provides scientific knowledge, modern skill and strong value based character <br /> to the young minds.
              </h2>
              </div>
            </div>
        </section>

        <section id="callforpaper" className="body-font">
          <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font text-2xl md:text-[5vw] lg:text-4xl mb-4 font-bold border-b-4 pb-4 border-cyan-600">
                <span className='pr-6'>
                  Our Mission
                </span>
              </h1>
              <h2 className='text-orange-600 font-bold text-xl mb-6'>
              To impart high quality, affordable, education and training to each student.
              </h2>
              </div>
            </div>
        </section>

        <section id="callforpaper" className="body-font">
          <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font text-2xl md:text-[5vw] lg:text-4xl mb-4 font-bold border-b-4 pb-4 border-cyan-600">
                <span className='pr-6'>
                  Our Values and Attributes
                </span>
              </h1>
              <h2 className='text-orange-600 font-bold text-xl mb-6'>
              <img src="/values.png" alt="Values" className="block mx-auto w-[1300px] h-[400px] md:h-[580px] mt-4" />
              </h2>
              </div>
            </div>
        </section>

        <Map />

        <section className="p-6">
  <div className=" container mx-auto flex md:px-5 py-2 flex-col">
     <h1 className="relative title-font mb-4 font-bold border-b-4 pb-4 text-2xl md:text-4xl lg:pr-24 border-cyan-600 w-full md:w-[60%]">Our Partners
      </h1>
    <Sponsors/>
  </div>
</section>

      </div>
    </>
  );
};

export default HomeMain;
