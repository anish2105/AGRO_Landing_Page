import background from '../images/background.png';

const Hero = () => {
  return (
    <div
      id="home"
      className="relative bg-[#EFF7FE] py-24 sm:py-32"
      data-aos="fade-in"
      style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div> {/*Optional overlay for better text readability */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="max-w-2xl" data-aos="fade-right">
          {/* <h2 className="text-4xl font-bold tracking-tight text-black sm:text-4xl">
            Shree Siddharoodha Agro Equipments
          </h2> */}
          <p className="mt-6 text-lg leading-8 text-black">
            Trading concern of agricultural equipments
          </p>
          <p className="mt-2 text-lg leading-8 text-black">
            All type of agricultural equipments & spares
          </p>
          <p className="mt-2 text-lg leading-8 text-black">
            Subsidised equipments from department of agriculture Karnataka
          </p>
          <p className="mt-2 text-lg leading-8 text-black">
            GSTIN: 29BPEPP4235E1ZV
          </p>
          <div className="mt-10">
            <div className="text-lg leading-8 text-black">
              <h3 className="text-2xl font-bold text-black">Contact us</h3>
              <p className="mt-4">
                Address: Shop No 06, Ground Floor, Dollars Colony, Krishnapur, Dayanand Enclave, Hubli, Dharwad-580030, Karnataka, India
              </p>
              <p className="mt-2">Email: ssaehubli@gmail.com</p>
              <p className="mt-2">Mobile: +91 7411001963, +91 8069857394</p>
            </div>
          </div>
        </div>
        <div className="relative mt-16 lg:mt-0" data-aos="fade-left">
          <svg
            className="absolute -z-10 w-full h-full"
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#F9D7A4"
              d="M200,380 C310,380 380,310 380,200 C380,90 310,20 200,20 C90,20 20,90 20,200 C20,310 90,380 200,380 Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
