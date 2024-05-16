import { SubmitHandler, useForm } from 'react-hook-form';
import InputField from './inputs/InputField';
import SelectField from './inputs/SelectField';
import { FormValues } from '../interfaces/Interfaces';
import { states } from '../data/countries';
import { departments } from '../data/department';

enum InputType {
  TEXT = 'text',
  DATE = 'date',
  NUMBER = 'number',
}

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      firstname: '',
      lastname: '',
      dob: '',
      startdate: '',
      street: '',
      city: '',
      zip: '',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    console.log('submitted');
  };
  return (
    <form
      className='border-2 border-customGreen p-4 rounded-md'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='space-y-1'>
        <div className='border-gray-900/10 pb-2'>
          <div className='space-y-2'>
            <InputField
              {...register('firstname', {
                required: 'First Name is required',
                minLength: 2,
                maxLength: 20,
              })}
              type={InputType.TEXT}
              id='firstname'
              label='First Name'
              error={errors.firstname?.message}
            />
            <InputField
              {...register('lastname', {
                required: 'Last Name is required',
                minLength: 2,
                maxLength: 20,
              })}
              type={InputType.TEXT}
              id='lastname'
              label='Last Name'
              error={errors.lastname?.message}
            />
            <InputField
              {...register('dob', { required: 'Date of Birth is required' })}
              type={InputType.DATE}
              id='dob'
              label='Date of Birth'
              error={errors.dob?.message}
            />
            <InputField
              {...register('startdate', { required: 'Start Date is required' })}
              type={InputType.DATE}
              id='startdate'
              label='Start Date'
              error={errors.startdate?.message}
            />
          </div>
        </div>
        {/* Divider with "Adresse" */}
        <div className='relative'>
          <div
            className='absolute inset-0 flex items-center'
            aria-hidden='true'
          >
            <div className='w-full border-t border-customGreen'></div>
          </div>
          <div className='relative flex justify-center'>
            <span className='px-2 bg-customGreenDark text-sm text-white rounded'>
              Adresse
            </span>
          </div>
        </div>
        {/* end of divider */}
        <div className='space-y-2 pb-3'>
          <InputField
            {...register('street', { required: 'Street is required' })}
            type={InputType.TEXT}
            id='street'
            label='Street'
            error={errors.street?.message}
          />
          <InputField
            {...register('city', { required: 'City is required' })}
            type={InputType.TEXT}
            id='city'
            label='City'
            error={errors.city?.message}
          />
          <SelectField
            {...register('country', { required: 'Country is required' })}
            id='country'
            label='Country'
            error={errors.country?.message}
          >
            <option value=''>
              {states.length > 0 ? states[0].name : 'Select...'}{' '}
            </option>
            {states.map((state, index) => (
              <option key={index} value={state.abbreviation}>
                {state.name}
              </option>
            ))}
          </SelectField>
          <InputField
            {...register('zip', { required: 'Zip is required' })}
            type={InputType.NUMBER}
            id='zip'
            label='Zip'
            error={errors.zip?.message}
          />
        </div>
        {/* Divider */}
        <div className='relative pb-4'>
          <div
            className='absolute inset-0 flex items-center'
            aria-hidden='true'
          >
            <div className='w-full border-t border-customGreen '></div>
          </div>
        </div>
        {/* end of divider */}
        <div className='="space-y-2 pb-3'>
          <SelectField
            {...register('department', { required: 'Department is required' })}
            id='department'
            label='Department'
            error={errors.department?.message}
          >
            <option value=''>
              {departments.length > 0 ? departments[0] : 'Select...'}{' '}
            </option>
            {departments.map((department, index) => (
              <option key={index} value={department}>
                {department}
              </option>
            ))}
          </SelectField>
        </div>
      </div>
      {/* Button */}
      <div className='flex justify-center'>      
        <button
          className='bg-customGreenDark border-2 hover:bg-customBlack hover:text-white text-white font-medium py-1 px-4 rounded focus:outline-none focus:shadow-outline'
          type='submit'
        >
          Save
        </button>
      </div>
    </form>
  );
}
