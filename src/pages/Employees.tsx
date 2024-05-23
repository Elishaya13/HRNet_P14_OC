import EmployeesList from "./EmployeesList";

const Employees = () => {
    return (    
        <div className='flex flex-col items-center'>
          <h1 className='text-black py-4 text-lg font-bold'>Current Employees </h1>
          <EmployeesList />       
        </div>  
    );
  };
  
  export default Employees;