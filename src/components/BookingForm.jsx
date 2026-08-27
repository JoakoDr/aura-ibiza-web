import { useRef, useState } from "react";

import emailjs from "@emailjs/browser";

import dayjs from "dayjs";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import { TextField } from "@mui/material";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import "../styles/bookingform.css";

function BookingForm() {

  const form = useRef();

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const [checkInDate, setCheckInDate] = useState(null);

  const [checkOutDate, setCheckOutDate] = useState(null);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const sendEmail = (e) => {

    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_1z1thi7",
        "template_w3lyrkg",
        form.current,
        "ylrOtJ2yQDMmrIOTO"
      )
      .then(
        () => {

          setLoading(false);

          setSuccess(true);

          setCheckInDate(null);

          setCheckOutDate(null);

          form.current.reset();

        },
        (error) => {

          setLoading(false);

          console.log(error.text);

          alert("Error sending form");

        }
      );
  };

  return (
    <section className="booking-form-section" id="booking">

      <div className="booking-form-container">

        <div className="booking-form-header">

          <p>
            CONCIERGE REQUEST
          </p>

          <h2>
            Plan your luxury
            <br />
            experience
          </h2>

        </div>

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

                <select
                  name="service"
                  required
                  defaultValue=""
                >

                  <option value="" disabled>
                    Select Service
                  </option>

                  <option>
                    Luxury Villas
                  </option>

                  <option>
                    Private Yachts
                  </option>

                  <option>
                    VIP Events
                  </option>

                  <option>
                    Transportation
                  </option>

                </select>

                {/* CHECK IN */}

                <DatePicker
                  label="Check-in Date"
                  value={checkInDate}
                  onChange={(newValue) =>
                    setCheckInDate(newValue)
                  }
                  views={["year", "month", "day"]}
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      variant: "outlined",
                    },
                  }}
                />

                {/* CHECK OUT */}

                <DatePicker
                  label="Check-out Date"
                  value={checkOutDate}
                  minDate={checkInDate}
                  onChange={(newValue) =>
                    setCheckOutDate(newValue)
                  }
                  views={["year", "month", "day"]}
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      variant: "outlined",
                    },
                  }}
                />

                {/* HIDDEN FIELDS */}

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

              </div>

              <textarea
                name="message"
                placeholder="Tell us about your experience..."
                rows="6"
              ></textarea>

              <button type="submit">

                {loading
                  ? "Sending..."
                  : "Send Request"}

              </button>

              {success && (
                <span className="success-message">
                  Your request has been sent successfully.
                </span>
              )}

            </form>

          </LocalizationProvider>

        </ThemeProvider>

      </div>

    </section>
  );
}

export default BookingForm;