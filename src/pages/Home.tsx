import Form from '../components/Form';

const Home = () => {
  return (
    <div className='flex flex-col items-center max-h-3/4 overflow-y-auto'>
      <h1 className='text-black py-4 text-lg font-bold'>Create Employee </h1>
      <div className=' w-auto '>
        <Form />
      </div>
    </div>
  );
};

export default Home;
