import React from 'react'

export default props => 
  <div className='buttons fadein'>
    <div className='button'>
      <label htmlFor='single'>
      </label>
      <input type='file' id='single' onChange={props.onChange} /> 
    </div>
    
    <div className='button'>
      <label htmlFor='multi'>
      </label>
      <input type='file' id='multi' onChange={props.onChange} multiple />
    </div>
  </div>