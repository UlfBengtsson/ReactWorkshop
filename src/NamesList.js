import React from "react";

const NameList = props => {
  return (
    <props.listType>
      {props.listOfNames.map((row, index) => (
        <li key={index}>
          <p>{row}</p>
        </li>
      ))}
    </props.listType>
  );
};

export default NameList;
