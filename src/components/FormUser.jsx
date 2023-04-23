import { useForm } from "react-hook-form";
import defaultValues from "../utils/defaultValues";
import { useEffect } from "react";

import "./styles/formUsers.css";

const FormUser = ({
  createNewUser,
  updateInfo,
  updateUserById,
  setUpdateInfo,
  setFormclose,
  formclose,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const handleExit = () => {
    setFormclose(true);
  };

  const submit = (data) => {
    //console.log(data);
    if (updateInfo) {
      updateUserById(updateInfo.id, data);
      setUpdateInfo();
    } else {
      createNewUser(data);
    }

    reset(defaultValues);
    handleExit()
  };

  useEffect(() => {
    if (updateInfo) {
      reset(updateInfo);
    } else {
      reset(defaultValues);
    }
  }, [updateInfo]);

  return (
    <div className={`form-container ${formclose && "close"}`}>
      <form className="form" onSubmit={handleSubmit(submit)}>
        <h3 className="form__title">
          {updateInfo ? "Update User Information" : "Create New User"}
        </h3>
        <span onClick={handleExit} className="form__exit">x</span>
        <div className="form__item">
          <label className="form__label" htmlFor="email">
            Email
          </label>
          <input
            className="form__input"
            {...register("email", { required: true})} 
            type="email"
            id="email"
          />          
          {errors?.email?.type === "required" && (
            <p>The email field is required</p>
          )}          
        </div>
        <div className="form__item">
          <label className="form__label" htmlFor="password">
            Password
          </label>
          <input
            className="form__input"
            {...register("password", {
              required: true,
              maxLength: 8,              
            })}
            type="password"
            id="password"
          />
          {errors?.password?.type === "required" && (
            <p>The password field is required</p>
          )}
          {errors?.password?.type === "maxLength" && (
            <p>The password cannot exceed 8 characters</p>
          )}          
        </div>
        <div className="form__item">
          <label className="form__label" htmlFor="first_name">
            First Name
          </label>
          <input
            className="form__input"
            {...register("first_name", {
              required: true,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i,
            })}
            type="text"
            id="first_name"
          />
          {errors?.first_name?.type === "required" && (
            <p>This field is required</p>
          )}
          {errors?.first_name?.type === "maxLength" && (
            <p>First name cannot exceed 20 characters</p>
          )}
          {errors?.first_name?.type === "pattern" && (
            <p>Alphabetical characters only</p>
          )}
        </div>
        <div className="form__item">
          <label className="form__label" htmlFor="last_name">
            Last Name
          </label>
          <input
            className="form__input"
            {...register("last_name", {
              required: true,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i,
            })}
            type="text"
            id="last_name"
          />
          {errors?.last_name?.type === "required" && (
            <p>This field is required</p>
          )}
          {errors?.last_name?.type === "maxLength" && (
            <p>First name cannot exceed 20 characters</p>
          )}
          {errors?.last_name?.type === "pattern" && (
            <p>Alphabetical characters only</p>
          )}
        </div>
        <div className="form__item">
          <label className="form__label" htmlFor="birthday">
            Birthday
          </label>
          <input
            className="form__input"
            {...register("birthday", {
              required: true,            
            })}
            type="date"
            id="birthday"
          />
          {errors?.birthday?.type === "required" && (
            <p>This field is required</p>
          )}
        </div>
        {/* <button type="submit" onClick={handleExit} className='form__btn'>{updateInfo ? 'Update': 'Create'}</button> */}
        <button type="submit" className='form__btn'>{updateInfo ? 'Update': 'Create'}</button>
        {/* <input type="submit" /> */}
      </form>
    </div>
  );
};

export default FormUser;
