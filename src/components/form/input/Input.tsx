import React from 'react'
import { ErrorMessage, useField } from 'formik';


const Input = ({ name, label, ...props }: any) => {
  const [field, meta] = useField(name);

  const border= meta.error && meta.touched?
  "border-red-500 form__field":
   meta.touched?
   "border green form__field":
   "form__field";

  return (
   <div  className= "form__row">
    <div className={border}>                    
    <label htmlFor={field.name}  className={field.value?" form__active-plaseholder show":" form__active-plaseholder none"} >{label}</label>
    <input className="form__input" autocomplete="off" {...field} {...props} />
    </div>                  
    <ErrorMessage name={field.name} className="form__alert"/> 
    </div >
    );
  };

export default Input