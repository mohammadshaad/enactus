import React from 'react'
import LoaderGIF from '../images/loader.gif'

export const Loader = () => {
  return (
    <div>
      <img src={LoaderGIF} autoPlay loop muted />
    </div>
  )
}

