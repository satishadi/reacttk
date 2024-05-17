import React, {  useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "../App.css";


export const Booktk = () => {
  const { name } = useParams();
  const [booked, setBooked] = useState([]);
  const [prebooked, setPrebooked] = useState([]);
  const [sucess, setSucess] = useState("");
  const navigate = useNavigate();

  const s = [
    101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115,
    116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130,
    131, 132, 133, 134, 135,
  ];

  // to get the all the seats available seats from database
  useEffect(() => {
    axios
      .get("http://localhost:8080/user/get")
      .then((res) => {
        return res.data;
      })
      .then((n) => {
        const allsets = n?.flatMap((m) =>
          m.bookedSeats?.map((k) => k.seatId || [])
        );
        setPrebooked(allsets);
      })
      .catch((err) => {
        console.log(err);
      });
  },[booked]);

  function handleBookSeat(n) {
    if (!booked.includes(n)) {
      setBooked([...booked, n]);
      console.log(booked);
    } else {
      console.log(n + " alredy selected ");
    }
  }

  function handleBookTicket() {
    const seatIds = booked.map((seat) => ({ seatId: seat }));

    axios({
      method: "post",
      url: "http://localhost:8080/user/post",
      data: {
        name: name,
        bookedSeats: seatIds,
      },
    }).then(
      (response) => {
        console.log(response);
        setSucess("You have booked the ticket Successfully");
      },
      (error) => {
        setSucess("Ticket not booked Please try after sometime " + error);
        console.log(error);
      }
    );
  }

  return (
    <div>
      <h1>Book Ticket</h1>
      <div>
        {s.map((x) => {
          return (
            <button
              onClick={() => {
                handleBookSeat(x);
              }}
            className={`m-2 ${prebooked.includes(x) ? "red":"green"} ${booked.includes(x)?'red':"green"} ` }
            >
              {x}
            </button>
          );
        })}
      </div>
      <h2>
        <button onClick={handleBookTicket}>Book Ticket</button>
      </h2>
      <h4>{sucess === null ? " " : sucess}</h4>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Logout
      </button>

      <div>
        {prebooked.flatMap((n) => {
          return <div>{n}</div>;
        })}
      </div>
    </div>
  );
};
