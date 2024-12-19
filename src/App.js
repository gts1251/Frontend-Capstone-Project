import React, { useState } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";
import ConfirmedBooking from "./components/ConfirmedBooking";

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);
  const [bookingData, setBookingData] = useState(null);

  const handleReservationClick = () => setShowForm(true);
  const handleFormClose = () => setShowForm(false);

  const handleBookingConfirmed = (data) => {
    setShowForm(false);
    setIsBookingConfirmed(true);
    setBookingData(data);
  };

  return (
    <>
      <Nav />
      {!isBookingConfirmed ? (
        <>
          {!showForm ? (
            <Header onReserveClick={handleReservationClick} />
          ) : (
            <BookingForm
              onClose={handleFormClose}
              onConfirm={handleBookingConfirmed}
            />
          )}
        </>
      ) : (
        <ConfirmedBooking bookingData={bookingData} />
      )}
      <Footer />
    </>
  );
};

export default App;
