import cropImage from '../images/crop.jpg';

const links = [
  { name: 'Open roles', href: '#' },
  { name: 'Internship program', href: '#' },
  { name: 'Our values', href: '#' },
  { name: 'Meet our leadership', href: '#' },
];
const stats = [
  { name: 'Offices worldwide', value: '12' },
  { name: 'Full-time colleagues', value: '300+' },
  { name: 'Hours per week', value: '40' },
  { name: 'Paid time off', value: 'Unlimited' },
];

export default function Hero() {
  return (
    <div id="home" className="relative bg-white py-24 sm:py-32" data-aos="fade-in">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between">
        <div className="max-w-2xl" data-aos="fade-right">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Shree Siddharoodha Agro Equipments
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat fugiat aliqua.
          </p>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-gray-900 sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href} className="hover:underline" data-aos="fade-up">
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse" data-aos="fade-up">
                  <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-gray-900">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="relative hidden lg:block" data-aos="fade-left">
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
          <img src={cropImage} alt="Crop" className="w-80 h-auto object-cover" />
        </div>
      </div>
    </div>
  );
}
