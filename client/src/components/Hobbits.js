import React from "react";
import axios from "axios";
export default function Hobbits(props) {
  const hobbits = props.hobbits;
  // console.log(hobbits.length);
  const remove = hobbit => {
    console.log(hobbit);
    axios
      .delete(`http://localhost:5000/api/users/${hobbit.id}`)
      .then(res => {
        console.log(res.data);
        window.location.reload();
      })
      .catch(err => console.error(err));
  };
  return (
    <div className="hobbits">
      {hobbits.map(hobbit => (
        <div className="hobbit" key={hobbit.id}>
          {" "}
          <p className="name">{hobbit.name}</p>
          <p className="bio">{hobbit.bio}</p>
          <button onClick={() => remove(hobbit)}>Remove Hobbit</button>
        </div>
      ))}
    </div>
  );
}
