import React from 'react';

import './App.css';
import {useFormik} from 'formik';

function App() {
  const formik = useFormik({
    initialValues: {
    
      emailField: " ",
      pswField: " ",
    },
    onSubmit: values => {
      console.log('form', values);
      alert('login succesful');
    },
validate: values => {
  let errors = {};
  
  if (!values.emailField) {
    errors.emailField = 'Required Field';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailField)) {
    errors.emailField = 'Username Should Be An Email';
  }

  if(!values.pswField)errors.pswField = "Field Required";
  return errors;
    

} 
 

  });
  return (
    <div>
    
        <form onSubmit={formik.handleSubmit}>
       

        <div>Email</div>
        <input id='emailField' type='text'  onChange={formik.handleChange}
        value = {formik.values.emailField}/>
        {formik.errors.emailField ?<div style={{color:'red'}}>{formik.errors.emailField}</div>: null}

        <div>Password</div> 
        <input id='pswField' typer='text' onChange={formik.handleChange}
        value = {formik.values.pswField}/>
        {formik.errors.pswField ?<div style={{color:'red'}}>{formik.errors.pswField}</div>: null}

        <button id='submitBtn'>Submit</button>
      </form>

    </div>
  );
 

}  


export default App;
