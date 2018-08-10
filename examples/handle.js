/* eslint-disable react/prop-types */

import 'rc-slider/assets/index.less';
import 'rc-tooltip/assets/bootstrap.css';
import './handle.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={true}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

let initialToolTipStyles = {
  display: "none"
}
const initialTrackStyle = {
  backgroundColor: "red"
}
const onChange = () => {
  initialToolTipStyles.display = "inline";
}
const wrapperStyle = { width: 400, margin: 50 };
ReactDOM.render(
  <div>
    <div style={wrapperStyle}>
      <p>Slider with custom handle</p>
      <Slider min={0} max={20} defaultValue={3} initialTrackStyle={initialTrackStyle} initialValue={3} onChange={onChange} handle={handle} initialToolTipStyles={initialToolTipStyles} />
    </div>
    <div style={wrapperStyle}>
      <p>Range with custom handle</p>
      <Range min={0} max={20} defaultValue={[3, 10]} tipFormatter={value => `${value}%`} />
    </div>
  </div>,
  document.getElementById('__react-content')
);
