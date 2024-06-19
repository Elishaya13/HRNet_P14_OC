interface InputSearchProps {
    handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
    
/**
 * InputSearch component that renders an input field for searching
 * @param handleSearch - The function to handle the search
 * @returns The InputSearch component * 
 */
const InputSearch = ({ handleSearch }: InputSearchProps) => {
  return (
    <>
      <label
        htmlFor='search'
        className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
      >
        Search
      </label>
      <div className='relative'>
        <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
          <svg
            className='w-4 h-4 text-gray-500 dark:text-gray-400'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 20 20'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
            />
          </svg>
              </div>
              <input type="search" id="search" className="block w-full pl-9 py-2 pr-4 text-sm text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm
               focus:ring-customGreenDark focus:border-customGreenDark focus:outline-none " placeholder="Search anything" onChange={handleSearch}/>              
      </div>
    </>
  );
};

export default InputSearch;