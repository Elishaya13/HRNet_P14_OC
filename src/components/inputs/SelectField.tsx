import { FieldErrors, RegisterOptions, UseFormRegister } from "react-hook-form";
import { FormValues } from "../../interfaces/Interfaces";


interface InputSelectProps {
    id: string;
    name: keyof FormValues;
    label: string;
    rules: RegisterOptions<FormValues, keyof FormValues>;
    errors: FieldErrors<FormValues>;
    register: UseFormRegister<FormValues>;    
    data: string[] | Record<string, string>[];
    labelKey?: string;
    valueKey?: string;
}
  

const SelectField = ({ id, name, register, label, rules, errors, data, valueKey, labelKey}: InputSelectProps) => {
    return (
        <div>
            <label htmlFor={id} className='block text-xs font-bold text-gray-900'>
                {label}
            </label>
            <select
                {...register(name, rules)}
                id={id}
                name={name}
                className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-customGreenDark focus:border-customGreenDark sm:text-sm '
            >
                <option value=''>{data.length > 0 ? (typeof data[0] === 'string' ? data[0] : (labelKey && data[0][labelKey])) : 'Select...'}...</option>
                {data.map((item, index) => (
                    <option key={index} value={typeof item ==="string" ? item : (valueKey && item[valueKey])}>
                        {typeof item === 'string' ? item : (labelKey && item[labelKey])}
                    </option>               
                ))}
            </select>
            {errors[name] && <span className="text-red-700 sm:text-sm">{errors[name].message}</span>}
      </div>   );
}

export default SelectField;