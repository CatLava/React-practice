import React from 'react';
// props and state
// children 
// Scroll is using children in the render component
const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border:'2px solid black', height:'500px' }}>
            {props.children}
        </div>
    );
};

export default Scroll;