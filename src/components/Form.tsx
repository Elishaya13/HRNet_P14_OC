import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import InputField from './inputs/InputField';
import SelectField from './inputs/SelectField';
import { Modal } from 'elishaya-react-modal-lib';

// Data
import { states } from '../data/countries';
import { departments } from '../data/department';

// Hooks and Utils
import { useUsers } from '../hooks/useUsers.ts';
import { Validator } from '../utils/FormValidator.ts';

import { User } from '../interfaces/Interfaces';

// Enum for input types (text, date, number)
enum InputType {
  TEXT = 'text',
  DATE = 'date',
  NUMBER = 'number',
}

const Form = () => {
  const [isOpen, setIsOpen] = useState(false);

  /* Registering the form with react-hook-form */
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<User>({
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

  const { addUser } = useUsers();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<User> = (data) => {
    addUser(data);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    navigate('/employees');
  };

  return (
    <>
      <form
        className='border-2 border-customGreen p-4 mb-6 rounded-md'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='space-y-1'>
          <div className='border-gray-900/10 pb-2'>
            <div className='space-y-2'>
              <InputField
                {...register('firstname', {
                  required: 'First Name is required',
                  ...Validator.validateLength(2, 16),
                  validate: {
                    noSpecialChars: Validator.validateNoSpecialChars,
                  },
                })}
                type={InputType.TEXT}
                id='firstname'
                label='First Name'
                error={errors.firstname?.message}
              />
              <InputField
                {...register('lastname', {
                  required: 'Last Name is required',
                  ...Validator.validateLength(2, 20),
                  validate: {
                    noSpecialChars: Validator.validateNoSpecialChars,
                  },
                })}
                type={InputType.TEXT}
                id='lastname'
                label='Last Name'
                error={errors.lastname?.message}
              />
              <InputField
                {...register('dob', {
                  required: 'Date of Birth is required',
                  validate: {
                    atLeast16: Validator.validateAge,
                  },
                })}
                type={InputType.DATE}
                id='dob'
                label='Date of Birth'
                error={errors.dob?.message}
              />
              <InputField
                {...register('startdate', {
                  required: 'Start Date is required',
                  validate: {
                    atLeast16: (value) =>
                      Validator.validateStartDate(value, getValues('dob')),
                  },
                })}
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
              {...register('street', {
                required: 'Street is required',
                ...Validator.validateLength(2, 24),
                validate: {
                  noSpecialChars: Validator.validateNoSpecialChars,
                },
              })}
              type={InputType.TEXT}
              id='street'
              label='Street'
              error={errors.street?.message}
            />
            <InputField
              {...register('city', {
                required: 'City is required',
                ...Validator.validateLength(2, 24),
                validate: {
                  noSpecialChars: Validator.validateNoSpecialChars,
                },
              })}
              type={InputType.TEXT}
              id='city'
              label='City'
              error={errors.city?.message}
            />
            <SelectField
              {...register('state', { required: 'State is required' })}
              id='state'
              label='State'
              error={errors.state?.message}
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
              {...register('zip', {
                required: 'Zip is required',
                ...Validator.validateLength(3, 12),
              })}
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
              {...register('department', {
                required: 'Department is required',
              })}
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
      {/* Modal */}
      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        title='Success!'
        message='Employee created successfully!'
        buttonMsg='Close'
        iconColor='#5a6f08'
        btnTextColor='white'
        btnBgColor='#5a6f08'
        styleIcon='check'
        btnBorderRadius='50px'
        modalBorderRadius='15px'
        gapContent={10}
      />
    </>
  );
};

export default Form;
