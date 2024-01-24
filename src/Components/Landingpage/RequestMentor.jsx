import React from 'react'
import './requestmentor.css'
import{ ReactComponent as SmilingManIcon } from '../Common/Utils/smilingmanicon.svg'
import{ ReactComponent as SmilingManIconReactangle } from '../Common/Utils/smimingmanrectangleicon.svg'
function RequestMentor() {
  return (
    <div className='request-mentor-section'>
        <div className="request-mentor-content">
        Grow your startup with our entrepreneurship coterie 
        and find the perfect gurus and incubators to upscale your dream.
        <div className="request-mentor-content-footer">
            <p>Have someone on your mind to guide you? We’ll bring them to you!</p>
            <button>Request a mentor</button>
        </div>
        </div>
        <div className="request-mentor-image">
            <SmilingManIcon className="smiling-man-standing"/>
            {/* <SmilingManIconReactangle className="smiling-man-rectangle-background"/> */}
        </div>

      
    </div>
  )
}

export default RequestMentor
