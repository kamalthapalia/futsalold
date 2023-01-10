import React from "react";
import "./css/Profile.css";
import { useState } from "react";

export const Profile = () => {
  const [bookedMatches, setBookedMatches] = useState([
    "1-2pm",
    "3-4 pm",
    "3-4 pm",
    "3-4 pm",
    "3-4 pm",
    "3-4 pm",
  ]);

  return (
    <div className="container">
      <h2 style={{ textAlign: "center" }}>your details</h2>
      <div className="row">
        <div className="col-md-6">
          <p>kamal thapaliya</p>
          <p>9817070845</p>
          <p>kt7@gmail.com</p>
          <p>edit your details</p>
          <p>change user password</p>
        </div>
        <div className="col-md-6">
          <div className="prof-img">
            <img
              src="https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg"
              alt="profile"
            />
          </div>
        </div>
      </div>

      <div className="prof-match">
        {bookedMatches.length < 1 ? (
          <p>you have no booked matches.</p>
        ) : (
          <div className="prof-wrap">
            <p>
              your matche(s) are on:
              {bookedMatches?.map((match) => (
                <div className="prof-bookings">{match}</div>
              ))}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
