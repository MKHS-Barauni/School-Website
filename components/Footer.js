import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="relative bg-stone-50 body-font border-t-2 border-stone-600">
      <div className="flex flex-col md:flex-row items-center justify-center px-5 py-12 mx-auto">
        
        <div className="md:w-1/2 md:flex-grow flex justify-center items-center">
          <div className="w-72 py-2 mr-20"> {/* Added margin-right here */}
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-xl mb-2 border-b-4 border-blue-500 pb-1 md:pb-2 rounded">Contact Information</h2>
            <nav className="list-none mb-10 mt-3">
              <li className="text-gray-600 hover:text-gray-800"><b>PHONE:</b> +91 9973747587, +91 8877180037, +91 8877180097</li>
              <li className="text-gray-600 hover:text-gray-800"><b>EMAIL:</b> mkhsbarauni@gmail.com</li>
              <li className="text-gray-600 hover:text-gray-800"><b>ADDRESS:</b> Kashidham Campus, Bhagwanpur Road, Pipra Devas, Barauni ,Begusarai - 851112</li>
        <li className="text-gray-600 hover:text-gray-800"><b>WEBSITE:</b> <a href="www.mkhsbarauni.co.in">www.mkhsbarauni.co.in</a></li>
            </nav>
          </div>
          <div className="ml-6">
            <Image src="/mgsf.png" alt="MGSF" width={700} height={250} />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
