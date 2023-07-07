import React from 'react'

import { Helmet } from 'react-helmet'

import './element.css'

const Element = (props) => {
  return (
    <div className="element-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <img
        alt="IMG654721239"
        src="/external/img654721239-myri-1100h.png"
        className="element-img65472"
      />
      <span className="element-text">
        <span>Electrifying!</span>
      </span>
      <span className="element-text2">
        <span>You’ve encountered the elements!</span>
      </span>
      <img
        alt="map21234"
        src="/external/map21234-h3hs-200w.png"
        className="element-map2"
      />
      <img
        alt="flat750x075fpad750x1000f8f8f811272"
        src="/external/flat750x075fpad750x1000f8f8f811272-zzxn-300w.png"
        className="element-flat750x075fpad750x1000f8f8f81"
      />
      <img
        alt="IMAGE114753020031235"
        src="/external/image114753020031235-lmnj-200w.png"
        className="element-image11475302003"
      />
    </div>
  )
}

export default Element
