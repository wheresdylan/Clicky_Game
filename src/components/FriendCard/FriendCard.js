import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card">
    <a onClick={() => props.selectZombie(props.id)} className="shuffle">
      <div className="img-container">

        <img alt={props.name} src={props.image} />

      </div>
    </a>
  </div>
);

export default FriendCard;
