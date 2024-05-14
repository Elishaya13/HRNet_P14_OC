import { FieldErrors, RegisterOptions, UseFormRegister } from "react-hook-form";
import { FormValues } from "../../interfaces/Interfaces";

enum InputType {
    TEXT = 'text',
    DATE = 'date',
  }
 

interface InputFieldProps {
    id: string;
    name: keyof FormValues;
    type: InputType;
    label: string;
    register: UseFormRegister<FormValues>;
    rules: RegisterOptions<FormValues, keyof FormValues>;
    errors: FieldErrors<FormValues>;
  }
  

const InputField = ({
    id,
    name,
    type,
    label,
    register,
    rules,
    errors,
  }: InputFieldProps) => {
    return (
      <div>
        <label htmlFor={id} className='block text-xs font-bold text-gray-900'>
          {label}
        </label>
        <input
          {...register(name as keyof FormValues, rules)}
          type={type}
          id={id}
          name={name}
          className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-customGreenDark focus:border-customGreenDark sm:text-sm'      
        />
        {/* {Object.prototype.hasOwnProperty.call(errors, name) && (
          <span>This field is required</span>
        )}  */}
        {/* {errors.hasOwnProperty(name) && (<span>{errors.firstname?.message}</span>)} */}
        {errors[name] && <span className="text-red-700 sm:text-sm">{errors[name].message}</span>}
      </div>
    );
  };

  export default InputField;