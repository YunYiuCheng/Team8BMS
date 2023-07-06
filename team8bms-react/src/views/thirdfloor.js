import React from 'react'

import { Helmet } from 'react-helmet'

import './thirdfloor.css'

const Thirdfloor = (props) => {
  return (
    <div className="thirdfloor-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="thirdfloor-thirdfloor">
        <div className="thirdfloor-frame1"></div>
        <img
          src="/external/thirdfloorbms811243-9qwe-400h.png"
          alt="ThirdFloorBMS811243"
          className="thirdfloor-third-floor-bms81"
        />
      </div>
    </div>
  )
}

export default Thirdfloor
