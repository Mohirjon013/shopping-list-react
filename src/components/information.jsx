import React from 'react'

const Information = ({length}) => {
  return (
    <div className='info'>
      <h1>Shopping List</h1>
      <span>{length}</span>
    </div>
  )
}

export default Information
