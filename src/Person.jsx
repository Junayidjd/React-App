import React from 'react'
function Person(props) {
    return (
      <p>
        {props.name} is {props.age} years old.
      </p>
    );
  }
  // Usage
//   <Person name="John" age="30" />
  

export default Person