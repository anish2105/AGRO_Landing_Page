import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import image1 from '../images/banner1.png';
import image2 from '../images/banner2.png';
import image3 from '../images/banner3.png';

const Carousels = () => {
  return (
    <div
      className="relative py-24 sm:py-32"
      style={{
        background: 'linear-gradient(145deg, #EBEFF9, #EFECF9)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Carousel 
          autoPlay 
          interval={1800} 
          infiniteLoop 
          showThumbs={false} 
          showStatus={false} 
          showArrows={false}
        >
          <div>
            <img src={image1} alt="Image 1" className="object-contain h-96" />
          </div>
          <div>
            <img src={image2} alt="Image 2" className="object-contain h-96" />
          </div>
          <div>
            <img src={image3} alt="Image 3" className="object-scale-down h-96" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Carousels;


// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
// import image1 from '../images/banner1.png';
// import image2 from '../images/banner2.png';
// import image3 from '../images/banner3.png';

// const Carousels = () => {
//   return (
//     <div className="relative bg-white py-24 sm:py-32">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//       {/* <h2 className="text-center  text-lg font-semibold leading-8 text-gray-900">
//           Banners
//         </h2> */}
//         <Carousel 
//           autoPlay 
//           interval={1500} 
//           infiniteLoop 
//           showThumbs={false} 
//           showStatus={false} 
//           showArrows={true}
//         >
//           <div>
//             <img src={image1} alt="Image 1" className="object-contain w-full h-96" />
//           </div>
//           <div>
//             <img src={image2} alt="Image 2" className="object-contain w-full h-96" />
//           </div>
//           <div>
//             <img src={image3} alt="Image 3" className="object-contain w-full h-96" />
//           </div>
//         </Carousel>
//       </div>
//     </div>
//   );
// }

// export default Carousels;
