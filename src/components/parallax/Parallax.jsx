import React from 'react'
import './Parallax.scss'

function Parallax({type}) {
  return (
    <div className='parallax' style={{background:type==='services'?'linear-gradient(180deg, #111132, #0c0c1d)':'linear-gradient(180deg, #111132, #505064)'}}>
      <h1>{type==='services'? 'What We do?' : 'What We Did'}</h1>
      <div className="mountains"></div>
      <div className="planets"></div>
      <div className="start"></div>
    </div>
  )
}

export default Parallax
