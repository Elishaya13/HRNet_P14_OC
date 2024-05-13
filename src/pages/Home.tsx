import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className='home_wrapper'>
        <h1 className='title'>Create employee </h1>
        <div> Formulaire</div>
        <div className='button_wrapper'>
          <Link to='/employees'>
            <button className='button_list'>Employees List</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
