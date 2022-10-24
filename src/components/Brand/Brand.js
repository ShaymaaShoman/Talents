import React from 'react'
import img from '../../assest/logo.png'
import { BrandHeader,BrandHeading,BrandImage}from './BrandStyle.js'
const Brand = () => {
  return (
    <BrandHeader BrandHeader>
    <BrandImage src={img } alt=""/>
    <BrandHeading>Talents valley</BrandHeading>

    </BrandHeader>
  )
}

export default Brand;

