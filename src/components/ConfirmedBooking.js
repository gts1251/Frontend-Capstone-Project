import React from "react";
import "../App.css";
const ConfirmedBooking = ({ bookingData }) => {
  return (
    <header className="confirmed-booking">
      <section className="confirmation-container">
        <h1>Your booking has been confirmed!</h1>
        <div className="booking-details">
          <p><strong>Date:</strong> {bookingData.date}</p>
          <p><strong>Time:</strong> {bookingData.time}</p>
          <p><strong>Guests:</strong> {bookingData.guests}</p>
        </div>
      </section>
    </header>
  );
};

export default ConfirmedBooking;
