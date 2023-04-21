import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6 h-[50px]">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to='/' className="font-semibold text-xl tracking-tight">TCAP</Link>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z"/></svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link to="/events" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
            Events
          </Link>
          <Link to="/contact-us" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
            Contact Us
          </Link>
          <Link to="/about-us" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white">
            About Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
