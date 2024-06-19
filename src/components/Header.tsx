import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo_header.png';

const Header = () => {
  const location = useLocation();
  return (
    <header className='flex flex-col items-center pt-5'>
      <link rel='preload' href={logo} as='image' />
      <img src={logo} alt='hrnet_logo' className='w-24 h-24' />
      {/* Navigation menu */}
      <nav className='flex items-end pt-7 pb-5'>
        <ul className='text-white flex flex-row'>
          <li>
            <Link
              to='/'
              className={`${
                location.pathname === '/'
                  ? 'border p-1 shadow-lg bg-customGreen text-black rounded'
                  : 'text-black'
              } mr-4 `}
            >
              Create employee
            </Link>
          </li>
          <li>
            <Link
              to='/employees'
              className={`${
                location.pathname === '/employees'
                  ? 'border p-1 shadow-lg bg-customGreen text-black rounded'
                  : 'text-black'
              }`}
            >
              View Current Employees
            </Link>
          </li>       
        </ul>
      </nav>
    </header>
  );
};

export default Header;
