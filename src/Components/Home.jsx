import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [url, setUrl] = useState("");
  const [user, setUser] = useState([]);
  const [keys, setKeys] = useState([]);

  const [id, setId] = useState([]);
  const [name, setName] = useState([]);
  const [bookedSeat, setBookedSeat] = useState([]);

  useEffect(() => {
    if (user.length > 0) {
      const firstUserData = user[0];
      const userKeys = Object.keys(firstUserData);

      setId(userKeys[0]);
      setName(userKeys[1]);
      setBookedSeat(userKeys[2]);
    }
  }, [user]);

  function urlFunction(e) {
    e.preventDefault();
    console.log(url);
    axios
      .get(url)
      .then((res) => {
        setUser(res.data);
      })
      .catch((n) => {
        console.log(n);
      });
  }

  return (
    <div>
      <div>
        <form onSubmit={urlFunction}>
          <label htmlFor="url">Enter url</label>
          <input
            type="text "
            id="url"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          />
          <button type="submit">submit</button>
        </form>
      </div>
      <div>
        {user.map((n) => {
          return (
            <div key={n.id}>
              <h1>
                <input
                  type="text"
                  value={id}
                  onChange={(e) => {
                    setId(e.target.value);
                  }}
                />
                : {n.id}
              </h1>

              <h1>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                : {n.name}
              </h1>

              <h1>
                <input
                  type="text"
                  value={bookedSeat}
                  onChange={(e) => {
                    setBookedSeat(e.target.value);
                  }}
                />
                :
                {n.bookedSeats.map((n) => {
                  return <div>{n.seatId}</div>;
                })}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
