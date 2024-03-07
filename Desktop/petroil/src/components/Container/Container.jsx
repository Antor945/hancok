import React  from 'react'

const Container = ({Children}) => {
  return (
    <div className='max-w-container mx-auto list-none m-0 p-0'>{Children}</div>
  )
}

export default Container