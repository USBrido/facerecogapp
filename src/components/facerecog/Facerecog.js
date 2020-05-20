import React from 'react'

 const Facerecog = ({imageURL}) => {
  return (
    <div className='center'>
      <img alt='' src={imageURL} />
    </div>
  )
}

export default Facerecog;