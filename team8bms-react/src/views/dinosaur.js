import React from 'react'

import './dinosaur.css'

const Dinosaur = (props) => {
  return (
    <div className="dinosaur-container">
      <img
        alt="IMG654721042"
        src="/external/img654721042-mlsb-1100h.png"
        className="dinosaur-img65472"
      />
      <img
        alt="dino11023"
        src="/external/dino11023-4p1r-300h.png"
        className="dinosaur-dino1"
      />
      <span className="dinosaur-text">Yay! You collected</span>
      <span className="dinosaur-text1">
        <span>A Dinosaur!</span>
        <br></br>
        <span>ExtRAWRvagant</span>
      </span>
      <img
        alt="map11043"
        src="/external/map11043-5ynw-200w.png"
        className="dinosaur-map1"
      />
      <img
        alt="IMAGE114753020041235"
        src="/external/image114753020041235-s96a-200w.png"
        className="dinosaur-image11475302004"
      />
    </div>
  )
}

export default Dinosaur
