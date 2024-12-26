import React from 'react';
import Image from 'next/image';


const Footer = () => {
 return (
   <footer className="relative bg-stone-50 body-font border-t-2 border-stone-600">
     <div className="flex flex-col md:flex-row items-center justify-center px-5 py-12 mx-auto">
      
       {/* Image Section */}
       <div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
         <Image
           src="/mgsf.png"
           alt="MGSF"
           width={500}
           height={200}
           className="rounded-md shadow-md"
         />
       </div>


       {/* Contact Details Section */}
       <div className="w-full md:w-1/2 flex justify-center items-center">
         <div className="w-full md:w-72 px-4 md:px-0">
           <h2 className="title-font font-medium text-gray-900 tracking-widest text-xl mb-2 border-b-4 border-blue-500 pb-1 md:pb-2 rounded">
             Contact Information
           </h2>
           <nav className="list-none mb-10 mt-3">
             <li className="text-gray-600 hover:text-gray-800"><b>PHONE:</b> +91 9973747587, +91 8877180037, +91 8877180097</li>
             <li className="text-gray-600 hover:text-gray-800"><b>EMAIL:</b> mkhsbarauni@gmail.com</li>
             <li className="text-gray-600 hover:text-gray-800"><b>ADDRESS:</b> Kashidham Campus, Bhagwanpur Road, Pipra Devas, Barauni, Begusarai - 851112</li>
             <li className="text-gray-600 hover:text-gray-800">
               <b>WEBSITE:</b>
               <a href="http://www.mkhsbarauni.co.in" className="text-blue-600 hover:underline">
                 www.mkhsbarauni.co.in
               </a>
             </li>
           </nav>
         </div>
       </div>
     </div>
   </footer>
 );
};


export default Footer;
