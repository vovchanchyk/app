import React from 'react'
import { ErrorMessage, useField } from 'formik';
import styles from './Input.module.scss';

export  const Input = ({ name, label, ...props }: any) => {
  const [field, meta] = useField(name);

  const border= meta.error && meta.touched?
  `${styles.border_red} ${styles.field}`:
   meta.touched?
   `${styles.green} ${styles.field}`:
   styles.field;

   console.log(styles.border)
   const labelclass = field.value? `${styles.plaseholder_active} ${styles.show}` : `${styles.plaseholder_active} ${styles.none}`
  return (
   <div  className= {styles.row}>
    <div className={border}>                    
    <label 
    htmlFor={field.name}
    className={labelclass}>{label}</label>
    <input className={styles.input} autoComplete="off" {...field} {...props} />
    </div>                  
    <ErrorMessage name={field.name} className={styles.alert}/> 
    </div >
    );
  };
