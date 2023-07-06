import React from 'react'

import { Helmet } from 'react-helmet'

import './artifact1.css'

const Artifact1 = (props) => {
  return (
    <div className="artifact1-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="artifact1-artifact">
        <img
          src="/external/img654721271-fli6-400h.png"
          alt="IMG654721271"
          className="artifact1-img65472"
        />
        <span className="artifact1-text">
          <span>Amazing! You’ve just found</span>
        </span>
        <span className="artifact1-text2">
          <span>An Ancient Artifact</span>
        </span>
        <img
          src="/external/map11271-6p5b-200w.png"
          alt="map11271"
          className="artifact1-map1"
        />
        <img
          src="/external/artifactorangecartooncontainervaseremovebgpreview11234-4bj-200w.png"
          alt="artifactorangecartooncontainervaseremovebgpreview11234"
          className="artifact1-artifactorangecartooncontainervaseremovebgpreview1"
        />
        <img
          src="/external/image114753020051235-acjx-200w.png"
          alt="IMAGE114753020051235"
          className="artifact1-image11475302005"
        />
      </div>
    </div>
  )
}

export default Artifact1
