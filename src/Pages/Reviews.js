import React from "react";
import Questions from "./Questions";

function Reviews() {
  return (
    <>
      <div className="Reviewbackground">
        <div className="ReviewbackgroundCentre">
          <div className="theContent">
            <h1 className="myH1">
              Frequently Asked Questions
            </h1>
            <br />
            <div className="styleQuestionsComponent">
            <Questions/>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Reviews;
