import React from 'react'

import { Helmet } from 'react-helmet'

import './biodiversity.css'

const Biodiversity = (props) => {
  return (
    <div className="biodiversity-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="biodiversity-biodiversity">
        <div className="biodiversity-frame1"></div>
        <img
          src="/external/img654721272-59k-400h.png"
          alt="IMG654721272"
          className="biodiversity-img65472"
        />
        <img
          src="/external/image129679611272-4v5-200h.png"
          alt="IMAGE129679611272"
          className="biodiversity-image12967961"
        />
        <img
          src="/external/map21255-5ses-200w.png"
          alt="map21255"
          className="biodiversity-map2"
        />
        <span className="biodiversity-text">
          <span>Wow! You just made an astronomical discovery</span>
        </span>
        <span className="biodiversity-text2">
          <span>A Planet!</span>
        </span>
        <img
          src="/external/image114753020021235-ell-200w.png"
          alt="IMAGE114753020021235"
          className="biodiversity-image11475302002"
        />
      </div>
    </div>
  )
}

export default Biodiversity
