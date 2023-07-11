import { React, useEffect, useRef, useState } from 'react'
import { gsap, Power3 } from 'gsap'
export default function gsap2() {
  let yellowCircle = useRef()
  let redCircle = useRef()
  let blueCircle = useRef()
  useEffect(() => {
    const timeline = gsap.timeline()
    timeline.to(yellowCircle, { opacity: 1, x: 100, ease: Power3.easeOut })
      .to(redCircle, { opacity: 1, x: 100, ease: Power3.easeOut, delay: 0.2 })
      .to(blueCircle, { opacity: 1, x: 100, ease: Power3.easeOut, delay: 0.4 })
  })
  const Yellow = () => {
    gsap.to(yellowCircle, { width: 200, height: 200, ease: Power3.easeOut, duration: .8 })
  }
  const Yellowex = () => {
    gsap.to(yellowCircle, { width: 80, height: 80, ease: Power3.easeOut, duration: .8 })
  }
  const Red = () => {
    gsap.to(redCircle, { width: 200, height: 200, ease: Power3.easeOut, duration: .8 })
  }
  const Redex = () => {
    gsap.to(redCircle, { width: 80, height: 80, ease: Power3.easeOut, duration: .8 })
  }
  const Blue = () => {
    gsap.to(blueCircle, { width: 200, height: 200, ease: Power3.easeOut, duration: .8 })
  }
  const Blueex = () => {
    gsap.to(blueCircle, { width: 80, height: 80, ease: Power3.easeOut, duration: .8 })
  }
  return (
    <div className='App text-center'>
      <header className="App_header min-h-screen flex flex-col items-center justify-center text-white bg-black">
        <div className="circle_Container">
          <div
            className="circle w-20 h-20 rounded-full bg-yellow-500 m-14"
            ref={yc => yellowCircle = yc}
            onMouseOver={Yellow}
            onMouseLeave={Yellowex}
          ></div>
          <div className="circle w-20 h-20 rounded-full bg-red-500 m-14 "
            ref={rc => redCircle = rc}
            onMouseOver={Red}
            onMouseLeave={Redex}
          ></div>
          <div className="circle w-20 h-20 rounded-full bg-blue-500 m-14"
            ref={bl => blueCircle = bl}
            onMouseOver={Blue}
            onMouseLeave={Blueex}
          ></div>
        </div>
      </header>
    </div>
  )
}
