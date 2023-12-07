import { Fragment , useEffect, useState} from 'react'
import { Disclosure} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Toggler from "./Toggler"
import './Underline.css';
import { useLocation, Link} from 'react-router-dom';

const navigation = [
  { name: 'About', href: '/', current: true },
  { name: 'Projects', href: '/projects', current: false },
  { name: 'Resume', href: '/Daniel_Ha_Resume.pdf', current: false },
  // {name: 'Slideshow', href: '/slideshow', current:false}
]
export default function Navbar() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const location = useLocation();
    // Function to determine if the nav item corresponds to the current page
  const isCurrentPage = (href) => {
    // Adjust this logic based on how your URLs are structured
    return location.pathname === href || (location.pathname === '/' && href === '*');
  };
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640); // 640px is Tailwind's 'sm' breakpoint
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);


  return (
    <Disclosure as="nav" className={` bg-white dark:bg-gray-800 ${isSmallScreen ? 'sticky top-0' : ''}`}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/" className='text-black dark:text-slate-200 font-medium text-xl font-mono'>Daniel Ha</Link>
                  <Toggler></Toggler>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                {/* Mobile menu button*/}
                <Disclosure.Button className="sm:hidden relative inline-flex items-center justify-center rounded-md p-2 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              
              {/*uncollapsed menu*/}
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                {navigation.map((item) => {
                  if (item.name === 'Resume') {
                    // Use a regular <a> tag for the Resume link
                    return (
                      <a
                        href={item.href} // Make sure this points to your PDF file
                        key={item.name}
                        // Remove target="_blank" to open in the same tab
                        className={`text-black dark:text-slate-200 ${
                          isCurrentPage(item.href) ? 'custom-underline' : ''
                        }`}
                      >
                        {item.name}
                      </a>
                    );
                  } else {
                    // Use the Link component from React Router for other navigation items
                    return (
                      <Link
                        to={item.href}
                        key={item.name}
                        className={`text-black dark:text-slate-200 ${
                          isCurrentPage(item.href) ? 'custom-underline' : ''
                        }`}
                        aria-current={isCurrentPage(item.href) ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    );
                  }
                })}
              </div>
            </div>
            </div>
          </div>

          {/*collapsed menu*/}
          <Disclosure.Panel className="z-800 sm:hidden absolute w-full bg-white dark:bg-gray-800">
            <div className="space-y-2 px-2 pb-3 pt-2">
              {navigation.map((item) => {
                // Common class for both <a> and Disclosure.Button
                const commonClass = `block py-1.5 text-black dark:text-slate-200 ${
                  isCurrentPage(item.href) ? 'custom-underline' : ''
                }`;

                if (item.name === 'Resume') {
                  // Use a regular <a> tag for the Resume link
                  return (
                    <a
                      href={item.href} // Make sure this points to your PDF file
                      key={item.name}
                      className={commonClass}
                    >
                      {item.name}
                    </a>
                  );
                } else {
                  return (
                    <Disclosure.Button
                      as={Link}
                      to={item.href}
                      key={item.name}
                      className={commonClass}
                      aria-current={isCurrentPage(item.href) ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  );
                }
              })}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
