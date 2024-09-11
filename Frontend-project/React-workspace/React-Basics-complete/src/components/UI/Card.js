import React from 'react';

import "./Card.css";

function Card(props) {
    const classes= 'card ' + props.className;
    
    return(
        <div className={classes}>
            {props.children}
        </div>
    );
}
// Alternate way of writing function
// const Card= (props) => {
//     const classes= 'card ' + props.className;
   
//     return(
//         <div className={classes}>
//             {props.children}
//         </div>
//     );
// }


export default Card;
