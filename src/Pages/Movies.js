import React from 'react'

function Movies({series,onAddMovies}) {
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
    <div className="smallerLarger2">
     <div className="recommendHeader"> <h1>Recommend A Movie</h1></div>


      {/* Controlled Form */}
     <form action="" className="movieForm">
              <label htmlFor="Movie/Series Name">
                Movie/Series Name: <br />
                <input type="text" placeholder="Name of the movie/series" />
              </label>
              <br />
              <label htmlFor="MovieImage">
                {" "}
                Movie Poster: <br />
                <input type="url" placeholder="Input movie Image url" />
              </label>
              <br />
              <label htmlFor="Genre">
                Movie/Series Genre: <br />
                <input type="text" placeholder="Genre" />
              </label>
              <br />
              <label htmlFor="Short Description">
                Short Movie Description <br />{" "}
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  maxLength={250}
                  placeholder="Short Movie/Series Description"
                ></textarea>
              </label>
              <br />
              <label htmlFor="Rating">
                Rating:
                <br />
                <input
                  type="number"
                  name=""
                  id=""
                  placeholder="Rating for the show"
                />
              </label>
              <br />
              <button className="submitMovie" type="submit">
                Post Recommendation
              </button>
            </form>
    </div>
   

    



    </div>
    
    </>
  )
}

export default Movies