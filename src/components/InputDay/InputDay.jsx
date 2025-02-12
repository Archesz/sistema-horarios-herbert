import React from 'react';
import "./InputDay.scss";

function InputDay(props) {
  if (props.start === "") {
    return (
      <div className='invisible'></div>
    );
  }

  const handleCheckboxChange = (event) => {
    props.onCheck(props.day, props.start + " - " + props.end, event.target.checked);
  };

  return (
    <div className={`row-agenda ${props.class}`}>
      <input type="checkbox" onChange={handleCheckboxChange} />
      <span>{props.start} - {props.end}</span>
    </div>
  );
}

export default InputDay;
