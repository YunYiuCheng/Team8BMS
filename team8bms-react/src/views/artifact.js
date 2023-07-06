import React from 'react'

import { Helmet } from 'react-helmet'

import './artifact.css'

const Artifact = (props) => {
  return (
    <div className="artifact-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="artifact-artifact">
        <img
          src="/external/img654721239-myri-1000h.png"
          alt="IMG654721239"
          className="artifact-img65472"
        />
        <span className="artifact-text">
          <span>Electrifying!</span>
        </span>
        <span className="artifact-text2">
          <span>You’ve encountered the elements!</span>
        </span>
        <img
          src="/external/map11231-juwr-200w.png"
          alt="map11231"
          className="artifact-map1"
        />
        <img
          src="/external/map21234-h3hs-200w.png"
          alt="map21234"
          className="artifact-map2"
        />
        <img
          src="/external/flat750x075fpad750x1000f8f8f811272-zzxn-200w.png"
          alt="flat750x075fpad750x1000f8f8f811272"
          className="artifact-flat750x075fpad750x1000f8f8f81"
        />
        <img
          src="/external/image114753020031235-lmnj-200w.png"
          alt="IMAGE114753020031235"
          className="artifact-image11475302003"
        />
      </div>
    </div>
  )
}

export default Artifact
