import React from "react";

function Alert(props) {
  return (
    <>
      {props.modetext && (
        <div className="alert alert-primary" role="alert">
          {props.modetext}
        </div>
      )}
    </>
  );
}

export default Alert;
