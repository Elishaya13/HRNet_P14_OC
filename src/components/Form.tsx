import {  
  SubmitHandler,
  useForm  
} from 'react-hook-form';
import InputField from './inputs/InputField';

interface FormValues {
  firstname: string;
  lastname: string;
  dob: string;
  startdate: string;
}

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
      <div className='space-y-12'>
        <div className='border-gray-900/10 pb-12'>
          <div className='space-y-2'>
            <InputField
              id='firstname'
              name='firstname'
              type={InputType.TEXT}
              label='First Name'
              register={register}
              rules={{ required: "First Name is required", minLength: 2, maxLength: 20}}
              errors={errors}
            />
            <InputField
              id='lastname'
              name='lastname'
              type={InputType.TEXT}
              label='Last Name'
              register={register}
              rules={{ required: "Last Name is required", minLength:2, maxLength: 20 }}
              errors={errors}
            />           
            <InputField
              id='dob'
              name='dob'
              type={InputType.DATE}
              label='Date of Birth'
              register={register}
              rules={{ required: "Date of Birth is required" }}
              errors={errors}              
            />
            <InputField
              id='startdate'
              name='startdate'
              type={InputType.DATE}
              label='Start Date'
              register={register}
              rules={{ required: "Start Date is required" }}
              errors={errors}
              
            />
          </div>
        </div>
      </div>
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
