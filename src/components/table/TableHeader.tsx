interface TableHeaderProps {
  thead: string[];
  handleClick: (columnTitle: string) => void;  
  columnSorted: string;
  sortDirection: string | null;
}

const TableHeader = ({
  thead,
  handleClick,  
  columnSorted,
  sortDirection,
}: TableHeaderProps) => {  
  return (
    <thead className='ltr:text-left rtl:text-right'>
      <tr>
        {thead.map((head, index) => (
          <th
            key={index}
            className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'
            onClick={() => handleClick(head)}
          >
            {head}
            <span className='ml-2'>
              <span
                className={`mr-1 ${
                   head === columnSorted && sortDirection === 'asc'
                    ? 'text-customGreenDark'
                    : 'text-gray-300'
                }`}
              >
                ▲
              </span>
              <span
                className={`${
                  head === columnSorted && sortDirection === 'desc'
                    ? 'text-customGreenDark'
                    : 'text-gray-300'
                }`}
              >
                ▼
              </span>
            </span>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
