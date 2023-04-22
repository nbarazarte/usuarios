import { useForm } from 'react-hook-form';
import defaultValues from '../utils/defaultValues';
import { useEffect } from 'react';

import './styles/formUsers.css'

const FormUser = ({createNewUser, updateInfo, updateUserById, setUpdateInfo, setFormclose, formclose}) => {

const {register, handleSubmit, reset } = useForm()

const handleExit = () => {
  setFormclose(true)
}

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

    <div className={`form-container ${formclose && 'close'}`}>
      
    <form className='form' onSubmit={handleSubmit(submit)}>
    <h3 className='form__title'>{updateInfo ? 'Update User Information': 'Create New User'}</h3>
      <span onClick={handleExit} className='form__exit'>x</span>
      <div className='form__item'>
        <label className='form__label' htmlFor="email">Email</label>
        <input className='form__input' {...register('email')} type="email" id="email" />
      </div>
      <div className='form__item'>
        <label className='form__label' htmlFor="password">Password</label>
        <input className='form__input' {...register('password')} type="password" id="password" />
      </div>
      <div className='form__item'>
        <label className='form__label' htmlFor="first_name">First Name</label>
        <input className='form__input' {...register('first_name')} type="text" id="first_name" />
      </div>
      <div className='form__item'>
        <label className='form__label' htmlFor="last_name">Last Name</label>
        <input className='form__input' {...register('last_name')} type="text" id="last_name" />
      </div>
      <div className='form__item'>
        <label className='form__label' htmlFor="birthday">Birthday</label>
        <input className='form__input' {...register('birthday')}  type="date" id="birthday" />
      </div>
      <button onClick={handleExit} className='form__btn'>{updateInfo ? 'Update': 'Create'}</button>
    </form>
    </div>


  )
}

export default FormUser