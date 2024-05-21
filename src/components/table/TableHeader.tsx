interface TableHeaderProps {
  thead: string[];
  handleClick: (columnTitle: string) => void;
  initialData: boolean;
  columnSorted: string;
  sort: boolean;
}

const TableHeader = ({
  thead,
  handleClick,
  initialData,
  columnSorted,
  sort,
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
                  !initialData && head === columnSorted && !sort
                    ? 'text-customGreenDark'
                    : 'text-gray-300'
                }`}
              >
                ▲
              </span>
              <span
                className={`${
                  !initialData && head === columnSorted && sort
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
