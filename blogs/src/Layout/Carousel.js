import { useState } from "react";
import classes from "./Carousel.module.css";

const Carousel= (props) => {

    const [currentItem, setCurrentItem]= useState(0);
    const  [act, setAct]= useState(classes['active-left']);

    const nextItem= () => {
        setCurrentItem((prevItem) => (prevItem + 1) % props.items.length);
        setAct(()=> classes['active-left']);
    };

    const prevItem= () => {
        setCurrentItem((prevItem) => (prevItem-1 + props.items.length) % props.items.length);
        setAct(() => classes['active-right']);
    };

    return(

        <div className={classes.carousel}>
            <div className={classes['carousel-container']}>
                    {props.items.map((item, index) => (
                        <div key={index} className={`${classes['carousel-item']} ${index === currentItem ? act :''}`}>
                            <img src={item.imagePath} className={classes['carousel-item-img']} alt={`Item ${index}`}/>
                        </div>
                    ))}
            </div>
            <button className={`${classes['carousel-button']} ${classes.prev}`} onClick={prevItem}>
                &lt;
            </button>
            <button className={`${classes['carousel-button']} ${classes.next}`} onClick={nextItem}>
                &gt;
            </button> 
        </div>
    );
};

export default Carousel;