import React from 'react'

import { Helmet } from 'react-helmet'

import './secondfloor.css'

const Secondfloor = (props) => {
  return (
    <div className="secondfloor-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <img
        alt="Rectangle171244"
        src="/external/rectangle171244-su20p-200h.png"
        className="secondfloor-rectangle17"
      />
      <img
        alt="SecondFloorBMS9211242"
        src="/external/second-floor_bms_9.2.22-pdf-900h.jpg"
        className="secondfloor-second-floor-bms921"
      />
      <img
        src="/return-button-png-31-200h.png"
        alt="image"
        className="secondfloor-image"
      />
    </div>
  )
}

export default Secondfloor
