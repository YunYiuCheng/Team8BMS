import React from 'react'

import { Helmet } from 'react-helmet'

import './firstfloor.css'

const Firstfloor = (props) => {
  return (
    <div className="firstfloor-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <img
        alt="FirstFloorBMS811028"
        src="/external/first-floor_bms_8.2022-900h.jpg"
        className="firstfloor-first-floor-bms81"
      />
      <img
        alt="Vector11244"
        src="/external/vector11244-0n4.svg"
        className="firstfloor-vector1"
      />
      <img
        src="/return-button-png-31-200h.png"
        alt="image"
        className="firstfloor-image"
      />
    </div>
  )
}

export default Firstfloor
