interface TableHeaderProps {
  tableHeaders: string[];
  handleClick: (columnTitle: string) => void;  
  columnSorted: string;
  sortDirection: string | null;
}

/**
 * Table header component
 * 
 * @param thead // table header
 * @param handleClick // function to handle the click on the table header
 * @param columnSorted // column sorted
 * @param sortDirection // sort direction
 * 
 * @returns // table header component
 */
const TableHeader = ({
  tableHeaders,
  handleClick,  
  columnSorted,
  sortDirection,
}: TableHeaderProps) => {  
  return (
    <thead className='ltr:text-left rtl:text-right'>
      <tr>
        {tableHeaders.map((head, index) => (
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
