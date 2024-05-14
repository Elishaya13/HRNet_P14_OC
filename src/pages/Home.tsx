import { Link } from 'react-router-dom';
import Form from '../components/Form';

const Home = () => {
  return (
    <>
      <div className='flex flex-col items-center'>
        <h1 className='text-white'>Create employee </h1>
        <Form />
        <div className='flex justify-center'>
          <Link to='/employees'>
            <button className='bg-white rounded-lg'>Employees List</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
