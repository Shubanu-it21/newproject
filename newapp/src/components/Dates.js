import React from 'react'

const Dates = (props) => {
    return (
      <div>
        <center>
          <h1>User Details Form</h1>
        </center>
        
        <h1>{props.name}</h1>
        <h2>Email is {props.email}</h2> 
        <h2> phone number is {props.number}</h2>
      </div>
    );
  };

export default Dates