import { FieldErrors, RegisterOptions, UseFormRegister } from "react-hook-form";

enum InputType {
    TEXT = 'text',
    DATE = 'date',
  }

interface FormValues {
    firstname: string;
    lastname: string;
    dob: string;
    startdate: string;
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
        <label htmlFor={id} className='block text-sm font-medium text-gray-900'>
          {label}
        </label>
        <input
          {...register(name as keyof FormValues, rules)}
          type={type}
          id={id}
          name={name}
          className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'      
        />
        {/* {Object.prototype.hasOwnProperty.call(errors, name) && (
          <span>This field is required</span>
        )}  */}
        {/* {errors.hasOwnProperty(name) && (<span>{errors.firstname?.message}</span>)} */}
        {errors[name] && <span>{errors[name].message}</span>}
      </div>
    );
  };

  export default InputField;