import React,{useState}from 'react'
import { FaGlasses } from 'react-icons/fa'
import "../Pages/Questions.css"

function Questions() {
    const [question1,setQuestion1]=useState(false)

function toggle1(){
    setQuestion1(!question1)
}

const paragraph1 = (<p>This website offrers the visitors a chance to know what shows people recommend. When you visit the movies category from the side bare, you'll see all the movie listings with their description, ratings, genre and when you tap on the image poster, you'll be directed on where to start watching it from.</p>)


//===================================
//STATE 2
//===================================

const [question2,setQuestion2]=useState(true)

function toggle2(){
    setQuestion2(!question2)
}

const paragraph2 = (<p>Yes, as a matter of fact, when you tap on the image poster of the movie or series, you will get re-directed to where you can watch the movie or series.</p>)

//======================================
//STATE 3
//======================================

const [question3,setQuestion3]=useState(true)

function toggle3(){
    setQuestion3(!question3)
}

const paragraph3 = (<p>Yes, you can post the movie or series that you'd want to be listed on the website. Simply fill up the form on the movies section following all due requirements and it will be posted once you submity your recommendation.
</p>)


  return (
   <>
   <div className="QuestionsContainer">
    <div className="questionsCard">
   <div className="question1">
    <button onClick={toggle1} className="questionBtn1">
        
            What is this website about?
       
    </button>
   
   </div>
   
   <div className="question1Styling">
   {question1 ? <p>{paragraph1}</p> : null}
   </div>
   </div>
   
   
   </div>



   {/* ==================================== */}
<br />
   <div className="QuestionsContainer">
    <div className="questionsCard">
   <div className="question1">
    <button onClick={toggle2} className="questionBtn1">
        
            Can one have access to the movies displayed on the website?
       
    </button>
   
   </div>
   
   <div className="question1Styling">
   {question2 ? <p>{paragraph2}</p> : null}
   </div>
   </div>
   
   
   </div>
{/* ========================== */}
<br />
   <div className="QuestionsContainer">
    <div className="questionsCard">
   <div className="question1">
    <button onClick={toggle3} className="questionBtn1">
        
            Can I post a movie/series on the website?
            
       
    </button>
   
   </div>
   
   <div className="question1Styling">
   {question3 ? <p>{paragraph3}</p> : null}
   </div>
   </div>
   
   
   </div>
   </>

  )
}

export default Questions