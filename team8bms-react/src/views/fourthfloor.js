import React from 'react'

import { Helmet } from 'react-helmet'

import './fourthfloor.css'

const Fourthfloor = (props) => {
  return (
    <div className="fourthfloor-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="fourthfloor-fourthfloor">
        <div className="fourthfloor-frame1"></div>
        <img
          src="/external/fourthfloorbms811244-j16-400h.png"
          alt="FourthFloorBMS811244"
          className="fourthfloor-fourth-floor-bms81"
        />
      </div>
    </div>
  )
}

export default Fourthfloor
