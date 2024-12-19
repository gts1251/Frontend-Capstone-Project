import React from "react";
import "../App.css";
const ConfirmedBooking = ({ bookingData }) => {
  return (
    <header className="confirmed-booking">
      <section className="confirmation-container">
        <h1>Your booking has been confirmed!</h1>
        <p>We look forward to serving you. Thank you for choosing our restaurant!</p>
        <div className="booking-details">
          <h2>Booking Details:</h2>
          <p><strong>Date:</strong> {bookingData.date}</p>
          <p><strong>Time:</strong> {bookingData.time}</p>
          <p><strong>Guests:</strong> {bookingData.guests}</p>
          <p><strong>Occasion:</strong> {bookingData.occasion}</p>
        </div>
      </section>
    </header>
  );
};

export default ConfirmedBooking;
