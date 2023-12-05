import { data, people } from '../../data';
import React ,{useReducer} from 'react';
import { CLEAR_LIST,REMOVE_LIST,RESET_LIST } from './actions';
import reducer from './reducer';
import { Link } from 'react-router-dom';
const defaultState={
  people: data,
};

const Use_Reducer = () => {
  const [state,dispatch] = useReducer(reducer,defaultState);
 

  const Remove = (id) => {
    // let newPeople = people.filter((x) => x.id !== id);
    // setPeople(newPeople);

    dispatch({type:REMOVE_LIST,PayLoad:{id}})
  };

  const ClearList = () => {
    // setPeople([]);
    dispatch({type:CLEAR_LIST});
  };

  const ResetList= () => {
    // setPeople(data);
    dispatch({type:RESET_LIST})
  };

  console.log(state);

  return (
    <div > 
      {state.people.map((pep) => {
        const { id, name } = pep;
        return (
          <div key={id} className='bg-green-500 h-100 w-100'>
            <h4>{name}</h4>
            <button type="button" className='bg-indigo-600 rounded-full' onClick={() => Remove(id)}>
              Remove
            </button>
          </div>
        );
      })}

      {state.people.length <1 ? (<button type="button"  className='bg-indigo-600 rounded-full' onClick={ResetList}>
        Reset
      </button>)
      
      :(

            <button type="button"  className='bg-indigo-600 rounded-full' onClick={ClearList}>
                   Clear
                               </button>

                               
                               
       )
      
      }

<button type="button"  className='bg-indigo-600 rounded-full'>
                  <Link to='/toggle'>To Toggle</Link>
                               </button>
      
    </div>
  );
};

export default Use_Reducer;