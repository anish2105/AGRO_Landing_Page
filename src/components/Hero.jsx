import React from "react";
import Carousels from "./Carousels"; // Import the Carousels component

const Hero = () => {
  return (
    <section
      id="home"
      className="relative py-24 sm:py-32 flex flex-col lg:flex-row justify-center items-center bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50"
      data-aos="fade-in"
    >
      <div className="absolute inset-0"></div> {/* Optional overlay for better text readability */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 flex flex-col lg:flex-row items-center text-center lg:text-left">
        <div className="max-w-lg lg:max-w-xl lg:w-1/2" data-aos="fade-right">
          <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
            Empowering Farmers with Modern Tools
          </h1>
          <p className="mt-6 text-lg leading-8 text-black">
            A reliable trading concern providing top-notch sales & service of agricultural equipment. 
            Enriched with over 30 years of experience in the agricultural equipment sector and administration.
          </p>
          <div className="mt-10">
            <a
              href="#contact"
              className="inline-block px-6 py-3 text-lg font-semibold text-white bg-[#007BFF] rounded-lg shadow-lg hover:bg-[#0056b3] transition"
            >
              Get in Touch
            </a>
          </div>
        </div>
        <div className="relative mt-16 lg:mt-0 lg:w-1/2 flex justify-center">
          <Carousels />
        </div>
      </div>
    </section>
  );
};

export default Hero;



// import farmer from '../images/hero.jpeg';

// const Hero = () => {
//   return (
//     <div
//       id="home"
//       className="relative py-24 sm:py-32"
//       data-aos="fade-in"
//       style={{
//         background: 'linear-gradient(135deg, #ebf8ff, #f3e5f5)',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       <div className="absolute inset-0"></div> {/* Optional overlay for better text readability */}
//       <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 flex flex-col lg:flex-row items-center text-center lg:text-left">
//         <div className="max-w-lg lg:max-w-xl lg:w-1/2" data-aos="fade-right">
//           <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
//             Empowering Farmers with Modern Tools
//           </h1>
//           <p className="mt-6 text-lg leading-8 text-black">
//             A reliable trading concern providing top-notch sales & service of agricultural equipment.
//             Enriched with more than 30 years of experience in the agricultural equipment sector and administration.
//           </p>
//           <div className="mt-10">
//             <a
//               href="#contact"
//               className="inline-block px-6 py-3 text-lg font-semibold text-white bg-[#007BFF] rounded-lg shadow-lg hover:bg-[#0056b3] transition"
//             >
//               Get in Touch
//             </a>
//           </div>
//         </div>
//         <div className="relative mt-16 lg:mt-0 lg:w-1/2 flex justify-center" data-aos="fade-left">
//           <img
//             src={farmer}
//             alt="Farmer"
//             style={{ width: '560px', height: '395px', maxWidth: '100%' }}
//             className="object-contain"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

