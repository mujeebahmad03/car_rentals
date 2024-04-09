import { useEffect, useState } from "react";
import {
  IconCar,
  IconX,
  IconMapPinFilled,
  IconCalendarEvent,
} from "@tabler/icons-react";
import { Golf6, AudiA1, Toyota, Bmw320, Benz, Passat } from "@/assets";
import ReservationModal from "./ReservationModal";

function BookCar() {
  const [modalOpen, setModalOpen] = useState(false);
  const [bookingInfo, setBookingInfo] = useState({
    carType: "",
    pickUp: "",
    dropOff: "",
    pickTime: "",
    dropTime: "",
    carImgUrl: null,
  });

  const openModal = () => {
    const errorMsg = document.querySelector(".error-message");
    if (validateInputs()) {
      setModalOpen(true);
      // const modalDiv = document.querySelector(".booking-modal");
      // modalDiv.scroll(0, 0);
      errorMsg.style.display = "none";
    } else {
      errorMsg.style.display = "flex";
    }
  };

  const validateInputs = () => {
    const { pickUp, dropOff, pickTime, dropTime, carType } = bookingInfo;
    return pickUp && dropOff && pickTime && dropTime && carType;
  };

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "auto";
  }, [modalOpen]);

  const confirmBooking = () => {
    setModalOpen(false);
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "flex";
  };

  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    setBookingInfo((prev) => ({
      ...prev,
      [name]: value,
      carImgUrl: getCarImgUrl(prev.carType),
    }));
  };

  const getCarImgUrl = (carType) => {
    switch (carType) {
      case "Audi A1 S-Line":
        return AudiA1;
      case "VW Golf 6":
        return Golf6;
      case "Toyota Camry":
        return Toyota;
      case "BMW 320 ModernLine":
        return Bmw320;
      case "Mercedes-Benz GLK":
        return Benz;
      case "VW Passat CC":
        return Passat;
      default:
        return null;
    }
  };

  const hideMessage = () => {
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "none";
  };

  return (
    <>
      <section id="booking-section" className="book-section">
        <div
          onClick={openModal}
          className={`modal-overlay ${modalOpen ? "active-modal" : ""}`}
        />
        <div className="container">
          <div className="book-content">
            <div className="book-content__box">
              <h2>Book a car</h2>
              <p className="error-message">
                All fields required! <IconX width={20} height={20} />
              </p>
              <p className="booking-done">
                Check your email to confirm an order.{" "}
                <IconX width={20} height={20} onClick={hideMessage} />
              </p>
              <form className="box-form">
                <div className="box-form__car-type">
                  <label>
                    <IconCar className="input-icon" /> &nbsp; Select Your Car
                    Type <b>*</b>
                  </label>
                  <select
                    value={bookingInfo.carType}
                    name="carType"
                    onChange={handleBookingChange}
                  >
                    <option>Select your car type</option>
                    <option value="Audi A1 S-Line">Audi A1 S-Line</option>
                    <option value="VW Golf 6">VW Golf 6</option>
                    <option value="Toyota Camry">Toyota Camry</option>
                    <option value="BMW 320 ModernLine">
                      BMW 320 ModernLine
                    </option>
                    <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
                    <option value="VW Passat CC">VW Passat CC</option>
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label>
                    <IconMapPinFilled className="input-icon" /> &nbsp; Pick-up{" "}
                    <b>*</b>
                  </label>
                  <select
                    value={bookingInfo.pickUp}
                    name="pickUp"
                    onChange={handleBookingChange}
                  >
                    <option>Select pick up location</option>
                    <option>Belgrade</option>
                    <option>Novi Sad</option>
                    <option>Nis</option>
                    <option>Kragujevac</option>
                    <option>Subotica</option>
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label>
                    <IconMapPinFilled className="input-icon" /> &nbsp; Drop-of{" "}
                    <b>*</b>
                  </label>
                  <select
                    value={bookingInfo.dropOff}
                    name="dropOff"
                    onChange={handleBookingChange}
                  >
                    <option>Select drop off location</option>
                    <option>Novi Sad</option>
                    <option>Belgrade</option>
                    <option>Nis</option>
                    <option>Kragujevac</option>
                    <option>Subotica</option>
                  </select>
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="picktime">
                    <IconCalendarEvent className="input-icon" /> &nbsp; Pick-up{" "}
                    <b>*</b>
                  </label>
                  <input
                    id="picktime"
                    value={bookingInfo.pickTime}
                    name="pickTime"
                    onChange={handleBookingChange}
                    type="date"
                  />
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="droptime">
                    <IconCalendarEvent className="input-icon" /> &nbsp; Drop-of{" "}
                    <b>*</b>
                  </label>
                  <input
                    id="droptime"
                    value={bookingInfo.dropTime}
                    name="dropTime"
                    onChange={handleBookingChange}
                    type="date"
                  />
                </div>
                <button onClick={openModal} type="button">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {modalOpen && (
        <ReservationModal
          bookingInfo={bookingInfo}
          confirmBooking={confirmBooking}
          imgUrl={bookingInfo.carImgUrl}
          modal={modalOpen}
          setModalOpen={setModalOpen}
        />
      )}
    </>
  );
}

export default BookCar;
