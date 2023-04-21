import { useForm } from 'react-hook-form';
import defaultValues from '../utils/defaultValues';
import { useEffect } from 'react';

const FormUser = ({createNewUser, updateInfo, updateUserById, setUpdateInfo}) => {

  const {register, handleSubmit, reset } = useForm()

  const submit = (data) => {
    //console.log(data);
    if(updateInfo){
      updateUserById(updateInfo.id,data)
      setUpdateInfo()
    }else{
      createNewUser(data)
    }
    
    reset(defaultValues)
  }

  useEffect(() => {
    reset(updateInfo)
  }, [updateInfo])
  
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <label htmlFor="email">Email</label>
        <input {...register('email')} type="email" id="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input {...register('password')} type="password" id="password" />
      </div>
      <div>
        <label htmlFor="first_name">First Name</label>
        <input {...register('first_name')} type="text" id="first_name" />
      </div>
      <div>
        <label htmlFor="last_name">Last Name</label>
        <input {...register('last_name')} type="text" id="last_name" />
      </div>
      <div>
        <label htmlFor="birthday">Birthday</label>
        <input {...register('birthday')}  type="date" id="birthday" />
      </div>
      <button>{updateInfo ? 'Update': 'Create'}</button>
    </form>
  )
}

export default FormUser