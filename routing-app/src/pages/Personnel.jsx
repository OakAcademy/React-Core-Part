import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Personnel = () => {
  const [people, setPeople] = useState([]);
  const navigate = useNavigate();
  const getPeople = () => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((data) => setPeople(data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPeople();
  }, []);
  return (
    <div className="personnelWrapper">
      <h1>Personnel List</h1>
      <div className="cardWrapper">
        {people.map((person) => {
          const { id, first_name, last_name, avatar } = person;
          return (
            <div key={id} className="personnelCard">
              <img src={avatar} alt="img" />
              <p>
                {first_name} {last_name}
              </p>
              <button onClick={() => navigate(`/personnel/${id}`)}>
                Detail
              </button>
              {/* <Link to={`/personnel/${id}`}>Detail</Link> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Personnel;
