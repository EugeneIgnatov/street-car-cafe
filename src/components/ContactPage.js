import React from 'react';
import { useForm } from 'react-hook-form';

function ContactPage(props) {
  const { register, handleSubmit /*errors*/ } = useForm();
  const onSubmit = (data) => data;
  // console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type='text' placeholder='Name' name='Name' ref={register} />
      <input
        type='email'
        placeholder='Email Address'
        name='Email Address'
        ref={register({ pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i })}
      />
      <input
        type='undefined'
        placeholder='Subject'
        name='Subject'
        ref={register}
      />
      <input
        type='undefined'
        placeholder='Message'
        name='Message'
        ref={register}
      />

      <input type='submit' />
    </form>
  );
}

export default ContactPage;
