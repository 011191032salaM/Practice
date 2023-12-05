import { CLEAR_LIST,REMOVE_LIST,RESET_LIST } from './actions';
import { data, people } from '../../data';

const reducer=(state,action)=>{
    if(action.type===CLEAR_LIST){
      return {...state,people:[]};
    }
    else if(action.type===RESET_LIST){
      return {...state,people:data};
    }
    else if(action.type===REMOVE_LIST){
      let NewPeople= state.people.filter((x)=> x.id !==action.PayLoad.id);
    
      return {...state,people:NewPeople};
    }
    }

    export default reducer