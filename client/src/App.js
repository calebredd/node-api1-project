import React, { useEffect, useState } from "react";
import "./App.scss";
import axios from "axios";
import Hobbits from "./components/Hobbits";
function App() {
  const [hobbits, setHobbits] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users")
      .then(res => {
        console.log(res.data.users);
        setHobbits(res.data.users);
      })
      .catch(err => console.error(err));
  }, []);
  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.bio.value);
    axios
      .post(`http://localhost:5000/api/users`, {
        name: e.target.name.value,
        bio: e.target.bio.value
      })
      .then(res => {
        console.log(res.data);
        window.location.reload();
      })
      .catch(err => console.error(err));
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Middle Earth API Adventures!</h1>
        <form onSubmit={handleSubmit} className="addHobbit">
          <input type="text" name="name" placeholder="Hobbit's Name" />
          <input type="text" name="bio" placeholder="Hobbit's Bio" />
          <button type="submit">Add Hobbit</button>
        </form>
      </header>
      <Hobbits hobbits={hobbits} />
    </div>
  );
}

export default App;
