import React from 'react';

import './ContactForm.scss';
// let transporter = nodemailer.createTransport(transport[, defaults])

const ContactForm = ({ register, handleSubmit, errors }) => {
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='contact_form'>
      <input
        type='text'
        placeholder='Full Name'
        name='Name'
        ref={register({ required: true, minLength: 2 })}
      />
      {errors.Name && errors.Name.type === 'requred' && <p>This is required</p>}
      {errors.Name && errors.Name.type === 'minLength' && (
        <p>This feild required min length of 2</p>
      )}
      <input
        type='email'
        placeholder='Email Address'
        name='Email'
        ref={register({
          pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i,
          required: true,
        })}
      />
      {errors.Email && errors.Email.type === 'requred' && (
        <p>This is required</p>
      )}
      <input
        type='undefined'
        placeholder='Subject'
        name='Subject'
        ref={register({ required: true })}
      />
      {errors.Subject && errors.Subject.type === 'requred' && (
        <p>This is required</p>
      )}
      <input
        type='undefined'
        placeholder='Message'
        name='Message'
        ref={register({ required: true })}
      />
      {errors.Message && errors.Message.type === 'requred' && (
        <p>This is required</p>
      )}

      <button
        type='submit'
        className='contact_form-submit'
        href='mailto:yelow@bk.ru'>
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
