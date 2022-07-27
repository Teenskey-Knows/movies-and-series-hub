import React from "react";
import pic3 from "../Images/pic3.jpg"

function Movies() {
  return (
    <>
      <div className="moviesHeaderBackground">
        <h1 className="movieHeader">Movies & TV Shows</h1>
      </div>
      <div className="moviesBackground">
        <div className="renderMovies" style={{color: "white"}}>
         
          <div className="innerMovieCard"> 
          <div className="imageDetails">
          <img src={pic3} height="200" alt="" />
          <div className="flexWrapMdetails">
          <h1 className="movieName">
            Machine Gun Kelly
          </h1>
          <h2 className="movieGenre">
            Music
          </h2>
          <h3 className="movieDescription">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur debitis perspiciatis libero repellat rerum? Praesentium ipsum nesciunt vero, quisquam fugit quidem ipsam maiores? Debitis veritatis omnis molestias, inventore libero nostrum commodi odio. Sapiente ratione nihil possimus. Rem, nulla. Illo quisquam nulla consequuntur, accusantium minima libero dolores dolor quidem tenetur nobis quasi omnis deleniti fuga laudantium reprehenderit voluptate consectetur. Fuga soluta maxime repellat omnis autem placeat voluptate accusantium temporibus cumque cupiditate.
          </h3>
          <h4 className="movieRating"><strong>8.8</strong></h4>
          </div>
          </div>
          
          
          
          
          

          </div>
        </div>
        <div className="spacer" style={{color: "white"}}>

        
        </div>
        <div className="renderForm" style={{color: "blue"}}>
          
          <div className="addPoemForm">
            <form action="" className="movieForm">
              <label htmlFor="Movie/Series Name">Movie/Series Name: <br />
                <input type="text" placeholder="Name of the movie/series"/>
              </label>
              <br />
              <label htmlFor="MovieImage"> Movie Poster: <br /><input type="url" placeholder="Input movie Image url" /></label>
              <br />
              <label htmlFor="Genre">
                Movie/Series Genre: <br />
              <input type="text" placeholder="Genre"/>
              </label>
              <br />
              <label htmlFor="Short Description">
                Short Movie Description <br /> <textarea name="" id="" cols="30" rows="10" placeholder="Short Movie/Series Description"></textarea>
              </label>
              <br />
              <label htmlFor="Rating">Rating:
              <br />
              <input type="number" name="" id="" placeholder="Rating for the show"/>
              </label>
              <br />
              <button className="submitMovie" type="submit">Post Recommendation</button>
            </form>

          </div>
        </div>

      </div>

    </>
  );
}

export default Movies;
