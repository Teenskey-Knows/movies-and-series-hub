import React from "react";
import pic3 from "../Images/pic3.jpg";

function Movies() {
  return (
    <>
      <div className="moviesHeaderBackground">
        <h1 className="movieHeader">Movies & TV Shows</h1>
      </div>
      <div className="moviesBackground">
        <div className="renderMovies" style={{ color: "white" }}>
          <div className="innerMovieCard">
            {/* =================================================== */}
                  {/* Movie Rendering Starts here */}
          {/* =================================================== */}


            <div className="imageDetails">
             
              <div className="allMovieDescription">
              <a href="https://www.imdb.com/title/tt21064272/" target="blank"><img src={pic3} height="200" alt="" /></a>
                <p className="movieName"><span><strong>Name:</strong></span>Machine Gun Kelly</p>
                <p className="movieGenre"> <span><strong>Genre:</strong></span> Music</p>
                <p className="movieDescription">
                  <span>
                    <strong>Description:</strong></span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, repellendus voluptatum in placeat cupiditate sint consequuntur similique ad saepe consequatur amet expedita voluptate eaque officiis recusandae vitae maxime veniam tenetur, libero, consectetur magnam illum! Omnis et mollitia ex commodi sapiente aliquam adipisci at, tempora quas possimus nisi? In debitis exercitationem asperiores nihil quibusdam, voluptatum nisi adipisci voluptatem deserunt aspernatur repellat?
                </p>
                <p className="movieRating">
                 <span><strong>Rating</strong></span> <strong>8.8</strong>
                </p>
                </div>
            </div>
            {/* ================= */}





            <div className="imageDetails">
             
             <div className="allMovieDescription">
             <a href="https://www.imdb.com/title/tt21064272/" target="blank"><img src={pic3} height="200" alt="" /></a>
               <p className="movieName"><span><strong>Name:</strong></span>Machine Gun Kelly</p>
               <p className="movieGenre"> <span><strong>Genre:</strong></span> Music</p>
               <p className="movieDescription">
                 <span>
                   <strong>Description:</strong></span>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, repellendus voluptatum in placeat cupiditate sint consequuntur similique ad saepe consequatur amet expedita voluptate eaque officiis recusandae vitae maxime veniam tenetur, libero, consectetur magnam illum! Omnis et mollitia ex commodi sapiente aliquam adipisci at, tempora quas possimus nisi? In debitis exercitationem asperiores nihil quibusdam, voluptatum nisi adipisci voluptatem deserunt aspernatur repellat?
               </p>
               <p className="movieRating">
                <span><strong>Rating</strong></span> <strong>8.8</strong>
               </p>
               </div>
           </div>



           <div className="imageDetails">
             
             <div className="allMovieDescription">
             <a href="https://www.imdb.com/title/tt21064272/" target="blank"><img src={pic3} height="200" alt="" /></a>
               <p className="movieName"><span><strong>Name:</strong></span>Machine Gun Kelly</p>
               <p className="movieGenre"> <span><strong>Genre:</strong></span> Music</p>
               <p className="movieDescription">
                 <span>
                   <strong>Description:</strong></span>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, repellendus voluptatum in placeat cupiditate sint consequuntur similique ad saepe consequatur amet expedita voluptate eaque officiis recusandae vitae maxime veniam tenetur, libero, consectetur magnam illum! Omnis et mollitia ex commodi sapiente aliquam adipisci at, tempora quas possimus nisi? In debitis exercitationem asperiores nihil quibusdam, voluptatum nisi adipisci voluptatem deserunt aspernatur repellat?
               </p>
               <p className="movieRating">
                <span><strong>Rating</strong></span><strong>8.8</strong>
               </p>
               </div>
           </div>
            




            

         
           
            



            
          </div>
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
      </div>
    </>
  );
}

export default Movies;

