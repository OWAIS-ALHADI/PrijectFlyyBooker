import React from "react";

const LandingPage = () => {
  return (
    <div id="landing-page">
      <h1>Welcome to Our Services !</h1>
      <img
        src="/images/hotel.jpg" 
        alt="hotel"
        id="hotel"
      />
      <p>Explore the range of services we provide to make your travel experience exceptional:</p>
      <ul id="service-list">
        <li>Flight Booking</li>
        <li>Hotel Reservations</li>
        <li>Car Rentals</li>
        <li>Tour Packages</li>
      </ul>
    </div>
  );
};

export default LandingPage;
