import React from "react";


console.log("Movies component")

function Movies({name,image,genre,description,url,rating}) {
  


  return (
    <>
    <div className="entireMoviesBackground">
      <div className="moviesHeader">
        <h1 className="headerH1">Movies & TV Shows</h1>
      </div>
      <br />
      <div className="largerMovieHolder">
        <h1>{name}</h1>
        <img src={image} alt="" />
        <p>{description}</p>

      </div>
    </div>
      {/* <div className="moviesHeaderBackground">
        <h1 className="movieHeader">Movies & TV Shows</h1>
      </div>
      <div className="moviesBackground">
        <div className="renderMovies" style={{ color: "white" }}>
          <div className="innerMovieCard"> */}
            {/* =================================================== */}
                  {/* Movie Rendering Starts here */}
          {/* =================================================== */}


            {/* <div className="imageDetails">
             
              <div className="allMovieDescription">
              <a href="https://www.imdb.com/title/tt21064272/" target="blank"><img src={pic3} height="200" alt="" /></a>
                <p className="movieName"><span><strong>Name:</strong></span>{name}</p>
                <p className="movieGenre"> <span><strong>Genre:</strong></span> {genre}</p>
                <p className="movieDescription">
                  <span>
                    <strong>Description:</strong></span>
               {description}
                </p>
                <p className="movieRating">
                 <span><strong>Rating</strong></span> <strong>{rating}</strong>
                </p>
                </div>
            </div> */}
            {/* ================= */}









            

         
           
            



            
          {/* </div>
        </div>
        <div className="spacer" style={{ color: "white" }}></div>
        <div className="renderForm" style={{ color: "blue" }}>
          <div className="addPoemForm">
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
      </div> */}
    </>
  );
}

export default Movies;

