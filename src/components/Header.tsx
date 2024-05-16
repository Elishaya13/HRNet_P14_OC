import { Link, useMatch } from 'react-router-dom';
import logo from '../assets/logo_header.png'

const Header = () => {
    return (
        <header className='flex flex-col items-center pt-5'>
            <img src={logo} alt='logo' className='w-24' />
            {/* menu de navigation */}
            <nav className='flex items-end pt-5' >
                <ul className='text-white flex flex-row'>
                <li>
                        <Link to='/' className={`${useMatch('/') ? 'underline' : ''} mr-4 `}>Create employee</Link>
                    </li>
                    <li>
                        <Link to='/employees' className={useMatch('/employees') ? 'underline' : ''}>View Current Employees</Link>
                    </li>
                   
                </ul>
            </nav>
        </header>
    );
}
    
export default Header;
