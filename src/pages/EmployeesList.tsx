import { Link } from 'react-router-dom';

const EmployeesList = () => {
  return (
    <>
      <div className='employees_wrapper'>
        <h1 className='title'>Current Employees</h1>
      </div>
      <div className='button_wrapper'>
        <Link to='/'>
          <button className='button_list'>Home</button>
        </Link>
      </div>
    </>
  );
};

export default EmployeesList;
