import React from "react";
import pic from "../Images/mypic.jpg"
import pic2 from "../Images/pic2.jpg"


function Home() {
console.log("Home")
  return (
    <>
    
      <div className="home">
      
        <br />
        <h1 className="h1">Daniel Movie Hub</h1>
      </div>
      <div className="separator"></div>
      
      <div className="backImage">
        <br />
        <h1 className="h1home2">
            Welcome back!
        </h1>
        <h2 className="h2home2">
            Get to know more about the Trending TV <br/>Shows & series.Review them & also <br/>add your favourite recommendations.
        </h2>
        
      </div>
      <div className="separator"></div>
      <div className="stayAcquaintedPart">
        <br />
        <div className="stayAcquaintedContainer">
        <img clasName="stayAImage" style={{borderRadius : 30}}src={pic} alt="" height={200} />
        <div className="stayAcquaintedWordings">
          <h1 className="h1SAW1">Stay Acquainted</h1>
          <h2 className="h2SAW">
            Get to know what shows <br/>
            people recommend & how <br/>good they are by reviewing their rating
          </h2>
        </div>
        </div>
  
      <div className="separator"></div>
      
      <div className="activelyContributePart">
      <br />
        <div className="activelyContributeContainer">
          <div className="activelyContributeWordings">
            <h1 className="ACW1">Actively Contribute.</h1>
            <h2 className="ACW">
              Post your favourite <br /> shows as a recommendation <br />  to others.
            </h2>
            </div>
            <div className="ACImage">
            <img className="AContributeImage" src={pic2} height={250} alt="" />

            </div>
          </div>
        </div>
        <div className="separator"></div>
        


      </div>


        

      
      
    </>
  );
}

export default Home;
