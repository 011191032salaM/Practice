import { data } from '../../data';
import React from 'react';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const RemoveSingleItem = (id) => {
    let newPeople = people.filter((x) => x.id !== id);
    setPeople(newPeople);
  };

  const RemoveAllItems = () => {
    setPeople([]);
  };

  return (
    <div>
      {people.map((pep) => {
        const { id, name } = pep;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button type="button" onClick={() => RemoveSingleItem(id)}>
              Remove
            </button>
          </div>
        );
      })}
      <button type="button" onClick={RemoveAllItems}>
        Clear
      </button>
    </div>
  );
};

export default UseStateArray;
