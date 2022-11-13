import React from 'react'
import {Form,Formik,Field,ErrorMessage} from 'formik'
import * as yup from 'yup';


const FormValidation = () => {
    
  return (
    <>
    <Formik 
    initialValues={{firstname:'', lastname:'', email:'', password:'', cpassword:''}}
validationSchema={yup.object({
    firstname:yup.string()
    .max(20,'fristname should be 20 character or less')
    .required('firstname is required'),

    lastname:yup.string()
    .max(20,'lastname should be 20 character or less')
    .required('lastname is required'),
    
    email:yup.string()
    .email('invalid email')
    .required('email is required'),

    password:yup.string()
    .matches(/(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@#$%&?!])[A-Za-z0-9@#$&?!]{8,50}/,'password should be more than eight character and match Aa#3wass')
    .required('password is required'),
    
    cpassword:yup.string()
    .required('confirm password is required')
    .oneOf([yup.ref('password'),null],'password and confirm password must match')

})}

    >
        <div className='col-md-6 offset-md-3 p-3 mt-3 shadow-lg'>
            <Form>
                <div className='mb-3'>
                    <label htmlFor='email'>Firstname</label>
                    <Field  className="form-control" type="text" id="firstname" name="firstname" />
                     <ErrorMessage name='firstname'>{msg=><div style={{color:'red'}}>{msg}</div>}</ErrorMessage> 


                </div>
                <div className='mb-3'>
                    <label htmlFor='lastname'>Lastname</label>
                    <Field  className="form-control" type="text" id="lastname" name='lastname' />
                     <ErrorMessage name='lastname'>{msg=><div style={{color:'red'}}>{msg}</div>}</ErrorMessage> 

                    

                </div>

                <div className='mb-3'>
                    <label htmlFor='email'>Email</label>
                    <Field  className="form-control" type="email" id="email" name="email" />
                    <ErrorMessage name='email'>{msg=><div style={{color:'red'}}>{msg}</div>}</ErrorMessage> 
                   
                    

                </div>
                <div className='mb-3'>
                    <label htmlFor='password'>Password</label>
                    <Field  className="form-control" type="text" id="password" name="password" />
                    <ErrorMessage name='password'>{msg=><div style={{color:'red'}}>{msg}</div>}</ErrorMessage> 

                    

                </div>
                <div className='mb-3'>
                    <label htmlFor='cpassword'>ConfirmPassword</label>
                    <Field  className="form-control" type="text" id="cpassword" name="cpassword" />
                    <ErrorMessage name='cpassword'>{msg=><div style={{color:'red'}}>{msg}</div>}</ErrorMessage> 


                </div>
                <div className='mb-3'>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </div>

            </Form>
        </div>
    </Formik>
    
    </>
  )
}

export default FormValidation