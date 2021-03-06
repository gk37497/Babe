import React, { useState, useEffect } from 'react';

const Timer = (props) => {
     const { initialMinute = 0, initialSeconds = 0 } = props;
     const [minutes, setMinutes] = useState(props.initialMinute);
     const [seconds, setSeconds] = useState(initialSeconds);

     useEffect(() => {
          if (props.reset) {
               setMinutes(props.initialMinute);
               setSeconds(initialSeconds);
          }
          if (props.start) {
               let myInterval = setInterval(() => {
                    if (seconds > 0) {
                         setSeconds(seconds - 1);
                    }
                    if (seconds === 0) {
                         if (minutes === 0) {
                              clearInterval(myInterval);
                         } else {
                              setMinutes(minutes - 1);
                              setSeconds(59);
                         }
                    }
               }, 1000);
          }
          return () => {
               clearInterval(myInterval);
          };
     });
     return (
          <div>
               {minutes === 0 && seconds === 0 ? (
                    <div>End</div>
               ) : (
                    <h1>
                         {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                    </h1>
               )}
          </div>
     );
};

export default Timer;
