import { HTMLProps, forwardRef } from 'react';

interface SelectFieldProps extends HTMLProps<HTMLSelectElement> {
  label: string;
  error?: string;
}

const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  ({ label, error, children, ...selectProps }, ref) => {
    return (
      <div>
        <label
          htmlFor={selectProps.id}
          className='block text-xs font-bold text-gray-900'
        >
          {label}
        </label>
        <select
          ref={ref}
          autoComplete='off'
          {...selectProps}
          className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-customGreenDark focus:border-customGreenDark sm:text-sm '
        >
          {children}
        </select>
        {!!error && <span className='text-red-700 sm:text-sm'>{error}</span>}
      </div>
    );
  }
);

export default SelectField;
