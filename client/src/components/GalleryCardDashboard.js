import React from 'react'
import PropTypes from 'prop-types';
import { addDefaultCardImg } from '../utils'

import '../assets/styles/GalleryCardDashboard.css';

const GalleryCardDashboard = (props) => {
  const pin = props.pin;
  return (
    <div
      onClick={props.handleAction}
      className="card border-light m-2"
      style={{ width: "270px" }}
    >
      <img
        className="card-img-top"
        src={pin.imgUrl}
        alt="card"
        onError={addDefaultCardImg}
      />
      <div className="card-body">
        <h6 className="card-title">{pin.title}</h6>
        <button className="btn btn-default"></button>
      </div>

      <div className="card-hidden-center text-white">
        <h6>{props.hiddenText}</h6>
      </div>
    </div>
  )
}

GalleryCardDashboard.propTypes = {
  pin: PropTypes.object.isRequired,
  handleAction: PropTypes.func.isRequired,
  hiddenText: PropTypes.string
}

export default GalleryCardDashboard;
