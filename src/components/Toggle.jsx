import useToggle from './useToggle'
import { Link } from 'react-router-dom';

const Toggle = () => {
 

const {show,toggle}=useToggle(true);
return (
    <div>
        <h2>Toggle custom Hooks</h2>
        <button onClick={toggle}
        className='mx-10 p-10 h-12 bg-cyan-500 rounded-full'>
            Toggle
            
            </button>
        {show && <h4>Show items</h4>
        
        }

<button type="button"  className='bg-indigo-600 rounded-full' >
                 <Link to='/use'>To Use Reducer</Link>
                               </button>
                               
    </div>
    
);

}

export default Toggle
