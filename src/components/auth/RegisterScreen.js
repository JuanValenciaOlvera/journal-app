import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../actions/ui';
import { startRegisterWithEmailPasswordName } from '../actions/auth';



export const RegisterScreen = () => {
  
  const dispatch = useDispatch();
  const { msError } = useSelector( state => state.ui );


  const [ formValues,handleInputChange  ] = useForm({
    name: 'Juan',
    email: 'juan@gamil.com',
    password: '123456',
    password2: '123456'
  });

  const { name, email, password, password2 } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    if ( isFormValid()) {
      dispatch(startRegisterWithEmailPasswordName(email, password, name));
    }
  }

  const isFormValid = () => {

    if ( name.trim().length === 0 ) {
      dispatch( setError('Nombre no valido') );
      return false;
    } else if ( !validator.isEmail( email ) ) {
        dispatch( setError('Email no valido') );
        return false;
    } else if (password !== password2 || password.length < 5) {
      dispatch( setError('Passoword debe tener 6 o mas caracteres') );
      return false;
    }
    dispatch( removeError());
    return true;
  }

    return (
        <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={ handleSubmit }
       className="animate__animated animate__fadeIn animate__faster">
        {
          msError &&
          (<div className="auth__alert-error">
           {msError}
          </div>)

        }

        <input type="text" placeholder="Name" name="name" className="auth__input" autoComplete="off" value={ name } onChange={ handleInputChange }/>

        <input type="text" placeholder="Email" name="email" className="auth__input" autoComplete="off" value={ email } onChange={ handleInputChange }/>

        <input type="password" placeholder="Password" name="password" className="auth__input"
        autoComplete="off" value={ password } onChange={ handleInputChange }/>
        
        <input type="password" placeholder="Confirm" name="password2" className="auth__input"
        autoComplete="off" value={ password2 } onChange={ handleInputChange }/>

        <button type="submit" className="btn btn-primary btn-block mb-5" disabled={ false }>Register</button>

      

        <Link
        to='/auth/login'
        className="link">
            Already Register
        </Link>

      </form>
    </>
    )
}
