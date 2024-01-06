import { useState } from "react";
import classes from "./Carousel.module.css";

const Carousel = ({ items }) => {
  const [currentItem, setCurrentItem] = useState(0);
  const [act, setAct] = useState(classes["active"]);

  const nextItem = () => {
    setCurrentItem((prevItem) => (prevItem + 1) % items.length);
    setAct(`${classes["active-left"]} ${classes.active}`);
  };

  const prevItem = () => {
    setCurrentItem((prevItem) => (prevItem - 1 + items.length) % items.length);
    setAct(`${classes["active-right"]} ${classes.active}`);
  };

  return (
    <div className={classes.carousel}>
      <div className={classes["carousel-container"]}>
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`${classes["carousel-item"]} ${
              index === currentItem ? act : ""
            }`}
          >
            <img
              src={item.imagePath}
              className={classes["carousel-item-img"]}
              alt={`Item ${index}`}
            />
          </div>
        ))}
      </div>
      {items.length > 1 && (
        <button
          className={`${classes["carousel-button"]} ${classes.prev}`}
          onClick={prevItem}
        >
          &lt;
        </button>
      )}
      {items.length > 1 && (
        <button
          className={`${classes["carousel-button"]} ${classes.next}`}
          onClick={nextItem}
        >
          &gt;
        </button>
      )}
    </div>
  );
};

export default Carousel;
