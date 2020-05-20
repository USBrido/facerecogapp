import React from 'react'
import '../imageform/Imageform.css'

const Imageform = ({ onInputChange, onSubmit }) => {
  return (
    <div>
      <p className='f3'>
        {'Paste your picture link here'}
      </p>
      <div className='center'>
        <div className='form pa4 br3 shadow-2'>
        <input className='f4 pa2 w-70' type='text' onChange={onInputChange}/>
        <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onSubmit}>Detect</button>
        </div>
      </div>
    </div>
  )
}

export default Imageform;