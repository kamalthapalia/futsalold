import React from "react";
import "./css/Book.css";
import { useState } from "react";

export const Book = () => {
  const [data, setData] = useState([
    "1-2pm",
    "3-4 pm",
    "3-4 pm",
    "3-4 pm",
    "3-4 pm",
    "3-4 pm",
  ]);
  const [date, setDate] = useState();
  return (
    <div className="container">
      <div className="book.main">
        <div className="row">
          <div className="col-md-6">
            <form>
              <input type="date" onChange={(e)=>{
setDate(e.target.value);
              }} />
            </form>
          </div>
          <div className="col-md-6">
            <p className="h4">The pitch is not booked on {date}</p>
            {data?.map((open) => (
              <div className="book-date-wrap">
                <div className="book-open">{open}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
