import React from "react";
import "./MyList.css";

const myList = props => {
  return (
    <div onClick={props.handleClick} className="MyList">
      {props.myList}
    </div>
  );
};
export default myList;
