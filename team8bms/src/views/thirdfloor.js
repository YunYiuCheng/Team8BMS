import React from 'react'

import { Helmet } from 'react-helmet'

import './thirdfloor.css'

const Thirdfloor = (props) => {
  return (
    <div className="thirdfloor-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <img
        alt="ThirdFloorBMS811243"
        src="/external/third-floor_bms_8.2022-900h.jpg"
        className="thirdfloor-third-floor-bms81"
      />
      <img
        src="/return-button-png-31-200h.png"
        alt="image"
        className="thirdfloor-image"
      />
    </div>
  )
}

export default Thirdfloor
