import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
export default function Text() {
    let titlet = useRef(null)
    let desc = useRef(null)
    useEffect(() => {
        // console.log(titlet);
        const tl = gsap.timeline()
        tl.to(titlet, { opacity: 1, y: -100 })
            .to(desc, { opacity: 1, y: -100,delay:.2 })
    })
    return (
        <div className='mt-96 w-1/2 '>
            <h1 className='font-bold ' ref={el => titlet = el}>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
            <div className='font-thin' ref={el => desc = el}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet, soluta? Ad quasi hic recusandae minus corporis possimus quas aperiam quia.</div>
        </div>
    )
}
