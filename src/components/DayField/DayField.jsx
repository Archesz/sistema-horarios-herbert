import React from "react";
import InputDay from "../InputDay/InputDay";
import "./DayField.scss";

function DayField(props) {
  const handleChange = (start, end, checked) => {
    props.onHorarioChange(props.day, start, end, checked);
  };

  if (props.day === "Sábado") {
    return (
      <div className="day-field">
        <span className="field-name">{props.day}</span>

        <div className="row-hours">
          <InputDay start="08:00" end="09:50" day={props.day} onCheck={props.onCheck} />
          <InputDay start="08:50" end="09:40" day={props.day} onCheck={props.onCheck} />
          <InputDay start="09:40" end="10:30" day={props.day} onCheck={props.onCheck} />
        </div>

        <div className="row-hours">
          <InputDay start="10:50" end="11:40" day={props.day} onCheck={props.onCheck}/>
          <InputDay start="11:40" end="12:30" day={props.day} onCheck={props.onCheck}/>
          <InputDay start="" end="" day={props.day} onCheck={props.onCheck}/>
        </div>
      </div>
    );
  } else {
    return (
      <div className="day-field">
        <span className="field-name">{props.day}</span>

        <div className="row-hours">
          <InputDay start="08:00" end="09:30" day={props.day} onCheck={props.onCheck}/>
          <InputDay start="09:30" end="10:45" day={props.day} onCheck={props.onCheck}/>
          <InputDay start="10:45" end="12:00" day={props.day} onCheck={props.onCheck}/>
        </div>

        <div className="row-hours">
          <InputDay start="14:00" end="15:15" day={props.day} onCheck={props.onCheck} />
          <InputDay start="15:30" end="16:45" day={props.day} onCheck={props.onCheck} />
          <InputDay start="16:45" end="18:00" day={props.day} onCheck={props.onCheck} />
        </div>

        <div className="row-hours">
          <InputDay start="19:00" end="20:05" day={props.day} onCheck={props.onCheck} />
          <InputDay start="20:20" end="21:25" day={props.day} onCheck={props.onCheck} />
          <InputDay start="21:25" end="22:30" day={props.day} onCheck={props.onCheck} />
        </div>
      </div>
    );
  }
}

export default DayField;
