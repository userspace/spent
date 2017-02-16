import React from 'react';
import ReactDOM from 'react-dom';

const Loading = ({children}) =>
 <div>

    <div style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: 1001,
        left: 0,
        top: 0,
        backgroundColor: 'grey',
        opacity: .20
      }}>
    </div>
    <div style={{border: "16px solid #f3f3f3", /* Light grey */
        borderTop: "16px solid #3498db", /* Blue */
        borderRadius: "50%",
        width: "120px",
        height: "120px",
        left: "50%",
        position: "absolute",
        zIndex: 1002,
        top: "50%",
        animation: "spin 2s linear infinite"
      }} />
      <div> {children} </div>
  </div>

 export default Loading;
