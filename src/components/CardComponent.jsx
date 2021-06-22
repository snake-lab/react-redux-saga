import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
      <div className="card-body">
        <h5 className="card-title">{props.user.name}</h5>
        <h6 className="card-title">{props.user.company}</h6>
        <p className="card-text">{props.user.company.catchPhrase}</p>
        <a className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};
export default Card;