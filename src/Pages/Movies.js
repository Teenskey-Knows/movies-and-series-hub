import React, { useState } from "react";

const url = "http://localhost:3000/movies";

function Movies({ series, onAddMovies }) {
  const [formData, setFormData] = useState({
    image: " ",
    name: " ",
    description: " ",
    genre: " ",
    rating: " ",
    url: " ",
  });

  //This is where we define our POST REQUEST on form submission
  function handleSubmit(event) {
    event.preventDefault();
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image: formData.image,
        name: formData.name,
        description: formData.description,
        genre: formData.genre,
        rating: formData.rating,
        url: formData.url,
      }),
    })
      .then((response) => response.json())
      .then((newMovie) => {
        onAddMovies(newMovie);
        setFormData({
          ...formData,
          name: " ",
          description: " ",
          genre: " ",
          rating: " ",
          url: " ",
        });
      });
  }

  function handleChange(event) {
    const key = event.target.id;
    setFormData({ ...formData, [key]: event.target.value });
  }

  return (
    <>
      <div className="moviesComponentHeader">
        <h1 className="componentHeader">Movies & TV Shows</h1>
      </div>

      <div className="larger">
        <div className="smallerLarger">
          <div className="display">{series}</div>
        </div>
        <div className="smallerLarger2">
          <div className="recommendHeader">
            {" "}
            <h1>Recommend A Movie</h1>
          </div>

          {/* Controlled Form */}
          <form onSubmit={handleSubmit} action="" className="movieForm">
            <label htmlFor="Movie/Series Name">
              Movie/Series Name: <br />
              <input
                type="text"
                placeholder="Name of the movie/series"
                value={formData.name}
                id="name"
                onChange={handleChange}
              />
            </label>
            <br />
            <label htmlFor="MovieImage">
              {" "}
              Movie Poster: <br />
              <input
                type="url"
                placeholder="Input movie Image url"
                id="image"
                value={formData.image}
                onChange={handleChange}
              />
            </label>
            <br />
            <label htmlFor="Genre">
              Movie/Series Genre: <br />
              <input
                type="text"
                placeholder="Genre"
                value={formData.genre}
                id="genre"
                onChange={handleChange}
              />
            </label>
            <br />
            <label htmlFor="Short Description">
              Short Movie Description <br />{" "}
              <textarea
                name=""
                id="description"
                cols="30"
                rows="10"
                maxLength={250}
                value={formData.description}
                onChange={handleChange}
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
                id="rating"
                value={formData.rating}
                onChange={handleChange}
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
  );
}

export default Movies;
