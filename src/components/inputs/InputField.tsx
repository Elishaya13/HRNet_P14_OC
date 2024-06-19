import { HTMLProps, forwardRef } from 'react';

interface InputFieldProps extends HTMLProps<HTMLInputElement> {
  label: string;
  error?: string; 
  type: string;
}

/**
 * InputField component that renders an input field with a label and an error message
 * @param label - The label for the input field
 * @param error - The error message to display
 * @param type - The type of input field
 * @param inputProps - The input props
 * @returns The InputField component
 */
const InputField = forwardRef<HTMLInputElement, InputFieldProps>(({
  label,
  error,
  type,
  ...inputProps
}, ref) => {
  return (
    <div>
      <label htmlFor={inputProps.id} className='block text-xs font-bold text-gray-900'>
        {label}
      </label>
      <input
        type={type}
        ref={ref}     
        id={inputProps.id}
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