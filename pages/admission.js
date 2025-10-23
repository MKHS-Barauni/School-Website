import React from 'react'
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import examsPreparation from "../lottieFiles/examsPreparation.json"
import gradients from "../styles/customGradient.module.css";
import ImageCard from '../components/ImageCard'

const guideline = () => {
  return (
    <main className={`flex-grow overflow-x-clip bg-gray-50 pt-14 ${gradients.homePage}`}>
      <div className="min-h-full bg-gradient-to-r from-white to-indigo-50 ">
        <div className="relative flex-grow items-start justify-start space-x-2 md:flex md:flex-row md:px-8 xl:px-10 ">
          <main className="w-full space-x-6 pt-4 md:flex-grow ">
            <div className="flex flex-col items-center justify-center px-4 py-2 sm:px-6 sm:py-2">
              <h1 className=" text-center text-black text-4xl sm:text-5xl font-bold leading-[3rem] border-b-4 border-blue-500 pb-1 md:pb-3 ">Admission Process</h1>
              {/* <div className="mt-1 sm:mt-4 h-1 w-12 sm:w-20 bg-blue-600 rounded"></div> */}
            </div>
            <section className=" p-5  text-gray-600 body-font  border-rose-500 rounded mt-4 !ml-0">
              <div className=" flex gap-4 md:flex-row flex-col items-center ">
                <div className=" lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-2 md:mb-0 items-center text-center">
                <p className="px-6 md:px-0 md:mb-8 leading-relaxed  md:font-semibold md:text-lg text-justify">
                  Parents of interested candidates will be required to contact the school to obtain the necessary information. The following steps are to be followed: 
                </p>
                  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> a. Admission Enquiry
                  </h1>
                  <p className="px-6 md:px-0 md:mb-8 leading-relaxed  md:font-semibold md:text-lg text-justify">Personal interaction with the Admission In-Charge, followed by filling-up of Admission Inquiry Form.</p>
                  <h1 className="title-font sm:text-4xl text-3xl mb-4 mt-8 md:mt-2 font-medium text-gray-900 block">b. Registration
                  </h1>
                  <p className="px-6 md:px-0 md:mb-8 leading-relaxed  md:font-semibold md:text-lg text-justify">Parents desirous for admission of their wards, are required to obtain the Registration Form along with the Information Brochure. A duly filled Registration Form is to be submitted with the non-refundable, non-transferable Registration Fee within 7 days from the date of issue of form or the last date given.</p>
<p className="text-red-600 font-bold sm:text-2xl text-xl mb-3">
                    NOTE: ADMISSION DOES NOT IN ANY WAY GUARANTEE ADMISSION
                  </p>
                </div>
              </div>
            </section>
            <section className="text-gray-600 body-font border-rose-500 rounded !ml-0">
              <div className=" flex p-5 gap-4 md:flex-row flex-col items-center">
                <div className="lg:flex-grow  flex flex-col mb-8 md:mb-0 md:items-start md:text-left items-center text-center">
                  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 block">c. Admission Test
                  </h1>
                  <p className="mb-4 leading-relaxed  md:font-semibold md:text-lg">
                  1. Admission up to Class II, will be granted purely on the basis of interaction of candidate with the admission panel. <br/>2. For Class III and higher classes, a candidate has to appear in the Admission Test. which may be written or oral as laid down by the School for different classes. The test will be held for English, Hindi, Mathematics & Science.
                  </p>
                  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 block">d. Documents Required
                  </h1>
                  <p className="mb-4 leading-relaxed  md:font-semibold md:text-lg">
                  &bull; Birth Certificate (Photocopy only).
<br/>
&bull; Aadhar card of child.
<br/>
&bull; Bank account of child (If any).
<br/>
&bull; Transfer Certificate (IF applicable).<br/>&bull; Three passport size photographs of child and two photographs of parents/guardian
<br/>
&bull; Photocopy of resident proof (Voter ID/Ration card/Passport/Aadhar card).<br/> &bull; Medical history records and other details about the child that may be important.
                  </p>
                </div>

              </div>
            </section>
            <ImageCard title="" image1="/ad1.jpg" image2="/ad2.jpg" image3="/ad3.jpg" /> 
            <ImageCard title="" image1="/ad5.jpg" image2="/ad4.jpg" image3="/ad6.jpg" />  
          </main>
        </div>

      </div>

    </main>
  )
}

export default guideline
