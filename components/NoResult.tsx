import React from 'react'

interface IProps {
    text: string;
}

const NoResult = ({text}: IProps) => {
  return (
    <div>
        <h1>NoResult</h1>
    </div>

  )
}

export default NoResult