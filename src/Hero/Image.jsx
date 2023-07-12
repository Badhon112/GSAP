import React from 'react'
import Img from "./Abc.jpg"
import Img1 from "./Def.jpeg"
export default function Image() {
  return (
    <div className='  flex'>
        <img src={Img} alt="" className='absolute w-96 h-96 right-96 top-0' />
        <img src={Img1} alt="" className='absolute w-96 h-96 right-96 top-96' />
    </div>
  )
}
