import { useEffect, useRef, useState } from 'react';

const UseRefBasics = () => {
  const [value, setValue] = useState(0);
  const refContainer = useRef(null);
  const isMounted = useRef(false);

  console.log("Before use Effect "+isMounted.current);
  // {current:null}
  // set value ourselves or DOM node

  // useEffect(() => {
  //   // console.log(refContainer.current);
  //   refContainer.current.focus();
  // });

  useEffect(() => {
    if(!isMounted.current) {
      isMounted.current = true;
      return;
    }
         console.log(isMounted.current);
  }, [value]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current);
    const name = refContainer.current.value;
    console.log(name);
  };

  

  return (
    <div>
      <form className='form'>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input
            type='text'
            id='name'
            ref={refContainer}
            className='form-input'
          />
        </div>
        <button type='submit' onClick={handleSubmit} className='btn btn-block'>
          submit
        </button>
      </form>
      <h1>value : {value}</h1>
      <button onClick={() => setValue(value + 1)} className='btn'>
        increase
      </button>
    </div>
  );
};

export default UseRefBasics;