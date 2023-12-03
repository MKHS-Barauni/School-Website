import React from 'react'
import LeftImageCard from '../components/LeftImageCard'
import RightImageCard from '../components/RightImageCard'
import ImageCard from '../components/ImageCard'

const More = () => {
  return (
    <main className="flex-grow overflow-x-clip bg-gray-50 pt-14">
        <div className="min-h-full bg-gradient-to-r from-white to-indigo-50">
          <div className="relative flex-grow items-start justify-start space-x-2 px-4 md:flex md:flex-row md:px-8 xl:px-10">
            <main className="w-full pt-4 md:flex-grow">
              <div className="flex flex-col items-center justify-center px-4 py-2 sm:p-6">
                {/* <h1 className=" text-center text-black text-4xl sm:text-6xl font-bold leading-[3rem] border-b-4 border-blue-500 pb-1 md:pb-3">Campus</h1> */}
                {/* <div className="mt-1 sm:mt-4 h-1 w-12 sm:w-20 bg-blue-600 rounded"></div> */}
              </div>
              <div id="activities">
              <h1 className=" text-center text-black text-4xl sm:text-6xl font-bold leading-[3rem] border-b-4 border-blue-500 pb-1 md:pb-3">Activities</h1>
              <ImageCard title="Celebrations" image1="/act1.png" image2="/act2.png" image3="/act3.png" />
              <ImageCard title="" image1="/act4.png" image2="/act5.png" image3="/act6.png" />
              <ImageCard title="Outdoor Activities" image1="/od1.png" image2="/od2.png" image3="/od3.png" />
              </div>
              <div id="achievements">
              <h1 className=" text-center text-black text-4xl sm:text-6xl font-bold leading-[3rem] border-b-4 border-blue-500 pb-1 md:pb-3">Achievements</h1>
              <h2 className='text-orange-600 font-bold text-xl mb-6'>
              <img src="/ach.png" alt="Values" className="block mx-auto mt-4" />
              </h2>
              </div>
              <div id="media">
              <h1 className=" text-center text-black text-4xl sm:text-6xl font-bold leading-[3rem] border-b-4 border-blue-500 pb-1 md:pb-3">In the Media</h1>
              <h2 className='text-orange-600 font-bold text-xl mb-6'>
              <img src="/media1.png" alt="Values" className="block mx-auto mt-4" />
              </h2>
              <h2 className='text-orange-600 font-bold text-xl mb-6'>
              <img src="/media2.png" alt="Values" className="block mx-auto mt-4" />
              </h2>
              <h2 className='text-orange-600 font-bold text-xl mb-6'>
              <img src="/media3.png" alt="Values" className="block mx-auto mt-4" />
              </h2>
              </div>
            </main>
          </div>
      
        </div>

      </main>
  )
}

export default More