import logo from '../assets/logo_header.png'

const Header = () => {
    return (
        <header className='flex justify-center'>
            <img src={logo} alt='logo' />
        </header>
    );
}
    
export default Header;
