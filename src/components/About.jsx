export default function Promo() {
  return (
    <section
      id="banner"
      className="h-screen flex flex-col justify-center items-center py-12 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50"
      data-aos="fade-in"
    >
      <div className="text-center mb-10">
        <h1 className="text-lg font-bold tracking-tight text-gray-900 sm:text-5xl">
          Discover Our Services
        </h1>
      </div>
      <div className="flex justify-center gap-8">
        {/* Card 1 */}
        <div className="relative p-8 w-80 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out">
          <h2 className="text-2xl font-semibold text-gray-800">Agricultural Equipment</h2>
          <p className="mt-4 text-gray-600">
            Providing top-notch sales & service of agricultural equipment. We offer certified and tested equipment, ensuring long service life and trust.
          </p>
        </div>
        {/* Card 2 */}
        <div className="relative p-8 w-80 bg-green-500 text-white shadow-lg rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out">
          <h2 className="text-2xl font-semibold">About Us</h2>
          <p className="mt-4">
            With over 30 years of experience, SSAE is committed to delivering the best to farmers with transparent communication, government incentives, and the best equipment solutions.
          </p>
        </div>
        {/* Card 3 */}
        <div className="relative p-8 w-80 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out">
          <h2 className="text-2xl font-semibold text-gray-800">After-Sales Service</h2>
          <p className="mt-4 text-gray-600">
            SSAE provides spare parts and after-sales services with a solid network of OEMs for quick and efficient support.
          </p>
        </div>
      </div>
    </section>
  );
}



// export default function Promo() {
//   return (
//     <div id ="about-us" className="relative overflow-hidden bg-white mt-10" data-aos="fade-in">
//       <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
//         <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
//           <div className="sm:max-w-lg" data-aos="fade-right">
//             <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
//               About us
//             </h1>
//             <p className="mt-4 text-xl text-gray-500">
//               This year, our new summer collection will shelter you from the harsh elements of a world that doesnt care
//               if you live or die.
//             </p>
//           </div>
//           <div>
//             <div className="mt-10">
//               {/* Decorative image grid */}
//               <div
//                 aria-hidden="true"
//                 className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
//                 data-aos="fade-up"
//               >
//                 <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
//                   <div className="flex items-center space-x-6 lg:space-x-8">
//                     <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
//                       <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
//                         <img
//                           src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
//                           alt=""
//                           className="h-full w-full object-cover object-center"
//                         />
//                       </div>
//                       <div className="h-64 w-44 overflow-hidden rounded-lg">
//                         <img
//                           src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
//                           alt=""
//                           className="h-full w-full object-cover object-center"
//                         />
//                       </div>
//                     </div>
//                     <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
//                       <div className="h-64 w-44 overflow-hidden rounded-lg">
//                         <img
//                           src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
//                           alt=""
//                           className="h-full w-full object-cover object-center"
//                         />
//                       </div>
//                       <div className="h-64 w-44 overflow-hidden rounded-lg">
//                         <img
//                           src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
//                           alt=""
//                           className="h-full w-full object-cover object-center"
//                         />
//                       </div>
//                       <div className="h-64 w-44 overflow-hidden rounded-lg">
//                         <img
//                           src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
//                           alt=""
//                           className="h-full w-full object-cover object-center"
//                         />
//                       </div>
//                     </div>
//                     <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
//                       <div className="h-64 w-44 overflow-hidden rounded-lg">
//                         <img
//                           src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
//                           alt=""
//                           className="h-full w-full object-cover object-center"
//                         />
//                       </div>
//                       <div className="h-64 w-44 overflow-hidden rounded-lg">
//                         <img
//                           src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
//                           alt=""
//                           className="h-full w-full object-cover object-center"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <a
//                 href="#"
//                 className="inline-block rounded-md border border-transparent bg-indigo-500 px-8 py-3 text-center font-medium text-white hover:bg-indigo-600"
//                 data-aos="fade-up"
//               >
//                 Shop Collection
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
