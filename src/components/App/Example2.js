import React from 'react'

const Example2 = (props) => {
  return (
    <div>
      <button onClick={() => props.setCount(props.count + 1)}>
        {props.count}
      </button>
    </div>
  )
}

export default Example2
