import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from "react-icons/fa";

const FooterLinks = [
  { title: "About-Us", link: "#about-us" },
  { title: "Services", link: "#services" },
  { title: "Products", link: "#products" },
  { title: "Company", link: "#company" },
];

const ImpFooterLinks = [
  { title: "Home", link: "#home" },
  { title: "Terms & Conditions", link: "#terms" },
  { title: "Privacy Policy", link: "#privacy-policy" },
  { title: "Contact Us", link: "#contact" },
];

const Footer = () => {
  return (
    <footer className="bg-[#EFF7FE] text-black py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Information */}
        <div data-aos="fade-up">
          <h1 className="text-xl mx-0.5 font-bold ml text-grey-900 mb-4">Shree Siddharoodha Agro Equipments</h1>
          <p className="text-justify mx-0.5">SSAE is a reliable trading concern providing the top-notch sales & service of agricultural equipments. Enriched with more than 30 years of experience in the agricultural equipments sector and administration.</p>
          <div className="flex mt-4 space-x-4">
            <a href="#" className="text-white">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="#" className="text-white">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="#" className="text-white">
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Products */}
        <div data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-xl ml-10 font-bold mb-4">Products</h2>
          <ul className="ml-10">
            <li className="mb-2 cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-black">Rotavator</li>
            <li className="mb-2 cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-black">Baler</li>
            <li className="mb-2 cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-black">Cultivator</li>
          </ul>
        </div>

        {/* Contact Information */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-xl font-bold mb-4">Contact information</h2>
          <p>Shop No 06, Ground Floor, Dollars Colony, Krishnapur, Dayanand Enclave, Hubli, Dharwad-580030, Karnataka, India</p>
          <p className="mt-2">Toll Free: +91 7411001963, +91 8069857394</p>
          <p className="mt-2">ssaehubli@gmail.com</p>
        </div>

        {/* Business Hours */}
        <div data-aos="fade-up" data-aos-delay="300">
          <h2 className="text-xl font-bold mb-4">Business Hours</h2>
          <p><span className="font-bold">Opening Days:</span><br />Monday – Friday : 9am to 8pm<br />Saturday: 9am to 5pm</p>
          <p className="mt-2"><span className="font-bold">Vacations:</span><br />All Sunday Days<br />All Official Holidays</p>
        </div>
      </div>

      <div className="mt-10 text-center border-t border-gray-800 pt-8">
        <p>&copy; 2024 All rights reserved | By Dharanee Agrovatoar</p>
      </div>
    </footer>
  );
};

export default Footer;
