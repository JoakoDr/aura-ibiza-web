import { useRef, useState } from "react";

import emailjs from "@emailjs/browser";

import dayjs from "dayjs";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import Footer from "../components/Footer";
import Header from "../components/Header";

import "../styles/villabooking.css";


function VillaBooking() {

  const form = useRef();

  const [checkInDate, setCheckInDate] = useState(null);

  const [checkOutDate, setCheckOutDate] = useState(null);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm(
      "service_1z1thi7",
      "template_0map2lh",
      form.current,
      "ylrOtJ2yQDMmrIOTO"
    );

    alert("Request sent successfully");

    form.current.reset();

    setCheckInDate(null);

    setCheckOutDate(null);
  };

  return (

    <>
      <Header />

      <section className="villa-booking-page">

        {/* BACKGROUND OVERLAY */}

        <div className="villa-overlay"></div>

        {/* HERO */}

        <div className="villa-hero">

          <p>
            LUXURY VILLA EXPERIENCE
          </p>

          <h1>
            Find your
            <br />
            dream villa
          </h1>

          <span>
            Exclusive handpicked villas in Ibiza
            tailored to your lifestyle, privacy
            and luxury expectations.
          </span>

        </div>

        {/* FORM */}

        <div className="booking-container">

          <ThemeProvider theme={darkTheme}>

            <LocalizationProvider dateAdapter={AdapterDayjs}>

              <form
                ref={form}
                onSubmit={sendEmail}
                className="booking-form"
              >

                <div className="form-grid">

                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                  />

                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    required
                  />

                  <DatePicker
                    label="Check-in Date"
                    value={checkInDate}
                    onChange={(newValue) =>
                      setCheckInDate(newValue)
                    }
                    views={["year","month","day"]}
                  />

                  <DatePicker
                    label="Check-out Date"
                    value={checkOutDate}
                    minDate={checkInDate}
                    onChange={(newValue) =>
                      setCheckOutDate(newValue)
                    }
                    views={["year","month","day"]}
                  />

                  <input
                    type="text"
                    name="preferred_location"
                    placeholder="Preferred Location"
                    required
                  />

                  <input
                    type="number"
                    name="bedrooms"
                    placeholder="Number of Bedrooms"
                    required
                  />

                  <input
                    type="number"
                    name="bathrooms"
                    placeholder="Number of Bathrooms"
                    required
                  />

                  <input
                    type="text"
                    name="budget"
                    placeholder="Budget"
                    required
                  />

                  <select
                    name="client_profile"
                    required
                    defaultValue=""
                  >

                    <option value="" disabled>
                      Client Profile
                    </option>

                    <option>
                      Couple
                    </option>

                    <option>
                      Family
                    </option>

                    <option>
                      Friends Group
                    </option>

                    <option>
                      VIP Client
                    </option>

                  </select>

                </div>

                <textarea
                  name="requirements"
                  placeholder="Specific Requirements"
                  rows="6"
                ></textarea>

                <input
                  type="hidden"
                  name="checkin"
                  value={
                    checkInDate
                      ? dayjs(checkInDate).format("DD/MM/YYYY")
                      : ""
                  }
                />

                <input
                  type="hidden"
                  name="checkout"
                  value={
                    checkOutDate
                      ? dayjs(checkOutDate).format("DD/MM/YYYY")
                      : ""
                  }
                />

                <button type="submit">
                  Send Request
                </button>

              </form>

            </LocalizationProvider>

          </ThemeProvider>

        </div>

      </section>
      
      <Footer />

    </>

  );
}

export default VillaBooking;