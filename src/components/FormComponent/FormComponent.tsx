/* eslint-disable no-alert */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable func-names */
import React from 'react';
import * as yup from 'yup';
import { Form, Formik } from 'formik';
import { Input } from '../Input';
import styles from './FormComponent.module.scss';

type TForm = {
  name: string;
  password: string;
  confirm: string;
};

export const FormComponent = () => {
  const validationSchema = yup.object({
    email: yup
      .string()
      .required('Required')
      .min(4, 'Too short - should be 4 chars minimum.')
      .email(),
    password: yup
      .string()
      .required('Required')
      .min(4, 'Too short - should be 4 chars minimum.'),
    confirm: yup
      .string()
      .required('Required')
      .min(4, 'Too short - should be 4 chars minimum.')
      .test('passwords-match', 'Passwords must match', function (value) {
        return this.parent.password === value;
      }),
  });
  const initialValues: TForm = {
    name: '',
    password: '',
    confirm: '',
  };

  const handleSubmit = (values: TForm) => {
    alert(`dear ${values.name} your data have sent`);
  };
  return (
    <div className={styles.form}>
      <Formik
        className=''
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form__body}>
          <h3 className={styles.form__title}>Login</h3>
          <Input name='email' label='Email' />
          <Input name='password' label='Password' />
          <Input name='confirm' label='Password comfirm' />
          <input className={styles.form__btn} type='submit' value='Submit' />
        </Form>
      </Formik>
    </div>
  );
};
