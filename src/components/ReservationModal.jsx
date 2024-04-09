import {
  IconInfoCircleFilled,
  IconX,
  IconMapPinFilled,
} from "@tabler/icons-react";
import { useState } from "react";
import PropTypes from "prop-types";

const ReservationModal = ({
  bookingInfo,
  confirmBooking,
  imgUrl,
  modal,
  setModalOpen,
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    age: "",
    address: "",
    city: "",
    zipCode: "",
  });

  // taking value of modal inputs
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(formData);
  };

  return (
    <div className={`booking-modal ${modal ? "active-modal" : ""}`}>
      {/* title */}
      <div className="booking-modal__title">
        <h2>Complete Reservation</h2>
        <IconX onClick={() => setModalOpen(false)} />
      </div>
      {/* message */}
      <div className="booking-modal__message">
        <h4>
          <IconInfoCircleFilled /> Upon completing this reservation enquiry, you
          will receive:
        </h4>
        <p>
          Your rental voucher to produce on arrival at the rental desk and a
          toll-free customer support number.
        </p>
      </div>
      {/* car info */}
      <div className="booking-modal__car-info">
        <div className="dates-div">
          <div className="booking-modal__car-info__dates">
            <h5>Location & Date</h5>
            <span>
              <IconMapPinFilled />
              <div>
                <h6>Pick-Up Date & Time</h6>
                <p>
                  {bookingInfo.pickTime} /{" "}
                  <input type="time" className="input-time" />
                </p>
              </div>
            </span>
          </div>

          <div className="booking-modal__car-info__dates">
            <span>
              <IconMapPinFilled />
              <div>
                <h6>Drop-Off Date & Time</h6>
                <p>
                  {bookingInfo.dropTime} /{" "}
                  <input type="time" className="input-time" />
                </p>
              </div>
            </span>
          </div>

          <div className="booking-modal__car-info__dates">
            <span>
              <IconMapPinFilled />
              <div>
                <h6>Pick-Up Location</h6>
                <p>{bookingInfo.pickUp}</p>
              </div>
            </span>
          </div>

          <div className="booking-modal__car-info__dates">
            <span>
              <IconMapPinFilled />
              <div>
                <h6>Drop-Off Location</h6>
                <p>{bookingInfo.dropOff}</p>
              </div>
            </span>
          </div>
        </div>
        <div className="booking-modal__car-info__model">
          <h5>
            <span>Car -</span> {bookingInfo.carType}
          </h5>
          {imgUrl && <img src={imgUrl} alt="car_img" />}
        </div>
      </div>
      {/* personal info */}
      <div className="booking-modal__person-info">
        <h4>Personal Information</h4>
        <form className="info-form">
          <div className="info-form__2col">
            <span>
              <label>
                First Name <b>*</b>
              </label>
              <input
                value={formData.firstName}
                name="firstName"
                onChange={handleFormChange}
                type="text"
                placeholder="Enter your first name"
                required
              />
              <p className="error-modal">This field is required.</p>
            </span>

            <span>
              <label>
                Last Name <b>*</b>
              </label>
              <input
                value={formData.lastName}
                name="lastName"
                onChange={handleFormChange}
                type="text"
                placeholder="Enter your last name"
                required
              />
              <p className="error-modal ">This field is required.</p>
            </span>

            <span>
              <label>
                Phone Number <b>*</b>
              </label>
              <input
                value={formData.phone}
                name="phone"
                onChange={handleFormChange}
                type="tel"
                placeholder="Enter your phone number"
                required
              />
              <p className="error-modal">This field is required.</p>
            </span>

            <span>
              <label>
                Age <b>*</b>
              </label>
              <input
                value={formData.age}
                name="age"
                onChange={handleFormChange}
                type="number"
                placeholder="18"
                required
              />
              <p className="error-modal ">This field is required.</p>
            </span>
          </div>

          <div className="info-form__1col">
            <span>
              <label>
                Email <b>*</b>
              </label>
              <input
                value={formData.email}
                name="email"
                onChange={handleFormChange}
                type="email"
                placeholder="Enter your email address"
                required
              />
              <p className="error-modal">This field is required.</p>
            </span>

            <span>
              <label>
                Address <b>*</b>
              </label>
              <input
                value={formData.address}
                name="address"
                onChange={handleFormChange}
                type="text"
                placeholder="Enter your street address"
                required
              />
              <p className="error-modal ">This field is required.</p>
            </span>
          </div>

          <div className="info-form__2col">
            <span>
              <label>
                City <b>*</b>
              </label>
              <input
                value={formData.city}
                name="city"
                onChange={handleFormChange}
                type="text"
                placeholder="Enter your city"
                required
              />
              <p className="error-modal">This field is required.</p>
            </span>

            <span>
              <label>
                Zip Code <b>*</b>
              </label>
              <input
                value={formData.zipCode}
                name="zipCode"
                onChange={handleFormChange}
                type="text"
                placeholder="Enter your zip code"
                required
              />
              <p className="error-modal ">This field is required.</p>
            </span>
          </div>

          <span className="info-form__checkbox">
            <input type="checkbox" />
            <p>Please send me latest news and updates</p>
          </span>

          <div className="reserve-button">
            <button onClick={confirmBooking}>Reserve Now</button>
          </div>
        </form>
      </div>
    </div>
  );
};

ReservationModal.propTypes = {
  bookingInfo: PropTypes.object.isRequired,
  confirmBooking: PropTypes.func.isRequired,
  imgUrl: PropTypes.string,
  modal: PropTypes.bool,
  setModalOpen: PropTypes.func,
};

export default ReservationModal;
