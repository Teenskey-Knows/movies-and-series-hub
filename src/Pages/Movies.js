import React from 'react'

function Movies({series}) {
  return (
    <>
    <div className="moviesComponentHeader">
      <h1 className="componentHeader">Movies & TV Shows</h1>
    </div>
    <div className="larger">
      <div className="smallerLarger">
    <div className="display">
      {series}
    </div>
    </div>

    </div>
    </>
  )
}

export default Movies