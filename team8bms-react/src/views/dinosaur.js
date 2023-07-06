import React from 'react'

import { Helmet } from 'react-helmet'

import './dinosaur.css'

const Dinosaur = (props) => {
  return (
    <div className="dinosaur-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="dinosaur-dinosaur">
        <img
          src="/external/img654721042-mlsb-400h.png"
          alt="IMG654721042"
          className="dinosaur-img65472"
        />
        <img
          src="/external/dino11023-4p1r-200h.png"
          alt="dino11023"
          className="dinosaur-dino1"
        />
        <span className="dinosaur-text">
          <span>Yay! You collected</span>
        </span>
        <span className="dinosaur-text2">
          <span>
            <span>A Dinosaur!</span>
            <br></br>
            <span>ExtRAWRvagant</span>
          </span>
        </span>
        <img
          src="/external/map11043-5ynw-200w.png"
          alt="map11043"
          className="dinosaur-map1"
        />
        <img
          src="/external/image114753020041235-s96a-200w.png"
          alt="IMAGE114753020041235"
          className="dinosaur-image11475302004"
        />
      </div>
    </div>
  )
}

export default Dinosaur
