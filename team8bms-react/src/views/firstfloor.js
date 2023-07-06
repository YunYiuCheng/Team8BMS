import React from 'react'

import { Helmet } from 'react-helmet'

import './firstfloor.css'

const Firstfloor = (props) => {
  return (
    <div className="firstfloor-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="firstfloor-firstfloor">
        <img
          src="/external/firstfloorbms811028-p3ui-400h.png"
          alt="FirstFloorBMS811028"
          className="firstfloor-first-floor-bms81"
        />
        <img
          src="/external/vector11244-0n4.svg"
          alt="Vector11244"
          className="firstfloor-vector1"
        />
      </div>
    </div>
  )
}

export default Firstfloor
