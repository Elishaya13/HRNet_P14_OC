import { SubmitHandler, useForm } from 'react-hook-form';
import InputField from './inputs/InputField';
import SelectField from './inputs/SelectField';
import { FormValues } from '../interfaces/Interfaces';
import { states } from '../data/countries';
import { departments } from '../data/department';

enum InputType {
  TEXT = 'text',
  DATE = 'date',
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
      className='border-2 border-gray-300 p-4 rounded-md'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='space-y-1'>
        <div className='border-gray-900/10 pb-2'>
          <div className='space-y-2'>
            <InputField
              id='firstname'
              name='firstname'
              type={InputType.TEXT}
              label='First Name'
              register={register}
              rules={{
                required: 'First Name is required',
                minLength: 2,
                maxLength: 20,
              }}
              errors={errors}
            />
            <InputField
              id='lastname'
              name='lastname'
              type={InputType.TEXT}
              label='Last Name'
              register={register}
              rules={{
                required: 'Last Name is required',
                minLength: 2,
                maxLength: 20,
              }}
              errors={errors}
            />
            <InputField
              id='dob'
              name='dob'
              type={InputType.DATE}
              label='Date of Birth'
              register={register}
              rules={{ required: 'Date of Birth is required' }}
              errors={errors}
            />
            <InputField
              id='startdate'
              name='startdate'
              type={InputType.DATE}
              label='Start Date'
              register={register}
              rules={{ required: 'Start Date is required' }}
              errors={errors}
            />
          </div>
        </div>
        {/* Divider with "Adresse" */}
        <div className='relative'>
          <div
            className='absolute inset-0 flex items-center'
            aria-hidden='true'
          >
            <div className='w-full border-t border-gray-300'></div>
          </div>
          <div className='relative flex justify-center'>
            <span className='px-2 bg-customGreen text-sm text-white'>
              Adresse
            </span>
          </div>
        </div>
        <div className='="space-y-2 pb-3'>
          <InputField
            id='street'
            name='street'
            type={InputType.TEXT}
            label='Street'
            register={register}
            rules={{ required: 'Street is required' }}
            errors={errors}
          />
          <InputField
            id='city'
            name='city'
            type={InputType.TEXT}
            label='City'
            register={register}
            rules={{ required: 'City is required' }}
            errors={errors}
          />
          <SelectField
            id='country'
            name='country'
            label='Country'
            register={register}
            rules={{ required: 'Country is required' }}
            errors={errors}
            data={states}
            labelKey='name'
            valueKey='abbreviation'
          />
          <InputField
            id='zip'
            name='zip'
            type={InputType.TEXT}
            label='Zip'
            register={register}
            rules={{ required: 'Zip is required' }}
            errors={errors}
          />
        </div>
        {/* Divider */}
        <div className='relative'>
          <div
            className='absolute inset-0 flex items-center'
            aria-hidden='true'
          >
            <div className='w-full border-t border-gray-300'></div>
          </div>
        </div>
        <div className='="space-y-2 pb-3'>
          <SelectField
            id='department'
            name='department'
            label='Department'
            register={register}
            rules={{ required: 'Department is required' }}
            errors={errors}
            data={departments}
          />
        </div>
      </div>
      {/* Button */}
      <div className='flex justify-center'>
        <button
          className='bg-customGreenDark border-2 hover:bg-black text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          type='submit'
        >
          Submit
        </button>
      </div>
    </form>
  );
}
