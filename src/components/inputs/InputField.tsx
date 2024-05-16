import { HTMLProps, forwardRef } from 'react';

interface InputFieldProps extends HTMLProps<HTMLInputElement> {
  label: string;
  error?: string; 
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(({
  label,
  error,
  ...inputProps
}, ref) => {
  return (
    <div>
      <label htmlFor={inputProps.id} className='block text-xs font-bold text-gray-900'>
        {label}
      </label>
      <input
        ref={ref}
        className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-customGreenDark focus:border-customGreenDark sm:text-sm'
        {...inputProps}
      />
      {!!error && (
        <span className='text-red-700 sm:text-sm'>{error}</span>
      )}
    </div>
  );
});

export default InputField;