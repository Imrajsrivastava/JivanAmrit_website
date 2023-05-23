import React from 'react'
import './Topimg.css'

const Topimage = ({item,heading}) => {
  return (
    <div>
       <div className='card' >
     
     <img className='imagecar'
       src={item} width={"100%"} height={"450px"}
       alt="item"
     />
     <div className='overlay'>
       <div className='text'><h1>{heading}</h1></div>
     </div>
   </div>
    </div>
  )
}

export default Topimage
