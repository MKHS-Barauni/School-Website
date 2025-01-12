import React from 'react';
import LeftImageCard from '../components/LeftImageCard';
import RightImageCard from '../components/RightImageCard';
import ImageCard from '../components/ImageCard';

const More = () => {
  return (
    <main className="flex-grow bg-gray-50 pt-14">
      <div className="min-h-full bg-gradient-to-r from-white to-indigo-50">
        <div className="relative flex-grow px-4 md:px-8 xl:px-10">
          <main className="w-full pt-4">
            {/* Activities Section */}
            <div id="activities" className="flex flex-col items-center px-4 sm:px-6">
              <h1 className="text-center text-black text-3xl sm:text-5xl font-bold leading-tight border-b-4 border-blue-500 pb-2">
                Activities
              </h1>
              <div className="space-y-8 mt-6">
                <ImageCard
                  title="Celebrations"
                  image1="/c1.jpg"
                  image2="/c2.jpg"
                  image3="/c3.jpg"
                />
                <ImageCard
                  title=""
                  image1="/c4.jpg"
                  image2="/c5.jpg"
                  image3="/c6.jpg"
                />
                <ImageCard
                  title="Outdoor Activities"
                  image1="/mo1.jpg"
                  image2="/mo2.jpeg"
                  image3="/mo3.jpg"
                />
                <ImageCard
                  title=""
                  image1="/mo4.jpg"
                  image2="/mo5.jpg"
                  image3="/mo6.jpg"
                />
              </div>
            </div>

            {/* Achievements Section */}
            <div id="achievements" className="flex flex-col items-center px-4 sm:px-6 mt-12">
              <h1 className="text-center text-black text-3xl sm:text-5xl font-bold leading-tight border-b-4 border-blue-500 pb-2">
                Achievements
              </h1>
              <div className="mt-6">
                <img
                  src="/ach.png"
                  alt="Achievements"
                  className="block mx-auto w-full max-w-md"
                />
              </div>
            </div>

            {/* In the Media Section */}
            <div id="media" className="flex flex-col items-center px-4 sm:px-6 mt-12">
              <h1 className="text-center text-black text-3xl sm:text-5xl font-bold leading-tight border-b-4 border-blue-500 pb-2">
                In the Media
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                <img
                  src="/media1.png"
                  alt="Media 1"
                  className="w-full max-w-md mx-auto"
                />
                <img
                  src="/media2.png"
                  alt="Media 2"
                  className="w-full max-w-md mx-auto"
                />
                <img
                  src="/media3.png"
                  alt="Media 3"
                  className="w-full max-w-md mx-auto"
                />
                <img
                  src="/med1.jpg"
                  alt="Media 1"
                  className="w-full max-w-md mx-auto"
                />
                <img
                  src="/med2.jpg"
                  alt="Media 2"
                  className="w-full max-w-md mx-auto"
                />
                <img
                  src="/med3.jpg"
                  alt="Media 3"
                  className="w-full max-w-md mx-auto"
                />
              </div>
            </div>
          </main>
        </div>
      </div>
    </main>
  );
};

export default More;
