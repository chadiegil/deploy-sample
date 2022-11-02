import React, { useState } from "react";

import DateTimePicker from "react-datetime-picker";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  SAVE_RESERVATION,
  selectReservation,
} from "../../redux/slice/reservationSlice";
import styles from "./Reservation.module.scss";

const Reserve = () => {
  const [value, onChange] = useState(new Date());

  const reservationData = useSelector(selectReservation);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onSave = () => {
    // dispatch(value);
    navigate("/reservation-page");
  };

  console.log(value);
  return (
    <>
      <div className={styles.padding}>
        <h1> Reservation schedule</h1>
        <DateTimePicker
          onChange={onChange}
          value={value}
          className={styles.date}
        />
        <button className={styles.save} onClick={() => onSave()}>
          Save
        </button>
        <h4>
          Note: reservation must be 3-5 days ahead from the date you reserved
        </h4>
      </div>
    </>
  );
};

export default Reserve;
