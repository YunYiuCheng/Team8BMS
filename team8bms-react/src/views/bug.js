import React from 'react'

import { Helmet } from 'react-helmet'

import './bug.css'

const Bug = (props) => {
  return (
    <div className="bug-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="bug-bug">
        <div className="bug-frame1"></div>
        <img
          src="/external/img654721234-icd-400h.png"
          alt="IMG654721234"
          className="bug-img65472"
        />
        <img
          src="/external/insectbugclipart2image211234-ygw-200h.png"
          alt="Insectbugclipart2image211234"
          className="bug-insectbugclipart2image21"
        />
        <span className="bug-text">
          <span>Yay! You collected</span>
        </span>
        <span className="bug-text2">
          <span>A Bug!</span>
        </span>
        <img
          src="/external/map11234-gz2m-200w.png"
          alt="map11234"
          className="bug-map1"
        />
        <img
          src="/external/image114753020011272-dk5-200w.png"
          alt="IMAGE114753020011272"
          className="bug-image11475302001"
        />
      </div>
    </div>
  )
}

export default Bug
