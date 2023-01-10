import React from "react";
import "./css/Review.css";

const Reviews = () => {
  return (
    <div className="container">
      <div className="rev-wrap">
        <div className="rev-card">
          <div className="rev-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            ullam nam perspiciatis voluptatum modi id amet quia similique,
            mollitia sed impedit necessitatibus illum consequuntur officiis
            aliquid animi fuga aliquam laboriosam.
          </div>
          <div className="rev-btm">
            <div className="rev-name">kamal</div>
            <div>
              <img
                className="rev-img"
                src="https://files.catbox.moe/fckjyj.jpg"
                alt=""
              />
            </div>
          </div>
        </div>      </div>
    </div>
  );
};
export default Reviews;
