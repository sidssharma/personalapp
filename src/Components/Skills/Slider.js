import React from 'react';
import './Slider.css';

const Slider = (props) => {
  return (
    <div>
      <div className="parentDiv">
        <div className="slider" style={{ width: `${props.width}%`, backgroundColor: props.sliderColor }}></div>
        <div className="pointerplusText" style={{ left: `${props.width}%` }}>
          <h5 className="percentageText" style={{ color: props.sliderColor }}>{props.width}</h5>
          <div className="pointer" style={{ backgroundColor: props.pointerColor }}></div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
