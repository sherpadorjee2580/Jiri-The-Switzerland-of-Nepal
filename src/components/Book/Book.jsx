import React from "react";
import "../Book/style/Book.css";

const Book = ({ scroll }) => {
  return (
    <div className="book">
      <div className="wrapper">
        <p className="book__title">Ready to Experience Jiri?</p>
        <p className="book__desc">
          Book your visit today and embark on a journey that will awaken your
          senses and inspire your soul.
        </p>
        <div className="book__btnContainer">
          <button className="bookNow onClick">Book Now</button>
          <button className="contact" onClick={() => scroll()}>
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
