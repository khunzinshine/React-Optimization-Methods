import React from 'react'

const Container = ({children}) => {
    console.log("CONTAINER RUNNING!")

  return (
    <p>{children}</p>
  )
}

export default Container