import styles from "./styles.module.css";
import { useState } from "react";

function Rating() {
  const [ratingValue, setRatingValue] = useState(0);
  const ratingList = [
    "https://img.freepik.com/premium-vector/two-five-gold-stars-rating-bubble-chat-3d-mesh-vector_369481-4361.jpg?w=1060",

    "https://img.freepik.com/premium-vector/two-five-gold-stars-rating-bubble-chat-3d-mesh-vector_369481-4357.jpg?w=1060",

    "https://img.freepik.com/premium-vector/one-five-gold-stars-rating-bubble-chat-3d-mesh-vector_369481-4347.jpg?w=1060",

    "https://img.freepik.com/premium-vector/five-gold-stars-rating-bubble-chat-3d-mesh-vector_369481-4345.jpg?w=1060",
  ];
  return (
    <div className={styles.rating}>
      <img src={ratingList[ratingValue]} alt="Rating" />
      <div className={styles.ratingBtn}>
        <button
          onClick={() => {
            setRatingValue(0);
          }}
        >
          Плохо
        </button>{" "}
        <button
          onClick={() => {
            setRatingValue(1);
          }}
        >
          Приемлемо
        </button>{" "}
        <button
          onClick={() => {
            setRatingValue(2);
          }}
        >
          Хорошо
        </button>{" "}
        <button
          onClick={() => {
            setRatingValue(3);
          }}
        >
          Отлично
        </button>
      </div>
    </div>
  );
}

export default Rating;
