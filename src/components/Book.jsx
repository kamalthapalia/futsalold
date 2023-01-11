import React, { useEffect } from "react";
import "./css/Book.css";
import { useState } from "react";

export const Book = ({date2 , books , setYourDate}) => {
  const [data, setData] = useState();
  useEffect(()=>{
    setData(books?.availableTimes);
  })
  return (
    <div className="container">
      <div className="book.main">
        <div className="row">
          <div className="col-md-6">
            <form>
              <input type="date" onChange={(e)=>{
setYourDate(e.target.value);
              }} />
            </form>
          </div>
          <div className="col-md-6">
            <p className="h4">The pitch is not booked on {date2}</p>
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
