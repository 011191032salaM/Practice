import { useState } from 'react';

const UncontrolledInputs = () => {
  const [value, setValue] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    // const email = formData.get('email');
    // console.log(email);
    // console.log([...formData.entries()]);
    const newUser = Object.fromEntries(formData);
    // // do something (post request, add to list, etc)
    console.log(newUser);
    // // Gotcha - re-render won't clear out the values
    setValue(!value);
    console.log(value);
    // reset values
    e.currentTarget.reset();
  };
  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Form Data API</h4>
        {/* name */}
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' name='name' />
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input type='email' className='form-input' id='email' name='email' />
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-input'
            id='password'
            name='password'
          />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  );
};
export default UncontrolledInputs;
