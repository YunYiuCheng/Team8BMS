import React from 'react'

import { Helmet } from 'react-helmet'

import './secondfloor.css'

const Secondfloor = (props) => {
  return (
    <div className="secondfloor-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="secondfloor-secondfloor">
        <div className="secondfloor-frame1"></div>
        <img
          src="/external/secondfloorbms9211242-tupo-400h.png"
          alt="SecondFloorBMS9211242"
          className="secondfloor-second-floor-bms921"
        />
        <img
          src="/external/rectangle171244-su20p-200h.png"
          alt="Rectangle171244"
          className="secondfloor-rectangle17"
        />
      </div>
    </div>
  )
}

export default Secondfloor
