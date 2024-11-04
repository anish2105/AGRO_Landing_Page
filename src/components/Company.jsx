import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const people = [
  {
    name: 'Arun Patil',
    ph: '+91 7411001963',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Sheekar Patil',
    ph: '+91 8069857394',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Ashok Dasar',
    ph: '+91 8861869702',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Sunil OG',
    ph: '+91 7022177795',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

export default function Team() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in milliseconds
    });
  }, []);

  return (
    <div id="company" className="bg-[#EFF7FE] py-24 sm:py-32 flex flex-col lg:flex-row justify-center items-center">
      <div className="max-w-7xl w-full mx-auto px-6 lg:px-8 flex flex-col lg:flex-row">
        <div className="max-w-2xl lg:w-1/2">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Get in Touch</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
              We are here to assist you with any questions or needs you may have regarding our agricultural equipment and services. Reach out to our experienced team for personalized support and expert advice.
          </p>
          <ul role="list" className="mt-10 space-y-8">
            {people.map((person, index) => (
              <li key={index} data-aos="fade-up">
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt={person.name} />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.ph}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative lg:w-1/2 mt-12 lg:mt-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            width="100%"
            height="500px" // Increased the height for better visibility
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg shadow-lg"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}