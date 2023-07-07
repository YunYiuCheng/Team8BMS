import React from 'react'

import { Helmet } from 'react-helmet'

import './fourthfloor.css'

const Fourthfloor = (props) => {
  return (
    <div className="fourthfloor-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <img
        src="/return-button-png-31-200h.png"
        alt="image"
        className="fourthfloor-image"
      />
      <img
        alt="image"
        src="/external/fourth-floor_bms_8.2022-1500w.jpg"
        className="fourthfloor-image1"
      />
    </div>
  )
}

export default Fourthfloor
